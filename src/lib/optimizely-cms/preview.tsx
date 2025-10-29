import Script from 'next/script';
import { ComponentFactory } from './factory';
import { OptimizelyGraphClient } from './client';
import { setEditMode } from './context';
import { ContentData, OptimizelyNextPage } from './types';

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

    // Create client with token
    const client = config.clientFactory(token);

    try {
      // Load content - Note: when using preview_token, it handles access to draft content
      const result = await config.loader(
        client,
        {
          key,
          version,
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
          </div>
        );
      }

      // Resolve component - handle generic types like _Content, _Page
      let typename = content.__typename || content._type;

      // If typename is generic (_Content, _Page, _IPage, etc.), use types array
      if (typename === '_Content' || typename === '_Page' || typename?.startsWith('_I')) {
        if (content._metadata?.types && content._metadata.types.length > 0) {
          // Use the FIRST type in the array which is the most specific content type
          // Array is ordered as: [StartPage, _Page, _Content] where StartPage is most specific
          typename = content._metadata.types[0];
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
          {ctx === 'edit' && (
            <Script
              src="https://cg.optimizely.com/app/editor/clientresources/latest/communicationinjector.js"
              strategy="afterInteractive"
            />
          )}
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
