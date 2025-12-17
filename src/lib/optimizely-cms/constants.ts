/**
 * Centralized constants for Optimizely CMS integration
 */

/**
 * Default locale for content queries
 */
export const DEFAULT_LOCALE = 'en';

/**
 * Supported locales
 */
export const SUPPORTED_LOCALES = ['en'] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

/**
 * Generic GraphQL type names that need resolution to specific types
 */
export const GENERIC_TYPE_NAMES = ['_Content', '_Page', '_IPage', '_IContent', '_IComponent'] as const;

/**
 * Check if a typename is generic and needs resolution
 */
export function isGenericTypename(typename?: string): boolean {
  if (!typename) return false;
  return typename.startsWith('_') || GENERIC_TYPE_NAMES.includes(typename as any);
}

/**
 * Log prefixes for consistent logging
 */
export const LOG_PREFIX = {
  METADATA: '[Metadata]',
  PUBLISH: '[Publish API]',
  CONTENT_AREA: '[ContentArea]',
  FACTORY: '[Factory]',
  CLIENT: '[GraphQL]',
} as const;
