import { CMSClientConfig, ContentTypeDefinition } from '../types';
import { Logger } from '../utils/logger';

interface GraphQLResponse {
  data?: {
    __type?: {
      name: string;
      possibleTypes?: Array<{
        name: string;
        description?: string;
        interfaces?: Array<{
          name: string;
        }>;
      }>;
    };
  };
  errors?: Array<{
    message: string;
  }>;
}

interface GraphQLTypeResponse {
  data?: {
    __type?: {
      name: string;
      fields?: Array<{
        name: string;
        description?: string;
        type: {
          name?: string;
          kind: string;
          ofType?: {
            name?: string;
            kind: string;
            ofType?: {
              name?: string;
              kind: string;
            };
          };
        };
      }>;
    };
  };
  errors?: Array<{
    message: string;
  }>;
}

/**
 * CMS Client for interacting with Optimizely CMS API
 * This is a simplified implementation - extend as needed
 */
export class CMSClient {
  private config: CMSClientConfig;
  private accessToken: string | null = null;

  constructor(config: CMSClientConfig) {
    this.config = config;
  }

  /**
   * Authenticate with the CMS
   */
  async authenticate(): Promise<boolean> {
    try {
      // Check if we have the necessary configuration
      if (!this.config.graphGateway) {
        Logger.warning('OPTIMIZELY_GRAPH_GATEWAY not configured');
        return false;
      }

      // Check for authentication keys - either single key or app key
      if (!this.config.graphSingleKey && !this.config.graphAppKey) {
        Logger.warning('No authentication key found. Set OPTIMIZELY_GRAPH_SINGLE_KEY or OPTIMIZELY_GRAPH_APP_KEY');
        return false;
      }

      Logger.success('Configuration validated');
      return true;
    } catch (error) {
      Logger.error(`Authentication failed: ${error}`);
      return false;
    }
  }

  /**
   * Fetch content types from Optimizely Graph using GraphQL introspection
   */
  async fetchContentTypes(): Promise<ContentTypeDefinition[]> {
    try {
      if (!this.config.graphGateway) {
        Logger.warning('Optimizely Graph configuration missing');
        return [];
      }

      // Use single key if available, otherwise fall back to app key
      const authKey = this.config.graphSingleKey || this.config.graphAppKey;
      if (!authKey || authKey.includes('YOUR-KEY-HERE') || authKey.includes('YOUR_')) {
        Logger.warning('No valid authentication key configured in .env file');
        Logger.info('Please set OPTIMIZELY_GRAPH_SINGLE_KEY or OPTIMIZELY_GRAPH_APP_KEY with your actual API key');
        return [];
      }

      Logger.info('Fetching content types from Optimizely Graph...');

      // Use GraphQL introspection to get all content types with their interfaces
      const query = `
        query GetContentTypes {
          __type(name: "_IContent") {
            name
            possibleTypes {
              name
              description
              interfaces {
                name
              }
            }
          }
        }
      `;

      const response = await fetch(`${this.config.graphGateway}/content/v2?auth=${authKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
      });

      if (!response.ok) {
        Logger.error(`HTTP error! status: ${response.status}`);
        return [];
      }

      const result = await response.json() as GraphQLResponse;

      if (result.errors) {
        Logger.error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
        return [];
      }

      if (!result.data?.__type?.possibleTypes) {
        Logger.warning('No content types found in response');
        return [];
      }

      // Filter out internal types
      const typeNames = result.data.__type.possibleTypes
        .filter(type => !type.name.startsWith('_'))
        .map(type => ({
          name: type.name,
          description: type.description || '',
          interfaces: type.interfaces
        }));

      Logger.info(`Found ${typeNames.length} content types, fetching properties...`);

      // Fetch properties for each content type
      const contentTypes: ContentTypeDefinition[] = [];
      for (const typeInfo of typeNames) {
        const properties = await this.fetchTypeProperties(typeInfo.name, authKey);

        contentTypes.push({
          key: typeInfo.name,
          displayName: typeInfo.name,
          description: typeInfo.description,
          baseType: this.inferBaseType(typeInfo.name, typeInfo.interfaces),
          properties: properties
        });
      }

      Logger.success(`Successfully fetched ${contentTypes.length} content types with properties`);
      return contentTypes;
    } catch (error) {
      Logger.error(`Failed to fetch content types: ${error}`);
      return [];
    }
  }

  /**
   * Fetch properties for a specific content type using GraphQL introspection
   */
  private async fetchTypeProperties(typeName: string, authKey: string): Promise<Record<string, any>> {
    try {
      const query = `
        query GetTypeFields {
          __type(name: "${typeName}") {
            name
            fields {
              name
              description
              type {
                name
                kind
                ofType {
                  name
                  kind
                  ofType {
                    name
                    kind
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch(`${this.config.graphGateway}/content/v2?auth=${authKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
      });

      if (!response.ok) {
        Logger.warning(`Failed to fetch properties for ${typeName}: HTTP ${response.status}`);
        return {};
      }

      const result = await response.json() as GraphQLTypeResponse;

      if (result.errors || !result.data?.__type?.fields) {
        return {};
      }

      const properties: Record<string, any> = {};
      const fields = result.data.__type.fields;

      // Filter out metadata and system fields
      const contentFields = fields.filter(field =>
        !field.name.startsWith('_') &&
        field.name !== '__typename'
      );

      for (const field of contentFields) {
        const fieldType = this.resolveGraphQLType(field.type);

        properties[field.name] = {
          type: fieldType.type,
          displayName: field.name,
          description: field.description || '',
          ...(fieldType.isArray ? { items: { type: fieldType.itemType || 'String' } } : {})
        };
      }

      return properties;
    } catch (error) {
      Logger.warning(`Error fetching properties for ${typeName}: ${error}`);
      return {};
    }
  }

  /**
   * Resolve GraphQL type to our property type format
   */
  private resolveGraphQLType(typeInfo: any): { type: string; isArray: boolean; itemType?: string } {
    let current = typeInfo;
    let isArray = false;
    let itemType: string | undefined;

    // Unwrap NON_NULL and LIST wrappers
    while (current) {
      if (current.kind === 'NON_NULL') {
        current = current.ofType;
        continue;
      }
      if (current.kind === 'LIST') {
        isArray = true;
        current = current.ofType;
        // For arrays, track the item type
        if (current?.name) {
          itemType = this.mapGraphQLTypeToPropertyType(current.name);
        }
        continue;
      }
      break;
    }

    const typeName = current?.name || 'String';
    const mappedType = this.mapGraphQLTypeToPropertyType(typeName);

    return {
      type: isArray ? 'ContentArea' : mappedType,
      isArray,
      itemType
    };
  }

  /**
   * Map GraphQL scalar/object types to property types
   */
  private mapGraphQLTypeToPropertyType(graphQLType: string): string {
    const typeMap: Record<string, string> = {
      'String': 'String',
      'Int': 'Number',
      'Float': 'Number',
      'Boolean': 'Boolean',
      'DateTime': 'Date',
      'ContentReference': 'ContentReference',
      'ContentArea': 'ContentArea',
      'Link': 'Url',
      'Url': 'Url',
      'XhtmlString': 'XhtmlString'
    };

    // If it's a known type, return the mapped value
    if (typeMap[graphQLType]) {
      return typeMap[graphQLType];
    }

    // If it starts with uppercase, it's likely a complex type (ContentReference)
    if (graphQLType && graphQLType[0] === graphQLType[0].toUpperCase()) {
      return 'ContentReference';
    }

    return 'String';
  }

  /**
   * Infer base type from type name conventions and GraphQL interfaces
   */
  private inferBaseType(typeName: string, interfaces?: Array<{ name: string }>): 'page' | 'component' | 'experience' | 'block' | 'element' {
    // Check interfaces first for more accurate type detection
    // Check more specific types first (experience before page, as experiences inherit from page)
    if (interfaces) {
      const interfaceNames = interfaces.map(i => i.name);
      if (interfaceNames.includes('_IExperience')) return 'experience';
      if (interfaceNames.includes('_IPage')) return 'page';
      if (interfaceNames.includes('_IComponent') || interfaceNames.includes('_IBlock')) return 'component';
      if (interfaceNames.includes('_IElement')) return 'element';
    }

    // Fall back to name-based inference
    const lowerName = typeName.toLowerCase();
    if (lowerName.includes('experience')) return 'experience';
    if (lowerName.includes('page')) return 'page';
    if (lowerName.includes('block')) return 'component';
    if (lowerName.includes('element')) return 'element';
    return 'component';
  }

  /**
   * Push content types to CMS
   */
  async pushContentTypes(contentTypes: ContentTypeDefinition[]): Promise<boolean> {
    try {
      Logger.info(`Pushing ${contentTypes.length} content types to CMS...`);

      // Placeholder implementation
      // In real implementation, make API calls to create/update content types

      Logger.warning('Note: This is a placeholder. Implement actual API calls as needed.');
      return true;
    } catch (error) {
      Logger.error(`Failed to push content types: ${error}`);
      return false;
    }
  }

  /**
   * Get CMS version
   */
  async getVersion(): Promise<string | null> {
    try {
      // Placeholder implementation
      return 'CMS 12 SaaS';
    } catch (error) {
      Logger.error(`Failed to get CMS version: ${error}`);
      return null;
    }
  }
}
