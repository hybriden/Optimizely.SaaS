import * as dotenv from 'dotenv';
import * as path from 'path';
import { CMSClientConfig } from './types';
import { Logger } from './utils/logger';

/**
 * Load configuration from environment variables
 */
export function loadConfig(): CMSClientConfig {
  // Try to load .env file from the root of the project (2 levels up from tools/proxima-cli)
  const envPath = path.resolve(__dirname, '../../../.env');
  const envLocalPath = path.resolve(__dirname, '../../../.env.local');

  try {
    // Load .env first
    dotenv.config({ path: envPath });
    // Then load .env.local which will override .env values
    dotenv.config({ path: envLocalPath, override: true });
  } catch (error) {
    Logger.warning('No .env file found or failed to load');
  }

  const config: CMSClientConfig = {
    cmsUrl: process.env.OPTIMIZELY_CMS_URL || '',
    clientId: process.env.OPTIMIZELY_CMS_CLIENT_ID || '',
    clientSecret: process.env.OPTIMIZELY_CMS_CLIENT_SECRET || '',
    graphGateway: process.env.OPTIMIZELY_GRAPH_GATEWAY,
    graphAppKey: process.env.OPTIMIZELY_GRAPH_APP_KEY,
    graphSecret: process.env.OPTIMIZELY_GRAPH_SECRET,
    graphSingleKey: process.env.OPTIMIZELY_GRAPH_SINGLE_KEY
  };

  return config;
}
