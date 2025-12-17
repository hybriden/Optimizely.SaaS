import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComponentFactory } from './factory';
import { PageConfig, ContentData, OptimizelyNextPage } from './types';
import { createClient, OptimizelyGraphClient } from './client';
import { DEFAULT_LOCALE, LOG_PREFIX } from './constants';
import {
  normalizePathFromParams,
  getPathVariations,
  extractFirstContentItem,
  resolveContentType,
  formatError,
} from './utils';

/**
 * Create a GraphQL client for page operations
 */
async function getClient(
  config: PageConfig<any>,
  scope: 'page' | 'request'
): Promise<OptimizelyGraphClient> {
  if (config.client) {
    return config.client(undefined, scope);
  }
  return createClient(undefined, undefined, { nextJsFetchDirectives: true });
}

/**
 * Fetch content by path with multiple path format variations
 */
async function fetchContentByPath<T = ContentData>(
  client: OptimizelyGraphClient,
  config: PageConfig<T>,
  path: string
): Promise<T | null> {
  if (!config.getContentByPath) {
    return null;
  }

  const pathVariations = getPathVariations(path);
  const result = await config.getContentByPath(client, {
    path: pathVariations,
    locale: [DEFAULT_LOCALE],
  });

  return extractFirstContentItem<T>(result);
}

/**
 * Resolve component from factory by content type
 */
function resolveComponent(
  factory: ComponentFactory,
  content: ContentData
): OptimizelyNextPage | null {
  const typename = resolveContentType(content);

  if (!typename) {
    console.error(`${LOG_PREFIX.FACTORY} Unable to determine content type`);
    return null;
  }

  const Component = factory.resolve(typename) as OptimizelyNextPage | null;

  if (!Component) {
    console.error(`${LOG_PREFIX.FACTORY} No component registered for typename: ${typename}`);
  }

  return Component;
}

/**
 * Generate metadata from component or content
 */
async function generateMetadataFromContent(
  content: ContentData,
  Component: OptimizelyNextPage | null,
  client: OptimizelyGraphClient
): Promise<Metadata> {
  // Try component's custom metadata generator
  if (Component?.getMetaData) {
    const customMetadata = await Component.getMetaData(
      { key: content._metadata?.key },
      DEFAULT_LOCALE,
      client
    );

    return {
      title: content._metadata?.displayName || customMetadata.title,
      description: customMetadata.description,
      ...customMetadata,
    };
  }

  // Default metadata from content
  return {
    title: content._metadata?.displayName || 'Page',
  };
}

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
    const path = normalizePathFromParams(resolvedParams.path);

    const client = await getClient(config, 'request');

    if (!config.getContentByPath) {
      throw new Error('getContentByPath is required in page config');
    }

    const content = await fetchContentByPath(client, config as PageConfig<ContentData>, path);

    if (!content) {
      notFound();
    }

    const Component = resolveComponent(factory, content);

    if (!Component) {
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
    const path = normalizePathFromParams(resolvedParams.path);

    if (!config.getContentByPath) {
      return {};
    }

    try {
      const client = await getClient(config, 'page');
      const content = await fetchContentByPath(client, config as PageConfig<ContentData>, path);

      if (!content) {
        return {};
      }

      const Component = resolveComponent(factory, content);
      return generateMetadataFromContent(content, Component, client);
    } catch (error) {
      const { message, stack } = formatError(error);
      console.error(`${LOG_PREFIX.METADATA} Error generating metadata:`, {
        path,
        error: message,
        stack,
      });
      return {
        title: 'Page',
      };
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
