'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { NewsPageDataFragmentDoc, type NewsPageDataFragment } from "@/gql/graphql";
import { ContentAreaRenderer } from "@/components/cms/utils/contentAreaRenderer";

/**
 * NewsPage - Professional news and updates page
 */
export const NewsPageComponent : CmsComponent<NewsPageDataFragment> = ({ data, children }) => {
    const metadata = (data as any)._metadata;
    const publishDate = metadata?.published || '2025-01-01';
    const mainContentArea = (data as any).MainContentArea || [];

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return dateString;
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section bg-gradient-to-b from-white to-gray-50">
                <div className="container max-w-4xl text-center">
                    <div className="animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formatDate(publishDate)}</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
                            Latest News & Updates
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Stay informed with the latest insights, announcements, and industry updates
                        </p>
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="section">
                <div className="container">
                    {Array.isArray(mainContentArea) && mainContentArea.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ContentAreaRenderer items={mainContentArea} />
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="max-w-md mx-auto">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    No News Yet
                                </h3>
                                <p className="text-gray-600">
                                    Add news items to the MainContentArea in the CMS to display them here.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section section-gray">
                <div className="container max-w-4xl">
                    <div className="card text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Never Miss an Update
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Subscribe to our newsletter for the latest news and insights
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <button className="btn btn-primary px-8">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {children && (
                <div className="section">
                    <div className="container">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

NewsPageComponent.displayName = "NewsPage (page/NewsPage)"
NewsPageComponent.getDataFragment = () => ['NewsPageData', NewsPageDataFragmentDoc]

export default NewsPageComponent
