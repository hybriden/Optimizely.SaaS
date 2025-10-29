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
    const publishDate = data._metadata?.published || '2025-01-01';
    const modifiedDate = data._metadata?.modified || data._metadata?.published || '2025-01-01';

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
            
            <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Page Title if available */}
            {title && (
                <section className="relative w-full bg-gradient-to-br from-blue-950 via-purple-950 to-slate-950 py-16 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
                            {title}
                        </h1>
                    </div>
                </section>
            )}
            
            {/* Main Body Content */}
            {mainBody && (
                <section className="relative w-full py-16 md:py-20 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="relative group">
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Content card - preserves TinyMCE styling */}
                            <div 
                                className="richtext-content relative max-w-none 
                                           backdrop-blur-md bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 
                                           rounded-3xl p-8 md:p-12 lg:p-16 
                                           border border-white/10 shadow-2xl
                                           text-slate-200 text-lg md:text-xl leading-relaxed"
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