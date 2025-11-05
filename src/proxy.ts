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

  // Check if this is a preview request (needs relaxed CSP for Optimizely CMS iframe)
  const isPreview = request.nextUrl.pathname.startsWith('/preview');

  // Build CSP header value
  const cspHeader = [
    "default-src 'self'",
    // Use nonce for scripts instead of unsafe-inline
    // Add unsafe-eval for preview mode as Optimizely edit scripts require it
    isPreview
      ? `script-src 'self' 'nonce-${nonce}' 'unsafe-eval' 'strict-dynamic' https://*.optimizely.com https://optimizely.s3.amazonaws.com`
      : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://*.optimizely.com https://optimizely.s3.amazonaws.com`,
    "connect-src 'self' https://cg.optimizely.com https://logx.optimizely.com",
    "img-src 'self' data: https://*.cms.optimizely.com https://*.idio.co https://*.cmp.optimizely.com",
    // Use nonce for styles too for better security, allow Google Fonts
    `style-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://fonts.googleapis.com`,
    "font-src 'self' data: https://fonts.gstatic.com",
    "frame-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    // Allow preview pages to be embedded in Optimizely CMS
    isPreview
      ? "frame-ancestors 'self' https://*.cms.optimizely.com https://*.optimizelyedit.com"
      : "frame-ancestors 'self'",
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
