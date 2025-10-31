'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";

/**
 * ArticlePage Component
 * Full article page with hero section and rich content
 */
export const ArticlePagePage: CmsComponent<ArticlePageDataFragment> = ({ data, children }) => {
    // Debug: Log the data to see what we're getting
    console.log('ArticlePage data:', JSON.stringify(data, null, 2));

    const heading = data.Heading || data._metadata?.displayName || 'Untitled Article';
    const intro = data.Intro;
    const mainBody = data.MainBody?.html;
    const lastModified = data._metadata?.lastModified;
    const published = data._metadata?.published;

    console.log('ArticlePage values:', { heading, intro, mainBody: mainBody?.substring(0, 100) });

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb / Meta Info */}
                        <div className="flex items-center gap-4 text-blue-100 text-sm mb-6">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Article
                            </span>
                            {published && (
                                <>
                                    <span className="text-blue-300">•</span>
                                    <time className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {new Date(published).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                </>
                            )}
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {heading}
                        </h1>

                        {/* Intro Text */}
                        {intro && (
                            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed font-light">
                                {intro}
                            </p>
                        )}

                        {/* Last Modified Badge */}
                        {lastModified && (
                            <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Last updated: {new Date(lastModified).toLocaleDateString()}
                            </div>
                        )}
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="relative">
                    <svg className="w-full h-12 md:h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="max-w-4xl mx-auto">
                    {/* Content Card */}
                    <article className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
                        {/* Main Body Content */}
                        {mainBody && (
                            <div
                                className="prose prose-lg max-w-none
                                    prose-headings:font-bold prose-headings:text-gray-900
                                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
                                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                                    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                                    prose-strong:text-gray-900 prose-strong:font-semibold
                                    prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                                    prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                                    prose-li:text-gray-700 prose-li:my-2
                                    prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                                    prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                                    prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
                                    prose-img:rounded-xl prose-img:shadow-lg"
                                dangerouslySetInnerHTML={{ __html: mainBody }}
                            />
                        )}

                        {/* Content Area for child components */}
                        {children && (
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Content</h2>
                                <div className="space-y-6">
                                    {children}
                                </div>
                            </div>
                        )}
                    </article>

                    {/* Back to Top Button */}
                    <div className="text-center mb-12">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            Back to top
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ArticlePagePage.displayName = "ArticlePage (Page/ArticlePage)";
ArticlePagePage.getDataFragment = () => ['ArticlePageData', ArticlePageDataFragmentDoc];

export default ArticlePagePage;
