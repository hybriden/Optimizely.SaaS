import { ComponentFactory } from './factory';
import { OptimizelyGraphClient } from './client';
import { setEditMode } from './context';
import { ContentData, OptimizelyNextPage } from './types';
import { OpeScript } from './OpeScript';

/**
 * Configuration for edit page component
 */
export interface EditPageConfig<TContent = ContentData> {
  loader: (
    client: OptimizelyGraphClient,
    variables: any
  ) => Promise<TContent>;
  clientFactory: (token?: string) => OptimizelyGraphClient;
}

/**
 * Create an edit page component for on-page editing
 */
export function createEditPageComponent<TContent = ContentData>(
  factory: ComponentFactory,
  config: EditPageConfig<TContent>
) {
  return async function EditPage({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    // Enable edit mode
    setEditMode(true);

    // Get content key from search params
    const key = searchParams.key as string;
    const version = searchParams.version as string || searchParams.ver as string;
    const locale = (searchParams.locale as string) || (searchParams.loc as string) || 'en';
    const previewToken = searchParams.preview_token as string; // Token from Optimizely CMS
    const token = previewToken || (searchParams.token as string); // Fallback to token
    const ctx = searchParams.ctx as string; // Context mode: 'edit' or 'preview'

    if (!key) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Preview Mode</h1>
          <p>No content key provided</p>
        </div>
      );
    }

    // Use preview token if provided by Optimizely CMS, otherwise use default auth
    // Preview tokens are now enabled in CMS and should be included in the URL
    const client = config.clientFactory(token);

    console.log('Preview - Loading:', key, 'version:', version || 'LATEST');

    try {
      // Load content with version parameter to get specific draft version
      // If version is undefined/null, the query will fetch the latest draft
      const result = await config.loader(
        client,
        {
          key,
          version: version || undefined, // Explicitly pass undefined if no version
          locale: [locale],
        }
      );

      // Note: items can be either an array or a single object depending on the query
      const items = (result as any)?.content?.items;
      const content = Array.isArray(items) ? items[0] : items;

      if (!content) {
        return (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Content Not Found</h1>
            <p>Key: {key}</p>
            <p>Version requested: {version || 'latest'}</p>
          </div>
        );
      }

      // Log the version that was actually fetched
      const fetchedVersion = content._metadata?.version;
      if (version && version !== fetchedVersion) {
        console.warn('Preview - Version mismatch! Requested:', version, 'Fetched:', fetchedVersion);
      }

      // Resolve component - handle generic types like _Content, _Page
      let typename = content.__typename || content._type;

      // If typename is generic (_Content, _Page, _IPage, etc.), use types array
      if (typename === '_Content' || typename === '_Page' || typename?.startsWith('_I')) {
        if (content._metadata?.types && content._metadata.types.length > 0) {
          // Use the FIRST type in the array which is the most specific content type
          // Array is ordered as: [StartPage, _Page, _Content] where StartPage is most specific
          typename = content._metadata.types[0];
        } else {
          console.warn('Preview - No types array, inferring from content data');

          // Fallback: Try to infer type from specific properties that only exist on certain types
          // Check for StartPage-specific fields
          if ('Heading' in content || 'MainIntro' in content || 'MainContentArea' in content) {
            typename = 'StartPage';
          }
          // Check for LandingPage-specific fields
          else if ('Title' in content && 'MainBody' in content && 'MetaDescription' in content) {
            typename = 'LandingPage';
          }
          // Check for ArticlePage-specific fields
          else if ('ArticleTitle' in content || 'ArticleBody' in content) {
            typename = 'ArticlePage';
          }
          // Check for MyTest-specific fields
          else if ('TestField' in content) {
            typename = 'MyTest';
          }
          // Last resort: use URL pattern to guess
          else {
            const url = content._metadata?.url?.default || '';
            if (url === '/' || url === '') {
              typename = 'StartPage';
            }
          }
        }
      }

      const Component = factory.resolve(typename) as OptimizelyNextPage | null;

      if (!Component) {
        return (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Component Not Found</h1>
            <p>Type: {typename}</p>
          </div>
        );
      }

      // Render with editing attributes
      return (
        <>
          {ctx === 'edit' && <OpeScript />}
          <div data-epi-edit="true">
            <Component data={content} inEditMode={true} />
          </div>
        </>
      );
    } catch (error) {
      console.error('Error loading preview:', error);
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
          <h1>Error Loading Preview</h1>
          <p>{error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      );
    }
  };
}
