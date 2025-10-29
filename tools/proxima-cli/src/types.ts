/**
 * Type definitions for CMS CLI
 */

export type BaseType = 'page' | 'component' | 'experience' | 'block' | 'element';

export interface PropertyDefinition {
  type: string;
  format?: string;
  displayName: string;
  description?: string;
  localized?: boolean;
  required?: boolean;
  group?: string;
  sortOrder?: number;
  editorSettings?: Record<string, any>;
  items?: {
    type: string;
    allowedTypes?: string[];
    restrictedTypes?: string[];
  };
}

export interface ContentTypeDefinition {
  key: string;
  displayName: string;
  description?: string;
  baseType: BaseType;
  sortOrder?: number;
  mayContainTypes?: string[];
  mediaFileExtensions?: string[];
  compositionBehaviors?: string[];
  properties: Record<string, PropertyDefinition>;
}

export interface ComponentFileInfo {
  key: string;
  displayName: string;
  baseType: BaseType;
  componentPath: string;
  typeFilePath: string;
  graphqlFilePath: string;
  hasCustomCode: boolean;
}

export interface GeneratorConfig {
  componentsDir: string;
  templatesDir?: string;
  preserveCustomCode: boolean;
  forceOverwrite: boolean;
}

export interface CMSClientConfig {
  cmsUrl: string;
  clientId: string;
  clientSecret: string;
  graphGateway?: string;
  graphAppKey?: string;
  graphSecret?: string;
  graphSingleKey?: string;
}
