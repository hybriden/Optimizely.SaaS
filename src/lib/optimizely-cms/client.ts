import { GraphQLClient } from 'graphql-request';
import { createHmac } from 'crypto';

export enum AuthMode {
  Public = 'public',
  HMAC = 'hmac',
  Token = 'token'
}

export interface ClientConfig {
  gateway?: string;
  singleKey?: string;
  appKey?: string;
  secret?: string;
  nextJsFetchDirectives?: boolean;
}

export class OptimizelyGraphClient extends GraphQLClient {
  private config: ClientConfig;
  public currentAuthMode: AuthMode;
  private previewEnabled: boolean = false;

  constructor(config?: ClientConfig, token?: string, options?: ClientConfig) {
    const mergedConfig = { ...config, ...options };
    const gateway = mergedConfig.gateway || process.env.OPTIMIZELY_GRAPH_GATEWAY || 'https://cg.optimizely.com';

    // Determine auth mode and construct URL
    let authMode = AuthMode.Public;
    let url = `${gateway}/content/v2`;

    if (token) {
      authMode = AuthMode.Token;
      url += `?auth=${token}`;
    } else if (mergedConfig.singleKey || process.env.OPTIMIZELY_GRAPH_SINGLE_KEY) {
      authMode = AuthMode.Public;
      const key = mergedConfig.singleKey || process.env.OPTIMIZELY_GRAPH_SINGLE_KEY;
      url += `?auth=${key}`;
    } else if (mergedConfig.appKey || process.env.OPTIMIZELY_GRAPH_APP_KEY) {
      authMode = AuthMode.Token;
      const key = mergedConfig.appKey || process.env.OPTIMIZELY_GRAPH_APP_KEY;
      url += `?auth=${key}`;
    }

    super(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Use Next.js fetch if requested
      fetch: mergedConfig.nextJsFetchDirectives ? fetch : undefined,
    });

    this.config = mergedConfig;
    this.currentAuthMode = authMode;
  }

  /**
   * Update authentication mode
   */
  updateAuthentication(mode: AuthMode, token?: string): void {
    this.currentAuthMode = mode;

    const gateway = this.config.gateway || process.env.OPTIMIZELY_GRAPH_GATEWAY || 'https://cg.optimizely.com';
    let url = `${gateway}/content/v2`;

    switch (mode) {
      case AuthMode.HMAC:
        // For HMAC, we'll add the signature per request
        if (this.config.secret) {
          url += `?auth=${this.config.appKey || process.env.OPTIMIZELY_GRAPH_APP_KEY}`;
        }
        break;
      case AuthMode.Token:
        if (token) {
          url += `?auth=${token}`;
        } else if (this.config.appKey || process.env.OPTIMIZELY_GRAPH_APP_KEY) {
          url += `?auth=${this.config.appKey || process.env.OPTIMIZELY_GRAPH_APP_KEY}`;
        }
        break;
      case AuthMode.Public:
      default:
        if (this.config.singleKey || process.env.OPTIMIZELY_GRAPH_SINGLE_KEY) {
          url += `?auth=${this.config.singleKey || process.env.OPTIMIZELY_GRAPH_SINGLE_KEY}`;
        }
        break;
    }

    this.setEndpoint(url);
  }

  /**
   * Enable preview mode
   */
  enablePreview(): void {
    this.previewEnabled = true;
  }

  /**
   * Disable preview mode
   */
  disablePreview(): void {
    this.previewEnabled = false;
  }

  /**
   * Check if preview is enabled
   */
  isPreviewEnabled(): boolean {
    return this.previewEnabled;
  }

  /**
   * Create HMAC signature for request
   */
  private createHmacSignature(body: string): string {
    const secret = this.config.secret || process.env.OPTIMIZELY_GRAPH_SECRET || '';
    return createHmac('sha256', secret)
      .update(body)
      .digest('base64');
  }
}

/**
 * Factory function to create a client instance
 */
export function createClient(
  config?: ClientConfig,
  token?: string,
  options?: ClientConfig
): OptimizelyGraphClient {
  return new OptimizelyGraphClient(config, token, options);
}

/**
 * Helper to get route information from Optimizely Graph
 */
export class RouteResolver {
  private client: OptimizelyGraphClient;

  constructor(client: OptimizelyGraphClient) {
    this.client = client;
  }

  /**
   * Resolve a URL path to content
   */
  async getRoutes(locale?: string): Promise<Array<{ url: URL; changed?: Date; locale?: string }>> {
    // This would query all routes from Optimizely Graph
    // Implementation depends on your specific schema
    // For now, return empty array - needs to be implemented with actual GraphQL query
    return [];
  }
}
