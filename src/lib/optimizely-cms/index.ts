/**
 * Optimizely CMS Library
 * Custom CMS integration for Optimizely SaaS CMS
 */

// Client
export { OptimizelyGraphClient, createClient, AuthMode, RouteResolver } from './client';
export type { ClientConfig } from './client';

// Types
export type {
  ContentLink,
  ContentMetadata,
  ContentData,
  CmsComponentProps,
  CmsComponent,
  OptimizelyNextPage,
  CmsLayoutComponent,
  ComponentTypeDictionary,
  FactoryConfig,
  ServerContext,
  PageConfig,
  RichTextNode,
  CompositionNode,
  ExperienceData,
} from './types';

// Factory
export {
  ComponentFactory,
  getFactory,
  DefaultComponent,
  RichTextComponentDictionary,
} from './factory';

// Context
export {
  getServerContext,
  setServerContext,
  clearServerContext,
  isEditMode,
  setEditMode,
} from './context';

// Page Generation
export { createPage } from './page';

// Preview/Edit Mode
export { createEditPageComponent } from './preview';
export type { EditPageConfig } from './preview';

// Webhook/Publish
export { default as createPublishApi, verifyHmacSignature } from './publish';
export type { PublishConfig } from './publish';

// Constants
export {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  GENERIC_TYPE_NAMES,
  isGenericTypename,
  LOG_PREFIX,
} from './constants';
export type { SupportedLocale } from './constants';

// Utilities
export {
  getPathVariations,
  normalizePathFromParams,
  resolveContentType,
  extractContentItems,
  extractFirstContentItem,
  createContentLink,
  formatError,
} from './utils';
export type { PathVariations } from './utils';

// Re-export types that might be used in component definitions
export type { TypedDocumentNode } from '@graphql-typed-document-node/core';
