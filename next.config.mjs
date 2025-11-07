/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // Optimizely CMS
            {
                protocol: 'https',
                hostname: '*.cms.optimizely.com',
                pathname: '/**'
            },
            // Optimizely Content Recommendations
            {
                protocol: 'https',
                hostname: '*.idio.co',
                pathname: '/**'
            },
            // Optimizely DAM
            {
                protocol: 'https',
                hostname: '*.cmp.optimizely.com',
                pathname: '/**'
            }
        ]
    },
    // CSP headers are now handled in src/proxy.ts with nonce-based approach
    // This provides better security for dynamic pages by avoiding 'unsafe-inline'
    // Note: Next.js 16+ uses "proxy" convention instead of "middleware"
    async headers() {
        return [
            {
                // Apply security headers to all routes
                source: '/:path*',
                headers: [
                    // Prevent MIME type sniffing
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    // Prevent clickjacking attacks
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    // XSS Protection (legacy but still useful for older browsers)
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    // Control referrer information
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    // Permissions Policy - Disable dangerous features
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
                    },
                    // Cross-Origin-Opener-Policy - Prevent cross-origin attacks
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin'
                    },
                    // Cross-Origin-Resource-Policy - Control resource loading
                    {
                        key: 'Cross-Origin-Resource-Policy',
                        value: 'same-origin'
                    },
                    // Cross-Origin-Embedder-Policy - Require corp for cross-origin resources
                    {
                        key: 'Cross-Origin-Embedder-Policy',
                        value: 'require-corp'
                    }
                ]
            }
        ];
    },
    experimental: {
        serverActions: {
          allowedOrigins: [
            // Optimizely CMP Preview
            '*.webproofing.cmp.optimizely.com', 
            // Optimizely Web Experimentation & Personalization Editor
            'www.optimizelyedit.com/' 
          ],
        }
    }
};

export default nextConfig;
