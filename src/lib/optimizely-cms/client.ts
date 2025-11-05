import { GraphQLClient } from 'graphql-request';
import { createHmac, createHash } from 'crypto';

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
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Check if token is a JWT (starts with "eyJ")
    const isJWT = token && token.startsWith('eyJ');

    if (token) {
      authMode = AuthMode.Token;
      if (isJWT) {
        // JWT preview tokens go in Authorization header
        headers['Authorization'] = `Bearer ${token}`;
        // Disable caching for preview requests
        headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      } else {
        // Regular tokens go in URL
        url += `?auth=${token}`;
      }
    } else if (mergedConfig.singleKey || process.env.OPTIMIZELY_GRAPH_SINGLE_KEY) {
      // Use Single Key for published content by default
      authMode = AuthMode.Public;
      const key = mergedConfig.singleKey || process.env.OPTIMIZELY_GRAPH_SINGLE_KEY;
      url += `?auth=${key}`;
    } else if (mergedConfig.appKey || process.env.OPTIMIZELY_GRAPH_APP_KEY) {
      // Fall back to App Key
      authMode = AuthMode.Token;
      const key = mergedConfig.appKey || process.env.OPTIMIZELY_GRAPH_APP_KEY;
      url += `?auth=${key}`;
    }

    super(url, {
      headers,
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
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Check if token is a JWT (starts with "eyJ")
    const isJWT = token && token.startsWith('eyJ');

    switch (mode) {
      case AuthMode.HMAC:
        // For HMAC, we'll add the signature per request
        if (this.config.secret) {
          url += `?auth=${this.config.appKey || process.env.OPTIMIZELY_GRAPH_APP_KEY}`;
        }
        break;
      case AuthMode.Token:
        if (token) {
          if (isJWT) {
            // JWT preview tokens go in Authorization header
            headers['Authorization'] = `Bearer ${token}`;
          } else {
            url += `?auth=${token}`;
          }
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
    // Update headers if JWT token is present
    if (isJWT) {
      this.setHeader('Authorization', `Bearer ${token}`);
    }
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
   * Create HMAC signature for request per Optimizely Graph spec:
   * Signature = HMAC-SHA256(appKey + method + uri + timestamp + nonce + bodyBase64, secret)
   */
  private createHmacSignature(method: string, uri: string, timestamp: string, nonce: string, body: string): string {
    const secret = this.config.secret || process.env.OPTIMIZELY_GRAPH_SECRET || '';
    const appKey = this.config.appKey || process.env.OPTIMIZELY_GRAPH_APP_KEY || '';

    // Calculate MD5 hash of body and convert to base64
    const bodyHash = createHash('md5').update(body).digest('base64');

    // Create signature string: appKey + method + uri + timestamp + nonce + bodyBase64
    const signatureData = `${appKey}${method}${uri}${timestamp}${nonce}${bodyHash}`;

    return createHmac('sha256', secret)
      .update(signatureData)
      .digest('base64');
  }

  /**
   * Override request method to match GraphQLClient interface
   * Supports both old and new API signatures for backward compatibility
   */
  async request<T = any, V = any>(documentOrOptions: any, variables?: V): Promise<T> {
    // HMAC authentication disabled for now - needs further investigation
    // TODO: Implement proper HMAC authentication for draft content access

    return super.request(documentOrOptions, variables as any) as Promise<T>;
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
   * Get all published page routes for sitemap generation
   * Uses pagination to handle more than 100 pages (Optimizely Graph limit)
   */
  async getRoutes(locale?: string): Promise<Array<{ url: URL; changed?: Date; locale?: string }>> {
    const allRoutes: Array<{ url: URL; changed?: Date; locale?: string }> = [];
    let skip = 0;
    const limit = 100; // Optimizely Graph max limit
    let hasMore = true;

    while (hasMore) {
      const query = `
        query GetAllPages($locale: [Locales!], $skip: Int!, $limit: Int!) {
          _Page(
            where: {
              _metadata: {
                status: { eq: "Published" }
                url: { default: { exist: true } }
              }
            }
            locale: $locale
            skip: $skip
            limit: $limit
          ) {
            items {
              _metadata {
                url {
                  default
                }
                lastModified
                locale
                status
              }
            }
            total
          }
        }
      `;

      try {
        const result = await this.client.request(query, {
          locale: locale ? [locale] : null,
          skip,
          limit
        });

        const pages = result._Page?.items || [];
        const total = result._Page?.total || 0;

        pages
          .filter((page: any) => !!page._metadata?.url?.default)
          .forEach((page: any) => {
            allRoutes.push({
              url: new URL(page._metadata.url.default, 'https://placeholder.com'), // Base URL will be replaced in sitemap.ts
              changed: page._metadata?.lastModified ? new Date(page._metadata.lastModified) : undefined,
              locale: page._metadata?.locale
            });
          });

        skip += limit;
        hasMore = skip < total && pages.length === limit;

      } catch (error) {
        console.error('Error fetching routes for sitemap:', error);
        hasMore = false;
      }
    }

    return allRoutes;
  }
}
