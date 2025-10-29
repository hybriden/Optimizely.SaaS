import { Command } from 'commander';
import { CMSClient } from '../cms/client';
import { Logger } from '../utils/logger';
import { loadConfig } from '../config';

/**
 * CMS command - CMS utility commands
 */
export function registerCmsCommands(program: Command) {
  const cms = program.command('cms').description('CMS utility commands');

  // cms:version command
  cms
    .command('version')
    .description('Get CMS version information')
    .action(async () => {
      try {
        Logger.heading('CMS Version Information');

        const config = loadConfig();
        const client = new CMSClient(config);

        const version = await client.getVersion();

        if (version) {
          Logger.success(`CMS Version: ${version}`);
          Logger.info(`CMS URL: ${config.cmsUrl}`);
        } else {
          Logger.error('Failed to retrieve version information');
        }
      } catch (error) {
        Logger.error(`Failed to get version: ${error}`);
        process.exit(1);
      }
    });

  // cms:info command
  cms
    .command('info')
    .description('Display CMS configuration information')
    .action(async () => {
      try {
        Logger.heading('CMS Configuration');

        const config = loadConfig();

        Logger.info(`CMS URL: ${config.cmsUrl || 'Not configured'}`);
        Logger.info(`Client ID: ${config.clientId ? '***' + config.clientId.slice(-4) : 'Not configured'}`);
        Logger.info(`Graph Gateway: ${config.graphGateway || 'Not configured'}`);
        Logger.success('Configuration loaded successfully');
      } catch (error) {
        Logger.error(`Failed to load configuration: ${error}`);
        process.exit(1);
      }
    });
}
