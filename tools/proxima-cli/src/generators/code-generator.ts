import path from 'path';
import { ContentTypeDefinition, GeneratorConfig } from '../types';
import { FileManager } from '../utils/file-manager';
import { Logger } from '../utils/logger';
import { Templates } from './templates';

/**
 * Code generator for creating components from content type definitions
 */
export class CodeGenerator {
  private config: GeneratorConfig;

  constructor(config: GeneratorConfig) {
    this.config = config;
  }

  /**
   * Generate all files for a content type
   */
  async generateContentType(
    contentType: ContentTypeDefinition,
    options: { components?: boolean; fragments?: boolean; types?: boolean } = {}
  ): Promise<boolean> {
    const { components = true, fragments = true, types = true } = options;
    const { key, baseType } = contentType;

    // Determine the correct subdirectory based on baseType
    const subDir = this.getSubdirectoryForBaseType(baseType);
    const componentDir = path.join(this.config.componentsDir, subDir, key);

    try {
      // Ensure component directory exists
      await FileManager.ensureDir(componentDir);

      let allSuccess = true;

      // Generate type definition file
      if (types) {
        const typeFilePath = path.join(componentDir, `${key}.opti-type.json`);
        const typeContent = Templates.generateTypeDefinition(contentType);
        const typeSuccess = await FileManager.writeFile(typeFilePath, typeContent, {
          force: this.config.forceOverwrite,
          preserveModified: this.config.preserveCustomCode
        });

        if (typeSuccess) {
          Logger.success(`Generated type definition: ${typeFilePath}`);
        }
        allSuccess = allSuccess && typeSuccess;
      }

      // Generate GraphQL fragment
      if (fragments) {
        // Determine the correct suffix based on baseType
        let suffix: string;
        if (baseType === 'page') {
          suffix = 'page';
        } else if (baseType === 'experience') {
          suffix = 'experience';
        } else {
          suffix = 'component';
        }
        const graphqlFilePath = path.join(componentDir, `${key}.${suffix}.graphql`);
        const graphqlContent = Templates.generateGraphQLFragment(contentType);
        const graphqlSuccess = await FileManager.writeFile(graphqlFilePath, graphqlContent, {
          force: this.config.forceOverwrite,
          preserveModified: this.config.preserveCustomCode
        });

        if (graphqlSuccess) {
          Logger.success(`Generated GraphQL fragment: ${graphqlFilePath}`);
        }
        allSuccess = allSuccess && graphqlSuccess;
      }

      // Generate React component
      if (components) {
        const componentFilePath = path.join(componentDir, 'index.tsx');
        const componentContent = Templates.generateComponent(contentType);
        const componentSuccess = await FileManager.writeFile(componentFilePath, componentContent, {
          force: this.config.forceOverwrite,
          preserveModified: this.config.preserveCustomCode
        });

        if (componentSuccess) {
          Logger.success(`Generated component: ${componentFilePath}`);
        }
        allSuccess = allSuccess && componentSuccess;
      }

      return allSuccess;
    } catch (error) {
      Logger.error(`Failed to generate content type ${key}: ${error}`);
      return false;
    }
  }

  /**
   * Generate factory index files
   */
  async generateFactories(): Promise<boolean> {
    try {
      Logger.info('Generating component factories...');

      // Find all type definition files
      const typeFiles = await FileManager.findFiles(
        '**/*.opti-type.json',
        this.config.componentsDir
      );

      // Group by base type
      const componentsByType: Record<string, Array<{ key: string; displayName: string }>> = {
        page: [],
        component: [],
        experience: []
      };

      for (const typeFile of typeFiles) {
        const contentType = await FileManager.readJson<ContentTypeDefinition>(typeFile);
        if (contentType && contentType.baseType) {
          const baseType = contentType.baseType === 'block' ? 'component' : contentType.baseType;
          if (baseType in componentsByType) {
            componentsByType[baseType].push({
              key: contentType.key,
              displayName: contentType.displayName
            });
          }
        }
      }

      let allSuccess = true;

      // Generate factory for each base type
      for (const [baseType, components] of Object.entries(componentsByType)) {
        if (components.length === 0) continue;

        const factoryDir = path.join(this.config.componentsDir, baseType);
        const factoryFilePath = path.join(factoryDir, 'index.ts');

        const factoryContent = Templates.generateFactoryIndex(
          components,
          baseType as 'page' | 'component' | 'experience'
        );

        const success = await FileManager.writeFile(factoryFilePath, factoryContent, {
          force: this.config.forceOverwrite,
          preserveModified: this.config.preserveCustomCode
        });

        if (success) {
          Logger.success(`Generated ${baseType} factory: ${factoryFilePath}`);
        }
        allSuccess = allSuccess && success;
      }

      // Generate main factory index
      const mainFactoryPath = path.join(this.config.componentsDir, 'index.ts');
      const mainFactoryContent = Templates.generateMainFactory();

      const mainSuccess = await FileManager.writeFile(mainFactoryPath, mainFactoryContent, {
        force: this.config.forceOverwrite,
        preserveModified: this.config.preserveCustomCode
      });

      if (mainSuccess) {
        Logger.success(`Generated main factory: ${mainFactoryPath}`);
      }

      return allSuccess && mainSuccess;
    } catch (error) {
      Logger.error(`Failed to generate factories: ${error}`);
      return false;
    }
  }

  /**
   * Generate GraphQL queries with all content type fragments
   */
  async generateQueries(): Promise<boolean> {
    try {
      Logger.info('Generating GraphQL queries...');

      // Scan all content types
      const contentTypes = await this.scanExistingContentTypes();

      // Group by base type
      const pageTypes = contentTypes.filter(ct => ct.baseType === 'page');
      const experienceTypes = contentTypes.filter(ct => ct.baseType === 'experience');
      const componentTypes = contentTypes.filter(ct => ct.baseType === 'component' || ct.baseType === 'block');

      // Generate query content
      const queryContent = Templates.generateContentQuery(pageTypes, experienceTypes, componentTypes);

      // Write to queries directory (src/gql/queries)
      // Go up from componentsDir (src/components/cms) to src, then to gql/queries
      const srcDir = path.dirname(path.dirname(this.config.componentsDir));
      const queriesDir = path.join(srcDir, 'gql', 'queries');
      await FileManager.ensureDir(queriesDir);

      const queryFilePath = path.join(queriesDir, 'content.graphql');

      // Always overwrite the generated query
      const success = await FileManager.writeFile(queryFilePath, queryContent, {
        force: true,
        preserveModified: false
      });

      if (success) {
        Logger.success(`Generated query: ${queryFilePath}`);
      }

      return success;
    } catch (error) {
      Logger.error(`Failed to generate queries: ${error}`);
      return false;
    }
  }

  /**
   * Get subdirectory based on base type
   */
  private getSubdirectoryForBaseType(baseType: string): string {
    switch (baseType) {
      case 'page':
        return 'page';
      case 'experience':
        return 'experience';
      case 'component':
      case 'block':
      case 'element':
      default:
        return 'component';
    }
  }

  /**
   * Scan existing content types from the file system
   */
  async scanExistingContentTypes(): Promise<ContentTypeDefinition[]> {
    const typeFiles = await FileManager.findFiles(
      '**/*.opti-type.json',
      this.config.componentsDir
    );

    const contentTypes: ContentTypeDefinition[] = [];

    for (const typeFile of typeFiles) {
      const contentType = await FileManager.readJson<ContentTypeDefinition>(typeFile);
      if (contentType) {
        contentTypes.push(contentType);
      }
    }

    return contentTypes;
  }
}
