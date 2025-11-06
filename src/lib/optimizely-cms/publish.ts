import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { createHmac, timingSafeEqual } from 'crypto';

export interface PublishConfig {
  secret?: string;
  onPublish?: (data: any) => Promise<void>;
  debug?: boolean;
  optimizePublish?: boolean;
  additionalPaths?: string[];
}

/**
 * Create publish API handler for webhook
 */
export default function createPublishApi(config: PublishConfig = {}) {
  return async function publishHandler(request: NextRequest) {
    const secret = config.secret || process.env.OPTIMIZELY_PUBLISH_TOKEN;

    try {
      // Verify token
      const authHeader = request.headers.get('authorization');
      const token = authHeader?.replace('Bearer ', '') || request.nextUrl.searchParams.get('token');

      // ✅ SECURITY FIX: Use constant-time comparison to prevent timing attacks
      if (!token || !secret) {
        if (config.debug) {
          console.error('[Publish API] Missing token or secret');
        }
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }

      const tokenBuffer = Buffer.from(token, 'utf8');
      const secretBuffer = Buffer.from(secret, 'utf8');

      if (tokenBuffer.length !== secretBuffer.length ||
          !timingSafeEqual(tokenBuffer, secretBuffer)) {
        if (config.debug) {
          console.error('[Publish API] Invalid token');
        }
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }

      // Parse webhook payload
      const body = await request.json();

      if (config.debug) {
        console.log('[Publish API] Received webhook:', JSON.stringify(body, null, 2));
      }

      // Handle different webhook types
      const { type, data } = body;

      switch (type) {
        case 'content.published':
        case 'content.updated':
          await handleContentUpdate(data, config);
          break;

        case 'content.deleted':
          await handleContentDelete(data, config);
          break;

        default:
          if (config.debug) {
            console.log(`[Publish API] Unknown webhook type: ${type}`);
          }
      }

      // Call custom handler if provided
      if (config.onPublish) {
        await config.onPublish(body);
      }

      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('[Publish API] Error processing webhook:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  };
}

/**
 * Handle content update webhook
 */
async function handleContentUpdate(data: any, config: PublishConfig) {
  const url = data?.url?.default;
  const key = data?.contentLink?.key;

  if (config.debug) {
    console.log(`[Publish API] Revalidating content: ${url || key}`);
  }

  // Revalidate by path if URL is available
  if (url) {
    try {
      revalidatePath(url, 'page');
      if (config.debug) {
        console.log(`[Publish API] Revalidated path: ${url}`);
      }
    } catch (error) {
      console.error(`[Publish API] Error revalidating path ${url}:`, error);
    }
  }

  // Revalidate by tag if key is available
  if (key) {
    try {
      revalidateTag(`content-${key}`, 'max');
      if (config.debug) {
        console.log(`[Publish API] Revalidated tag: content-${key}`);
      }
    } catch (error) {
      console.error(`[Publish API] Error revalidating tag ${key}:`, error);
    }
  }

  // Always revalidate home page
  try {
    revalidatePath('/', 'page');
    if (config.debug) {
      console.log('[Publish API] Revalidated home page');
    }
  } catch (error) {
    console.error('[Publish API] Error revalidating home page:', error);
  }

  // Revalidate additional paths if specified
  if (config.additionalPaths && config.additionalPaths.length > 0) {
    for (const path of config.additionalPaths) {
      try {
        revalidatePath(path, 'page');
        if (config.debug) {
          console.log(`[Publish API] Revalidated additional path: ${path}`);
        }
      } catch (error) {
        console.error(`[Publish API] Error revalidating path ${path}:`, error);
      }
    }
  }
}

/**
 * Handle content delete webhook
 */
async function handleContentDelete(data: any, config: PublishConfig) {
  const url = data?.url?.default;
  const key = data?.contentLink?.key;

  if (config.debug) {
    console.log(`[Publish API] Content deleted: ${url || key}`);
  }

  // Revalidate paths that might reference this content
  if (url) {
    try {
      revalidatePath(url, 'page');
    } catch (error) {
      console.error(`[Publish API] Error revalidating deleted path ${url}:`, error);
    }
  }

  // Revalidate by tag
  if (key) {
    try {
      revalidateTag(`content-${key}`, 'max');
    } catch (error) {
      console.error(`[Publish API] Error revalidating deleted content tag ${key}:`, error);
    }
  }
}

/**
 * Verify HMAC signature for webhook
 * Uses constant-time comparison to prevent timing attacks
 */
export function verifyHmacSignature(
  body: string,
  signature: string,
  secret: string
): boolean {
  const expectedSignature = createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  // ✅ SECURITY FIX: Use constant-time comparison
  if (signature.length !== expectedSignature.length) {
    return false;
  }

  const signatureBuffer = Buffer.from(signature, 'utf8');
  const expectedBuffer = Buffer.from(expectedSignature, 'utf8');

  return timingSafeEqual(signatureBuffer, expectedBuffer);
}
