'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";

/**
 * ArticlePage Component
 * Full article page with hero section and rich content
 */
export const ArticlePagePage: CmsComponent<ArticlePageDataFragment> = ({ data, children }) => {
    const heading = data.Heading || data._metadata?.displayName || 'Untitled Article';
    const intro = data.Intro;
    const mainBody = data.MainBody?.html;
    const lastModified = data._metadata?.lastModified;
    const published = data._metadata?.published;

    return (
        <div className="min-h-screen bg-[#DEE5E4]">
            {/* Hero Section */}
            <div className="bg-[#D1CEC8]">
                <div className="max-w-[1088px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb / Meta Info */}
                        <div className="flex items-center gap-4 text-gray-600 text-sm mb-6 font-light">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Article
                            </span>
                            {published && (
                                <>
                                    <span className="text-gray-500">•</span>
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                            {heading}
                        </h1>

                        {/* Intro Text */}
                        {intro && (
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                                {intro}
                            </p>
                        )}

                        {/* Last Modified Badge */}
                        {lastModified && (
                            <div className="mt-8 inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-light text-gray-600 border border-gray-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Last updated: {new Date(lastModified).toLocaleDateString()}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1088px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Content Card */}
                    <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
                        {/* Main Body Content */}
                        {mainBody && (
                            <div
                                className="richtext-content prose prose-lg max-w-none
                                    prose-headings:font-bold prose-headings:text-gray-900
                                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
                                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                                    prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-6 prose-p:font-light
                                    prose-a:text-[#75E6DA] prose-a:no-underline hover:prose-a:text-[#5fd1c0]
                                    prose-strong:text-gray-900 prose-strong:font-semibold
                                    prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                                    prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                                    prose-li:text-gray-800 prose-li:my-2
                                    prose-blockquote:border-l-4 prose-blockquote:border-[#75E6DA] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
                                    prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
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
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 hover:shadow-lg transition-all duration-300 font-normal"
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
