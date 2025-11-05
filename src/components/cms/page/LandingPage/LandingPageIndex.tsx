'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { LandingPageDataFragmentDoc, type LandingPageDataFragment } from "@/gql/graphql";

/**
 * Landing Page - Professional B2B layout
 */
export const LandingPagePage : CmsComponent<LandingPageDataFragment> = ({ data, children }) => {
    const title = data.Title || '';
    const mainBody = data.MainBody?.html || '';
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

            <div className="min-h-screen">
                {/* Hero Section */}
                {title && (
                    <section className="section bg-gradient-to-b from-white to-gray-50">
                        <div className="container text-center">
                            <div className="max-w-4xl mx-auto animate-fade-in">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
                                    {title}
                                </h1>
                                {metaDescription && (
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        {metaDescription}
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Main Body */}
                {mainBody && (
                    <section className="section">
                        <div className="container max-w-4xl">
                            <div className="card animate-slide-up">
                                <div
                                    className="richtext-content"
                                    dangerouslySetInnerHTML={{ __html: mainBody }}
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* Children */}
                {children && (
                    <div>
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
