#!/usr/bin/env node

// Remove NODE_EXTRA_CA_CERTS if it points to a non-existent file
// This prevents the "Ignoring extra certs from rootCA.pem" warning
if (process.env.NODE_EXTRA_CA_CERTS === 'rootCA.pem') {
  delete process.env.NODE_EXTRA_CA_CERTS;
}

import { Command } from 'commander';
import { registerTypesCommands } from './commands/types';
import { registerNextjsCommands } from './commands/nextjs';
import { registerCmsCommands } from './commands/cms';
import { Logger } from './utils/logger';

const program = new Command();

program
  .name('proxima')
  .description('Proxima CLI tool for Optimizely integration')
  .version('1.0.0');

// Register command groups
registerTypesCommands(program);
registerNextjsCommands(program);
registerCmsCommands(program);

// Help command
program
  .command('help')
  .description('Display help information')
  .action(() => {
    Logger.heading('Proxima CLI - Help');
    Logger.log('');
    Logger.subheading('Next.js Code Generation:');
    Logger.log('  yarn proxima:create     Generate all components, fragments, and factories');
    Logger.log('  yarn proxima:components Generate React components only');
    Logger.log('  yarn proxima:fragments  Generate GraphQL fragments only');
    Logger.log('  yarn proxima:factory    Generate component factories only');
    Logger.log('');
    Logger.subheading('Content Type Management:');
    Logger.log('  yarn proxima:list       List content types from Optimizely SaaS and local project');
    Logger.log('  yarn proxima:pull       Pull content type definitions from Optimizely CMS');
    Logger.log('');
    Logger.subheading('CMS Utilities:');
    Logger.log('  yarn proxima:info       Display CMS configuration');
    Logger.log('  yarn proxima:build      Build the CLI tool');
    Logger.log('  yarn proxima:help       Display this help information');
    Logger.log('');
    Logger.subheading('Options:');
    Logger.log('  -f, --force         Force overwrite modified files');
    Logger.log('  -d, --dir <path>    Specify components directory (relative to project root)');
    Logger.log('');
    Logger.info('For more information, see the project documentation.');
  });

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
