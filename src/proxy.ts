import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy function (Next.js 16+ convention, replaces middleware)
 * Applies Content Security Policy with nonce-based approach for dynamic pages
 */
export default function proxy(request: NextRequest) {
  // Generate a nonce for this request
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Clone the request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  // Build CSP header value
  const cspHeader = [
    "default-src 'self'",
    // Use nonce for scripts instead of unsafe-inline
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://*.optimizely.com https://optimizely.s3.amazonaws.com`,
    // Keep unsafe-eval only if absolutely required by Next.js or Optimizely
    // Consider removing in production
    "connect-src 'self' https://cg.optimizely.com https://logx.optimizely.com",
    "img-src 'self' data: https://*.cms.optimizely.com https://*.idio.co https://*.cmp.optimizely.com",
    // Use nonce for styles too for better security
    `style-src 'self' 'nonce-${nonce}' 'unsafe-inline'`,
    "font-src 'self' data:",
    "frame-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests"
  ].join('; ');

  // Create response with CSP header
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
