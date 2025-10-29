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

      // Filter out internal types and map to our format
      const contentTypes: ContentTypeDefinition[] = result.data.__type.possibleTypes
        .filter(type => !type.name.startsWith('_'))
        .map(type => ({
          key: type.name,
          displayName: type.name,
          description: type.description || '',
          baseType: this.inferBaseType(type.name, type.interfaces),
          properties: {}
        }));

      Logger.success(`Found ${contentTypes.length} content types from Optimizely`);
      return contentTypes;
    } catch (error) {
      Logger.error(`Failed to fetch content types: ${error}`);
      return [];
    }
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
