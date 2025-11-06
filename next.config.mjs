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
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
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
        },
        staticGenerationMinPagesPerWorker: 0,
    }
};

export default nextConfig;
