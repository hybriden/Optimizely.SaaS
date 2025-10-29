import { Command } from 'commander';
import path from 'path';
import { CMSClient } from '../cms/client';
import { FileManager } from '../utils/file-manager';
import { Logger } from '../utils/logger';
import { ContentTypeDefinition } from '../types';
import { loadConfig } from '../config';

/**
 * Types command - pull/push content type definitions
 */
export function registerTypesCommands(program: Command) {
  const types = program.command('types').description('Manage content type definitions');

  // types:pull command
  types
    .command('pull')
    .description('Pull content type definitions from CMS')
    .option('-o, --output <path>', 'Output directory', './src/components/cms')
    .action(async (options) => {
      try {
        Logger.heading('Pulling content types from CMS');

        const config = loadConfig();
        const client = new CMSClient(config);

        // Authenticate
        const authenticated = await client.authenticate();
        if (!authenticated) {
          Logger.error('Authentication failed');
          process.exit(1);
        }

        // Fetch content types
        const contentTypes = await client.fetchContentTypes();

        if (contentTypes.length === 0) {
          Logger.warning('No content types found or API not implemented');
          Logger.info('Note: This tool currently reads from existing .opti-type.json files');
          process.exit(0);
        }

        // Write content types to files
        let savedCount = 0;
        let skippedCount = 0;

        for (const contentType of contentTypes) {
          // Determine the base directory based on content type
          let baseDir = 'component';
          if (contentType.baseType === 'page') {
            baseDir = 'page';
          } else if (contentType.baseType === 'experience') {
            baseDir = 'experience';
          } else if (contentType.baseType === 'block') {
            baseDir = 'component';
          }

          const outputDir = path.join(options.output, baseDir, contentType.key);
          const outputFile = path.join(outputDir, `${contentType.key}.opti-type.json`);

          await FileManager.ensureDir(outputDir);
          const written = await FileManager.writeJson(outputFile, contentType);

          if (written) {
            Logger.success(`✓ Saved ${contentType.key} (${contentType.baseType})`);
            savedCount++;
          } else {
            skippedCount++;
          }
        }

        Logger.log('');
        Logger.success(`Successfully pulled ${contentTypes.length} content types from Optimizely`);
        if (savedCount > 0) {
          Logger.info(`  ${savedCount} content type(s) saved`);
        }
        if (skippedCount > 0) {
          Logger.info(`  ${skippedCount} content type(s) skipped (already exist and were modified)`);
        }
      } catch (error) {
        Logger.error(`Failed to pull types: ${error}`);
        process.exit(1);
      }
    });

  // types:push command
  types
    .command('push')
    .description('Push content type definitions to CMS')
    .option('-i, --input <path>', 'Input directory', './src/components/cms')
    .action(async (options) => {
      try {
        Logger.heading('Pushing content types to CMS');

        const config = loadConfig();
        const client = new CMSClient(config);

        // Authenticate
        const authenticated = await client.authenticate();
        if (!authenticated) {
          Logger.error('Authentication failed');
          process.exit(1);
        }

        // Find all type definition files
        const typeFiles = await FileManager.findFiles('**/*.opti-type.json', options.input);

        if (typeFiles.length === 0) {
          Logger.warning('No content type files found');
          process.exit(0);
        }

        // Read content types
        const contentTypes: ContentTypeDefinition[] = [];
        for (const typeFile of typeFiles) {
          const contentType = await FileManager.readJson<ContentTypeDefinition>(typeFile);
          if (contentType) {
            contentTypes.push(contentType);
          }
        }

        // Push to CMS
        const success = await client.pushContentTypes(contentTypes);

        if (success) {
          Logger.success(`Successfully pushed ${contentTypes.length} content types`);
        } else {
          Logger.error('Failed to push content types');
          process.exit(1);
        }
      } catch (error) {
        Logger.error(`Failed to push types: ${error}`);
        process.exit(1);
      }
    });

  // types:list command
  types
    .command('list')
    .description('List all content types from Optimizely SaaS and local project')
    .option('-d, --dir <path>', 'Components directory', './src/components/cms')
    .option('--local-only', 'Only show local content types')
    .option('--remote-only', 'Only show remote content types from Optimizely')
    .action(async (options) => {
      try {
        const showLocal = !options.remoteOnly;
        const showRemote = !options.localOnly;

        let localTypes: ContentTypeDefinition[] = [];
        let remoteTypes: ContentTypeDefinition[] = [];

        // Fetch local content types
        if (showLocal) {
          Logger.heading('Local Content Types');
          const typeFiles = await FileManager.findFiles('**/*.opti-type.json', options.dir);

          if (typeFiles.length > 0) {
            for (const typeFile of typeFiles) {
              const contentType = await FileManager.readJson<ContentTypeDefinition>(typeFile);
              if (contentType) {
                localTypes.push(contentType);
              }
            }

            displayContentTypes(localTypes, 'Local');
          } else {
            Logger.warning('No local content type files found');
          }
        }

        // Fetch remote content types from Optimizely
        if (showRemote) {
          Logger.log('');
          Logger.heading('Optimizely SaaS Content Types');

          const config = loadConfig();
          const client = new CMSClient(config);

          const authenticated = await client.authenticate();
          if (authenticated) {
            remoteTypes = await client.fetchContentTypes();

            if (remoteTypes.length > 0) {
              displayContentTypes(remoteTypes, 'Remote');
            } else {
              Logger.warning('No content types found in Optimizely or configuration incomplete');
            }
          } else {
            Logger.warning('Could not connect to Optimizely. Check your .env configuration.');
          }
        }

        // Summary
        if (showLocal && showRemote) {
          Logger.log('');
          Logger.heading('Summary');
          Logger.info(`Local types: ${localTypes.length}`);
          Logger.info(`Remote types: ${remoteTypes.length}`);

          // Find types in remote but not in local
          const remoteKeys = new Set(remoteTypes.map(t => t.key));
          const localKeys = new Set(localTypes.map(t => t.key));
          const missingLocally = remoteTypes.filter(t => !localKeys.has(t.key));
          const missingRemotely = localTypes.filter(t => !remoteKeys.has(t.key));

          if (missingLocally.length > 0) {
            Logger.log('');
            Logger.warning(`Types in Optimizely but not locally (${missingLocally.length}):`);
            missingLocally.forEach(t => Logger.log(`  • ${t.key}`));
          }

          if (missingRemotely.length > 0) {
            Logger.log('');
            Logger.warning(`Types locally but not in Optimizely (${missingRemotely.length}):`);
            missingRemotely.forEach(t => Logger.log(`  • ${t.key}`));
          }
        }
      } catch (error) {
        Logger.error(`Failed to list types: ${error}`);
        process.exit(1);
      }
    });
}

/**
 * Helper function to display content types categorized by base type
 */
function displayContentTypes(types: ContentTypeDefinition[], source: string) {
  const pages = types.filter(t => t.baseType === 'page');
  const components = types.filter(t => t.baseType === 'component' || t.baseType === 'block');
  const experiences = types.filter(t => t.baseType === 'experience');
  const others = types.filter(t => !['page', 'component', 'block', 'experience'].includes(t.baseType));

  // Display pages
  if (pages.length > 0) {
    Logger.log('');
    Logger.subheading(`Pages (${pages.length}):`);
    pages.forEach(type => {
      Logger.log(`  • ${type.displayName || type.key} (${type.key})`);
      if (type.description) {
        Logger.log(`    ${type.description}`);
      }
    });
  }

  // Display components
  if (components.length > 0) {
    Logger.log('');
    Logger.subheading(`Components/Blocks (${components.length}):`);
    components.forEach(type => {
      Logger.log(`  • ${type.displayName || type.key} (${type.key})`);
      if (type.description) {
        Logger.log(`    ${type.description}`);
      }
    });
  }

  // Display experiences
  if (experiences.length > 0) {
    Logger.log('');
    Logger.subheading(`Experiences (${experiences.length}):`);
    experiences.forEach(type => {
      Logger.log(`  • ${type.displayName || type.key} (${type.key})`);
      if (type.description) {
        Logger.log(`    ${type.description}`);
      }
    });
  }

  // Display others
  if (others.length > 0) {
    Logger.log('');
    Logger.subheading(`Other Types (${others.length}):`);
    others.forEach(type => {
      Logger.log(`  • ${type.displayName || type.key} (${type.key})`);
      if (type.description) {
        Logger.log(`    ${type.description}`);
      }
    });
  }

  Logger.log('');
  Logger.success(`Total ${source}: ${types.length} content types`);
}
