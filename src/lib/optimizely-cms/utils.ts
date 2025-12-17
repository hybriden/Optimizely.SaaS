/**
 * Shared utilities for Optimizely CMS integration
 */

import { ContentData, ContentMetadata } from './types';
import { isGenericTypename } from './constants';

/**
 * Path format variations for content lookup
 * Optimizely CMS may store paths with/without leading/trailing slashes
 */
export interface PathVariations {
  /** Original path */
  original: string;
  /** Path without leading slash (except root) */
  withoutLeadingSlash: string;
  /** Path with trailing slash */
  withTrailingSlash: string;
  /** Path without leading slash but with trailing slash */
  withoutLeadingWithTrailing: string;
}

/**
 * Generate all path variations for content lookup
 */
export function getPathVariations(path: string): string[] {
  // Root path has no variations
  if (path === '/') {
    return [path];
  }

  const withoutLeadingSlash = path.startsWith('/') ? path.substring(1) : path;
  const withTrailingSlash = path.endsWith('/') ? path : `${path}/`;
  const withoutLeadingWithTrailing = withoutLeadingSlash.endsWith('/')
    ? withoutLeadingSlash
    : `${withoutLeadingSlash}/`;

  return [path, withoutLeadingSlash, withTrailingSlash, withoutLeadingWithTrailing];
}

/**
 * Normalize a URL path from route params
 */
export function normalizePathFromParams(pathSegments?: string[]): string {
  return pathSegments ? `/${pathSegments.join('/')}` : '/';
}

/**
 * Resolve the specific content type from content data
 * GraphQL may return generic types like _Content or _Page
 * The specific type is in _metadata.types array (first element is most specific)
 */
export function resolveContentType(content: ContentData): string | undefined {
  const typename = content.__typename || content._type;

  // If typename is specific (doesn't start with _), use it directly
  if (typename && !isGenericTypename(typename)) {
    return typename;
  }

  // Otherwise, get from _metadata.types array
  const types = content._metadata?.types;
  if (types && types.length > 0) {
    // First type in array is the most specific
    return types[0];
  }

  // Fallback to generic typename
  return typename;
}

/**
 * Extract items from GraphQL response
 * Handles both array and single object responses
 */
export function extractContentItems<T = ContentData>(result: unknown): T[] {
  const items = (result as any)?.content?.items;

  if (!items) {
    return [];
  }

  return Array.isArray(items) ? items : [items];
}

/**
 * Get the first content item from a GraphQL response
 */
export function extractFirstContentItem<T = ContentData>(result: unknown): T | null {
  const items = extractContentItems<T>(result);
  return items[0] || null;
}

/**
 * Create a content link object from metadata
 */
export function createContentLink(metadata?: ContentMetadata): { key?: string; locale?: string } {
  return {
    key: metadata?.key,
    locale: metadata?.locale,
  };
}

/**
 * Format error for logging with consistent structure
 */
export function formatError(error: unknown): { message: string; stack?: string } {
  if (error instanceof Error) {
    return {
      message: error.message,
      stack: error.stack,
    };
  }
  return {
    message: String(error),
  };
}
