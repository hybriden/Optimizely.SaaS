'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { LandingPageDataFragmentDoc, type LandingPageDataFragment } from "@/gql/graphql";

/**
 * Landing Page
 * Used for landingpage content
 */
export const LandingPagePage : CmsComponent<LandingPageDataFragment> = ({ data, children }) => {
    const title = data.Title || '';
    const mainBody = data.MainBody?.html || '';
    const metaDescription = data.MetaDescription || '';

    // Use content metadata dates or a fixed date to avoid hydration mismatch
    const metadata = (data as any)._metadata;
    const publishDate = metadata?.published || '2025-01-01';
    const modifiedDate = metadata?.modified || metadata?.published || '2025-01-01';

    // Create structured data for Article
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: metaDescription,
        author: {
            '@type': 'Organization',
            name: 'Epinova',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Epinova',
        },
        datePublished: publishDate,
        dateModified: modifiedDate,
    };
    
    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <div className="min-h-screen w-full bg-[#DEE5E4]">
                {/* Page Title if available */}
                {title && (
                    <section className="relative w-full bg-white py-20 md:py-28">
                        <div className="max-w-[1088px] mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto text-center">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                                    {title}
                                </h1>
                                {metaDescription && (
                                    <p className="mt-8 text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                                        {metaDescription}
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>
                )}
                
                {/* Main Body Content */}
                {mainBody && (
                    <section className="relative w-full py-20 md:py-28 bg-white">
                        <div className="max-w-[1088px] mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="richtext-content max-w-4xl mx-auto">
                                <div 
                                    className="prose prose-lg max-w-none
                                               prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-6
                                               prose-p:text-gray-800 prose-p:leading-relaxed prose-p:font-light
                                               prose-a:text-[#75E6DA] prose-a:no-underline hover:prose-a:text-[#5fd1c0]
                                               prose-strong:text-gray-900
                                               prose-ul:list-disc prose-ol:list-decimal"
                                    dangerouslySetInnerHTML={{ __html: mainBody }}
                                />
                            </div>
                        </div>
                    </section>
                )}
                
                {/* Main Content */}
                {children && (
                    <div className="w-full">
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
    // Add your metadata logic here
    return {}
}

export default LandingPagePage
