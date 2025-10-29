import { Command } from 'commander';
import path from 'path';
import { CodeGenerator } from '../generators/code-generator';
import { FileManager } from '../utils/file-manager';
import { Logger } from '../utils/logger';
import { ContentTypeDefinition } from '../types';

/**
 * Next.js command - generate Next.js components and code
 */
export function registerNextjsCommands(program: Command) {
  const nextjs = program.command('nextjs').description('Generate Next.js components and code');

  // nextjs:create command
  nextjs
    .command('create')
    .description('Generate all components, fragments, and factories')
    .option('-d, --dir <path>', 'Components directory', './src/components/cms')
    .option('-f, --force', 'Force overwrite modified files', false)
    .action(async (options) => {
      try {
        Logger.heading('Generating Next.js components');

        const generator = new CodeGenerator({
          componentsDir: path.resolve(options.dir),
          preserveCustomCode: !options.force,
          forceOverwrite: options.force
        });

        // Scan existing content types
        const contentTypes = await generator.scanExistingContentTypes();

        if (contentTypes.length === 0) {
          Logger.warning('No content type definitions found');
          Logger.info('Run "custom-cms types:pull" first or ensure .opti-type.json files exist');
          process.exit(0);
        }

        Logger.info(`Found ${contentTypes.length} content types`);

        // Generate components
        let successCount = 0;
        for (const contentType of contentTypes) {
          const success = await generator.generateContentType(contentType, {
            components: true,
            fragments: true,
            types: true
          });

          if (success) {
            successCount++;
          }
        }

        // Generate factories
        await generator.generateFactories();

        Logger.success(`\nGenerated ${successCount}/${contentTypes.length} content types`);
        Logger.info('Run "yarn compile" to generate TypeScript types from GraphQL');
      } catch (error) {
        Logger.error(`Failed to generate components: ${error}`);
        process.exit(1);
      }
    });

  // nextjs:components command
  nextjs
    .command('components')
    .description('Generate React components only')
    .option('-d, --dir <path>', 'Components directory', './src/components/cms')
    .option('-f, --force', 'Force overwrite modified files', false)
    .action(async (options) => {
      try {
        Logger.heading('Generating React components');

        const generator = new CodeGenerator({
          componentsDir: path.resolve(options.dir),
          preserveCustomCode: !options.force,
          forceOverwrite: options.force
        });

        const contentTypes = await generator.scanExistingContentTypes();

        if (contentTypes.length === 0) {
          Logger.warning('No content type definitions found');
          process.exit(0);
        }

        let successCount = 0;
        for (const contentType of contentTypes) {
          const success = await generator.generateContentType(contentType, {
            components: true,
            fragments: false,
            types: false
          });

          if (success) {
            successCount++;
          }
        }

        Logger.success(`Generated ${successCount}/${contentTypes.length} components`);
      } catch (error) {
        Logger.error(`Failed to generate components: ${error}`);
        process.exit(1);
      }
    });

  // nextjs:fragments command
  nextjs
    .command('fragments')
    .description('Generate GraphQL fragments only')
    .option('-d, --dir <path>', 'Components directory', './src/components/cms')
    .option('-f, --force', 'Force overwrite modified files', false)
    .action(async (options) => {
      try {
        Logger.heading('Generating GraphQL fragments');

        const generator = new CodeGenerator({
          componentsDir: path.resolve(options.dir),
          preserveCustomCode: !options.force,
          forceOverwrite: options.force
        });

        const contentTypes = await generator.scanExistingContentTypes();

        if (contentTypes.length === 0) {
          Logger.warning('No content type definitions found');
          process.exit(0);
        }

        let successCount = 0;
        for (const contentType of contentTypes) {
          const success = await generator.generateContentType(contentType, {
            components: false,
            fragments: true,
            types: false
          });

          if (success) {
            successCount++;
          }
        }

        Logger.success(`Generated ${successCount}/${contentTypes.length} fragments`);
        Logger.info('Run "yarn compile" to generate TypeScript types from GraphQL');
      } catch (error) {
        Logger.error(`Failed to generate fragments: ${error}`);
        process.exit(1);
      }
    });

  // nextjs:factory command
  nextjs
    .command('factory')
    .description('Generate component factories/registries')
    .option('-d, --dir <path>', 'Components directory', './src/components/cms')
    .option('-f, --force', 'Force overwrite modified files', false)
    .action(async (options) => {
      try {
        Logger.heading('Generating component factories');

        const generator = new CodeGenerator({
          componentsDir: path.resolve(options.dir),
          preserveCustomCode: !options.force,
          forceOverwrite: options.force
        });

        await generator.generateFactories();

        Logger.success('Successfully generated component factories');
      } catch (error) {
        Logger.error(`Failed to generate factories: ${error}`);
        process.exit(1);
      }
    });
}
