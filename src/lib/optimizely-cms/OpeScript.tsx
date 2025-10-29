'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface OptimizelyContentSavedEvent {
  type: 'optimizely:cms:contentSaved';
  previewToken?: string;
}

export function OpeScript() {
  const router = useRouter();
  const lastVersionRef = useRef<string | null>(null);
  const refreshTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load the Optimizely On-Page Editing script
    const script = document.createElement('script');
    script.src = 'https://cg.optimizely.com/app/editor/clientresources/latest/communicationinjector.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for content saved events from Optimizely CMS
    const handleMessage = (event: MessageEvent<any>) => {
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
            console.log('New version:', newVersion);

            // Check if this is the same version we just processed
            if (lastVersionRef.current === newVersion) {
              console.log('Same version as last refresh, ignoring duplicate event');
              return;
            }

            // Update last processed version
            lastVersionRef.current = newVersion;

            // Clear any pending refresh timeout
            if (refreshTimeoutRef.current) {
              clearTimeout(refreshTimeoutRef.current);
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
                    console.log('URL still not updated, manual reload may be needed');
                    // Don't automatically reload to avoid showing blank page
                    // The user may need to manually refresh or wait longer
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
