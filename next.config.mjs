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
    async headers() {
        return [
            {
                // Apply CSP headers to all routes
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            // Allow inline scripts and eval for Next.js and Optimizely
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.optimizely.com https://optimizely.s3.amazonaws.com",
                            // Allow connections to Optimizely Graph API and analytics
                            "connect-src 'self' https://cg.optimizely.com https://logx.optimizely.com",
                            // Allow images from configured domains
                            "img-src 'self' data: https://*.cms.optimizely.com https://*.idio.co https://*.cmp.optimizely.com",
                            // Allow inline styles for Next.js and components
                            "style-src 'self' 'unsafe-inline'",
                            "font-src 'self' data:",
                            "frame-src 'self'",
                            "object-src 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                            "frame-ancestors 'self'"
                        ].join('; ')
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
