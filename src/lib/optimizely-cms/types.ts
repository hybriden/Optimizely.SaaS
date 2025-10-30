import { ReactNode } from 'react';
import { OptimizelyGraphClient } from './client';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

/**
 * Content Link reference
 */
export interface ContentLink {
  key?: string;
  url?: {
    base?: string;
    default?: string;
  };
}

/**
 * Content metadata
 */
export interface ContentMetadata {
  key: string;
  locale?: string;
  types?: string[];
  displayName?: string;
  version?: string;
  url?: {
    base?: string;
    default?: string;
  };
}

/**
 * Base content data structure
 */
export interface ContentData {
  _metadata?: ContentMetadata;
  _type?: string;
  __typename?: string;
}

/**
 * Component rendering mode
 */
export type ComponentRenderMode = 'full' | 'teaser';

/**
 * Component props for CMS components
 */
export interface CmsComponentProps<T = ContentData> {
  data: T;
  children?: ReactNode;
  inEditMode?: boolean;
  renderMode?: ComponentRenderMode;
}

/**
 * CMS Component type
 */
export interface CmsComponent<T = ContentData> {
  (props: CmsComponentProps<T>): ReactNode;
  displayName?: string;
  getDataFragment?: () => [string, TypedDocumentNode<any, any>];
  renderTeaser?: (props: CmsComponentProps<T>) => ReactNode;
}

/**
 * Next.js specific page component with metadata
 */
export interface OptimizelyNextPage<T = ContentData> extends CmsComponent<T> {
  getMetaData?: (
    contentLink: ContentLink,
    locale: string | undefined,
    client: OptimizelyGraphClient
  ) => Promise<Record<string, any>>;
}

/**
 * Layout component for Visual Builder
 */
export interface CmsLayoutComponent<T = ContentData> {
  (props: CmsComponentProps<T>): ReactNode;
  displayName?: string;
}

/**
 * Component dictionary for registration
 */
export type ComponentTypeDictionary = Record<string, CmsComponent<any>>;

/**
 * Component factory configuration
 */
export interface FactoryConfig {
  debug?: boolean;
}

/**
 * Server context for SSR
 */
export interface ServerContext {
  locale?: string;
  inEditMode?: boolean;
  requestId?: string;
}

/**
 * Page configuration
 */
export interface PageConfig<T = any> {
  channel?: string;
  getContentByPath?: (
    client: OptimizelyGraphClient,
    variables: any
  ) => Promise<T>;
  client?: (
    token?: string,
    scope?: 'page' | 'request'
  ) => OptimizelyGraphClient | Promise<OptimizelyGraphClient>;
}

/**
 * Rich text node types
 */
export interface RichTextNode {
  nodeType: string;
  content?: RichTextNode[];
  data?: any;
  value?: string;
}

/**
 * Visual Builder composition node
 */
export interface CompositionNode {
  key?: string;
  name?: string;
  displayName?: string;
  nodeType?: string;
  type?: string;
  displayTemplateKey?: string;
  displaySettings?: Array<{ key: string; value: string }>;
  nodes?: CompositionNode[];
  component?: ContentData;
}

/**
 * Experience data structure
 */
export interface ExperienceData extends ContentData {
  composition?: CompositionNode;
}
