import { draftMode } from "next/headers";
import { createPage } from "@/lib/optimizely-cms/page";
import { createClient, AuthMode } from "@/lib/optimizely-cms";

// Import parts from the build
import { getContentByPath } from "@/gql/functions";
import factory from "@/components/factory";

// Read the URLs from the environment
const netlifyUrl = process.env.URL;
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined;
const customUrl = process.env.SITE_DOMAIN ? (process.env.SITE_DOMAIN.startsWith('http') ? process.env.SITE_DOMAIN : `https://${process.env.SITE_DOMAIN}`) : undefined;

// Determine the ChannelURL
const channelId = customUrl || vercelUrl || netlifyUrl;

// Deconstruct the created page in the constants Next.js needs
const { CmsPage, generateMetadata, generateStaticParams } = createPage(
  factory,
  {
    /**
     * The base URL, without trailing slash. This allows the frontend to filter
     * content in Graph based upon the domain for which this deployment is 
     * intended.
     */
    channel: channelId,

    /**
     * Pass in the `getContentByPath` method that has been generated
     * by GraphQL Codegen. If omitted, the application will use the Router to
     * resolve the content item and then use the CmsComponent from the
     * factory to load the content specifically for the resolved content item.
     */
    getContentByPath,

    /**
     * The client factory to be used when a new GraphQL client is required
     * by the application.
     *
     * @param   token     The authorization token
     * @param   scope     The scope for the client, when `request`, Next.JS methods like 'draftMode' can be used
     * @returns The GraphQL Client instance
     */
    async client(token, scope) {
      // Create the client
      const client = createClient(undefined, token, {
        nextJsFetchDirectives: true,
      });

      // Check if we're in request mode and draftMode is enabled (async in Next.js 16)
      if (scope === "request") {
        const draft = await draftMode();
        if (draft.isEnabled) {
          console.log('🔱 Next.JS DraftMode enabled')
          // If we're not authenticated, switch to HMAC authentication
          if (client.currentAuthMode === AuthMode.Public)
            client.updateAuthentication(AuthMode.HMAC);
          // Set the preview flag on the client
          client.enablePreview();
        }
      }

      return client;
    },
  }
);

// Configure the Next.JS route handling for the pages
// ✅ PERFORMANCE: Enable ISR with 60-second revalidation
// Content updates are handled via webhook (/api/content/publish) for instant updates
export const dynamic = "force-static"; // Enable static generation with ISR
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = 60; // Revalidate every 60 seconds (safety net if webhook fails)
// Remove fetchCache directive to allow Next.js caching

// Export CMS Page
export { generateMetadata, generateStaticParams };
export default CmsPage;
