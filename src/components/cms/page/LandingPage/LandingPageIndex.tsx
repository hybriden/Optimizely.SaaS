'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { LandingPageDataFragmentDoc, type LandingPageDataFragment } from "@/gql/graphql";
import { sanitizeHtml } from "@/lib/sanitize";

/**
 * Landing Page - Futuristic Dark Neon Theme
 * ✅ Security: HTML content is sanitized to prevent XSS attacks
 */
export const LandingPagePage : CmsComponent<LandingPageDataFragment> = ({ data, children }) => {
    const title = data.Title || '';
    const mainBody = data.MainBody?.html || '';
    const sanitizedMainBody = sanitizeHtml(mainBody);
    const metaDescription = data.MetaDescription || '';

    const metadata = (data as any)._metadata;
    const publishDate = metadata?.published || '2025-01-01';
    const modifiedDate = metadata?.modified || metadata?.published || '2025-01-01';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: metaDescription,
        author: {
            '@type': 'Organization',
            name: 'Proxima',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Proxima',
        },
        datePublished: publishDate,
        dateModified: modifiedDate,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen relative">
                {/* Hero Section with glowing elements */}
                {title && (
                    <section className="relative section section-glow overflow-hidden">
                        {/* Animated gradient orbs */}
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--neon-blue)] rounded-full opacity-10 blur-[160px] animate-float" />
                        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--neon-green)] rounded-full opacity-10 blur-[160px] animate-float" style={{ animationDelay: '7s' }} />

                        <div className="container text-center relative z-10">
                            <div className="max-w-5xl mx-auto animate-slide-up">
                                <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-cyan)] to-[var(--neon-green)] bg-clip-text text-transparent">
                                    {title}
                                </h1>
                                {metaDescription && (
                                    <p className="text-xl md:text-2xl lg:text-3xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
                                        {metaDescription}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Bottom neon line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent opacity-50" />
                    </section>
                )}

                {/* Main Body with glassmorphism */}
                {sanitizedMainBody && (
                    <section className="section relative">
                        <div className="container max-w-4xl">
                            <div className="card card-featured animate-fade-in">
                                <div
                                    className="richtext-content"
                                    dangerouslySetInnerHTML={{ __html: sanitizedMainBody }}
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* Children with dark styling */}
                {children && (
                    <div className="relative">
                        {children}
                    </div>
                )}
            </div>
        </>
    );
}

LandingPagePage.displayName = "Landing Page (Page/LandingPage)"
LandingPagePage.getDataFragment = () => ['LandingPageData', LandingPageDataFragmentDoc]
LandingPagePage.getMetaData = async (contentLink, locale, client) => {
    return {}
}

export default LandingPagePage
