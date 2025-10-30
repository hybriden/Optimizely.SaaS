import { headers } from 'next/headers';
import { ServerContext } from './types';

/**
 * Server-side context for Optimizely CMS
 * Uses Next.js headers to detect locale and edit mode
 */
let serverContext: ServerContext = {};

/**
 * Get the current server context
 */
export async function getServerContext(): Promise<ServerContext> {
  try {
    // Try to get locale from Next.js headers (now async in Next.js 16)
    const headersList = await headers();
    const locale = headersList.get('accept-language')?.split(',')[0]?.split('-')[0] || 'en';
    const requestId = headersList.get('x-request-id') || '';

    return {
      ...serverContext,
      locale,
      requestId,
    };
  } catch (error) {
    // If headers() fails (e.g., not in request context), return cached context
    return serverContext;
  }
}

/**
 * Set server context (useful for testing or custom setups)
 */
export function setServerContext(context: Partial<ServerContext>): void {
  serverContext = { ...serverContext, ...context };
}

/**
 * Clear server context
 */
export function clearServerContext(): void {
  serverContext = {};
}

/**
 * Check if we're in edit mode
 */
export function isEditMode(): boolean {
  return serverContext.inEditMode || false;
}

/**
 * Set edit mode
 */
export function setEditMode(enabled: boolean): void {
  serverContext.inEditMode = enabled;
}
