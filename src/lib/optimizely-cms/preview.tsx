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
    const version = searchParams.version as string;
    const locale = (searchParams.locale as string) || 'en';
    const token = searchParams.token as string;

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
      // Load content
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

      // Resolve component
      const typename = content.__typename || content._type;
      const Component = factory.resolve(typename) as OptimizelyNextPage | null;

      if (!Component) {
        return (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Component Not Found</h1>
            <p>Type: {typename}</p>
          </div>
        );
      }

      return (
        <div data-epi-edit="true">
          <Component data={content} inEditMode={true} />
        </div>
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
