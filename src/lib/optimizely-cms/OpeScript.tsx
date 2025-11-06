'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface OptimizelyContentSavedEvent {
  type: 'optimizely:cms:contentSaved';
  previewToken?: string;
}

interface OpeScriptProps {
  nonce?: string;
}

export function OpeScript({ nonce }: OpeScriptProps) {
  const router = useRouter();
  const lastEditTimestampRef = useRef<number>(0);
  const refreshTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pendingVersionRef = useRef<string | null>(null);

  useEffect(() => {
    // Load the Optimizely On-Page Editing script
    const script = document.createElement('script');
    script.src = 'https://cg.optimizely.com/app/editor/clientresources/latest/communicationinjector.js';
    script.async = true;
    if (nonce) {
      script.nonce = nonce;
    }
    document.body.appendChild(script);

    // Listen for content saved events from Optimizely CMS
    const handleMessage = (event: MessageEvent<any>) => {
      // ✅ SECURITY FIX: Validate origin to prevent malicious messages
      const trustedOrigins = [
        'https://cg.optimizely.com',
        'https://cms.optimizely.com',
        'https://app-preview.cms.optimizely.com',
      ];

      const isOriginTrusted = trustedOrigins.some(origin =>
        event.origin === origin || event.origin.endsWith('.cms.optimizely.com')
      );

      if (!isOriginTrusted) {
        // Silently ignore messages from untrusted origins
        return;
      }

      // Check for contentSaved event - Optimizely uses event.data.id
      if (event.data?.id === 'contentSaved' || event.data?.type === 'optimizely:cms:contentSaved') {
        console.log('Content saved event received:', JSON.stringify(event.data, null, 2));

        // Extract the content link to get the new version
        const contentLink = event.data?.data?.contentLink ||
                          event.data?.message?.contentLink ||
                          event.data?.data?.savedContentLink ||
                          event.data?.message?.savedContentLink;

        console.log('Content link:', contentLink);

        if (contentLink) {
          // Extract version from contentLink (format: "21_80" where 80 is the version)
          const versionMatch = contentLink.match(/_(\d+)$/);
          if (versionMatch) {
            const newVersion = versionMatch[1];
            const now = Date.now();
            console.log('New version:', newVersion);

            // Use timestamp to detect genuine new edits instead of version number alone
            // This handles cases where multiple rapid edits share the same version number
            // Only ignore if the same version was processed within the last 500ms (true duplicate)
            if (pendingVersionRef.current === newVersion && (now - lastEditTimestampRef.current) < 500) {
              console.log('Duplicate event within 500ms, ignoring');
              return;
            }

            // Update tracking refs
            pendingVersionRef.current = newVersion;
            lastEditTimestampRef.current = now;

            // Clear any pending refresh timeout to debounce rapid edits
            if (refreshTimeoutRef.current) {
              clearTimeout(refreshTimeoutRef.current);
              console.log('Cleared pending refresh, will reschedule for new edit');
            }

            // Debounce the refresh to avoid multiple rapid reloads
            // Wait for Optimizely CMS to update the iframe URL and for Graph API to index
            refreshTimeoutRef.current = setTimeout(() => {
              console.log('Checking for preview update, version:', newVersion);
              console.log('Current URL:', window.location.href);

              // Check if CMS has updated the iframe URL
              const currentUrl = new URL(window.location.href);
              const currentVersion = currentUrl.searchParams.get('ver');

              if (currentVersion === newVersion) {
                console.log('URL already updated to new version, reloading to fetch content');
                window.location.reload();
              } else {
                console.log(`URL not updated yet (current: ${currentVersion}, expected: ${newVersion})`);
                console.log('Waiting for CMS to update iframe URL or indexing to complete...');

                // Wait a bit longer and check again
                setTimeout(() => {
                  const recheckUrl = new URL(window.location.href);
                  const recheckVersion = recheckUrl.searchParams.get('ver');

                  if (recheckVersion === newVersion) {
                    console.log('URL now updated, reloading');
                    window.location.reload();
                  } else {
                    console.log('URL still not updated after 3s total wait');
                    console.log('Reloading anyway to fetch latest draft content');
                    // Reload anyway - the preview.tsx will fetch latest draft if no version param
                    window.location.reload();
                  }
                }, 2000);
              }
            }, 1000); // Check after 1 second initially
          } else {
            console.log('Could not extract version from contentLink, reloading');
            window.location.reload();
          }
        } else {
          console.log('No contentLink found, reloading current page');
          window.location.reload();
        }
      }
    };

    // Add message listener
    window.addEventListener('message', handleMessage);

    return () => {
      // Cleanup: remove script and listener when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
      if (refreshTimeoutRef.current) {
        clearTimeout(refreshTimeoutRef.current);
      }
    };
  }, [router]);

  return null;
}
