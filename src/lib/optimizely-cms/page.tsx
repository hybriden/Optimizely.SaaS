import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComponentFactory } from './factory';
import { PageConfig, ContentData, OptimizelyNextPage } from './types';
import { createClient, OptimizelyGraphClient } from './client';

/**
 * Create a CMS Page with automatic routing and metadata
 */
export function createPage<TContent = ContentData>(
  factory: ComponentFactory,
  config: PageConfig<TContent>
) {
  /**
   * The main page component
   */
  async function CmsPage({ params }: { params: Promise<{ path?: string[] }> }) {
    const resolvedParams = await params;
    const path = resolvedParams.path ? `/${resolvedParams.path.join('/')}` : '/';

    // Create GraphQL client (await in case it's async)
    const client: OptimizelyGraphClient = config.client
      ? await config.client(undefined, 'request')
      : createClient(undefined, undefined, { nextJsFetchDirectives: true });

    // Fetch content by path
    if (!config.getContentByPath) {
      throw new Error('getContentByPath is required in page config');
    }

    // Try multiple path formats: with/without leading slash, with/without trailing slash
    const pathWithoutSlash = path.startsWith('/') && path !== '/' ? path.substring(1) : path;
    const pathWithTrailingSlash = path.endsWith('/') ? path : `${path}/`;
    const pathWithoutSlashWithTrailing = pathWithoutSlash.endsWith('/') ? pathWithoutSlash : `${pathWithoutSlash}/`;

    const pathsToTry = path === '/'
      ? [path]
      : [path, pathWithoutSlash, pathWithTrailingSlash, pathWithoutSlashWithTrailing];

    const result = await config.getContentByPath(
      client,
      {
        path: pathsToTry,
        locale: ['en'], // TODO: Get from context
      }
    );

    // Check if content was found - items can be an array or a single object
    const items = (result as any)?.content?.items;
    const content = Array.isArray(items) ? items[0] : items;

    if (!content) {
      notFound();
    }

    // Resolve component - use types array if __typename is generic (_Content, _Page, _IPage, etc.)
    let typename = content.__typename || content._type;
    if (typename === '_Content' || typename === '_Page' || typename?.startsWith('_I')) {
      if (content._metadata?.types && content._metadata.types.length > 0) {
        // Use the FIRST type in the array which is the most specific content type
        // Array is ordered as: [MyTest, _Page, _Content] where MyTest is most specific
        typename = content._metadata.types[0];
      }
    }

    const Component = factory.resolve(typename) as OptimizelyNextPage | null;

    if (!Component) {
      console.error(`No component registered for typename: ${typename}`);
      notFound();
    }

    return <Component data={content} />;
  }

  /**
   * Generate metadata for the page
   */
  async function generateMetadata({
    params,
  }: {
    params: Promise<{ path?: string[] }>;
  }): Promise<Metadata> {
    const resolvedParams = await params;
    const path = resolvedParams.path ? `/${resolvedParams.path.join('/')}` : '/';

    // Create GraphQL client (await in case it's async)
    const client: OptimizelyGraphClient = config.client
      ? await config.client(undefined, 'page')
      : createClient(undefined, undefined, { nextJsFetchDirectives: true });

    // Fetch content by path
    if (!config.getContentByPath) {
      return {};
    }

    try {
      // Try multiple path formats: with/without leading slash, with/without trailing slash
      const pathWithoutSlash = path.startsWith('/') && path !== '/' ? path.substring(1) : path;
      const pathWithTrailingSlash = path.endsWith('/') ? path : `${path}/`;
      const pathWithoutSlashWithTrailing = pathWithoutSlash.endsWith('/') ? pathWithoutSlash : `${pathWithoutSlash}/`;

      const pathsToTry = path === '/'
        ? [path]
        : [path, pathWithoutSlash, pathWithTrailingSlash, pathWithoutSlashWithTrailing];

      const result = await config.getContentByPath(
        client,
        {
          path: pathsToTry,
          locale: ['en'], // TODO: Get from context
        }
      );

      const items = (result as any)?.content?.items;
      const content = Array.isArray(items) ? items[0] : items;
      if (!content) {
        return {};
      }

      // Get component - use types array if __typename is generic (_Content, _Page, _IPage, etc.)
      let typename = content.__typename || content._type;
      if (typename === '_Content' || typename === '_Page' || typename?.startsWith('_I')) {
        if (content._metadata?.types && content._metadata.types.length > 0) {
          // Use the FIRST type in the array which is the most specific content type
          typename = content._metadata.types[0];
        } else if (content.Title || content.MetaDescription || content.MainBody) {
          typename = 'LandingPage';
        }
      }

      const Component = factory.resolve(typename) as OptimizelyNextPage | null;

      // Call component's getMetaData if available
      if (Component?.getMetaData) {
        const customMetadata = await Component.getMetaData(
          { key: content._metadata?.key },
          'en',
          client
        );

        return {
          title: content._metadata?.displayName || customMetadata.title,
          description: customMetadata.description,
          ...customMetadata,
        };
      }

      // Default metadata
      return {
        title: content._metadata?.displayName || 'Page',
      };
    } catch (error) {
      console.error('Error generating metadata:', error);
      return {};
    }
  }

  /**
   * Generate static params for static site generation
   */
  async function generateStaticParams(): Promise<Array<{ path: string[] }>> {
    // For now, return empty array (no static generation)
    // In production, you'd query all routes from Optimizely
    return [];
  }

  return {
    CmsPage,
    generateMetadata,
    generateStaticParams,
  };
}
