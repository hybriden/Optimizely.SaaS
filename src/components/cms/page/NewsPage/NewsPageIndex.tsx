'use client';
import { type OptimizelyNextPage as CmsComponent, type ContentData } from "@/lib/optimizely-cms";
import { NewsPageDataFragmentDoc, type NewsPageDataFragment } from "@/gql/graphql";
import { ContentAreaRenderer } from "@/components/cms/utils/contentAreaRenderer";

/**
 * NewsPage - Futuristic Dark Neon Theme
 */
export const NewsPage : CmsComponent<NewsPageDataFragment> = ({ data, children }) => {
    // Type-safe access to CMS content properties
    const contentData = data as NewsPageDataFragment & ContentData;
    const metadata = contentData._metadata;
    const publishDate = metadata?.published || '2025-01-01';
    const mainContentArea = data.MainContentArea || [];

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
        <div className="min-h-screen relative">
            {/* Hero Section with neon accents */}
            <section className="relative section section-glow overflow-hidden">
                {/* Floating gradient orbs */}
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[var(--neon-pink)] rounded-full opacity-10 blur-[140px] animate-float" />
                <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-[var(--neon-cyan)] rounded-full opacity-10 blur-[140px] animate-float" style={{ animationDelay: '5s' }} />

                <div className="container max-w-4xl text-center relative z-10">
                    <div className="animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-glass)] border border-[var(--border-glow)] rounded-full text-[var(--neon-pink)] text-sm font-mono mb-6 backdrop-blur-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formatDate(publishDate)}</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-purple)] to-[var(--neon-cyan)] bg-clip-text text-transparent">
                            Latest News & Updates
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
                            Stay informed with the latest insights, announcements, and industry updates
                        </p>
                    </div>
                </div>

                {/* Bottom neon line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-pink)] to-transparent opacity-50" />
            </section>

            {/* News Grid with dark styling */}
            <section className="section relative">
                <div className="container">
                    {Array.isArray(mainContentArea) && mainContentArea.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ContentAreaRenderer items={mainContentArea} />
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="max-w-md mx-auto">
                                <div className="w-16 h-16 mx-auto mb-6 bg-[var(--bg-glass)] backdrop-blur-sm rounded-full flex items-center justify-center border border-[var(--border-subtle)]">
                                    <svg className="w-8 h-8 text-[var(--neon-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                                    No News Yet
                                </h3>
                                <p className="text-[var(--text-secondary)]">
                                    Add news items to the MainContentArea in the CMS to display them here.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA with glowing effects */}
            <section className="section relative">
                <div className="container max-w-4xl">
                    <div className="card card-featured text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] rounded-full flex items-center justify-center animate-glow-pulse">
                            <svg className="w-8 h-8 text-[var(--bg-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] bg-clip-text text-transparent">
                            Never Miss an Update
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] mb-8">
                            Subscribe to our newsletter for the latest news and insights
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:border-[var(--neon-cyan)] focus:shadow-[var(--glow-cyan-sm)] transition-all text-[var(--text-primary)]"
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

NewsPage.displayName = "NewsPage (page/NewsPage)"
NewsPage.getDataFragment = () => ['NewsPageData', NewsPageDataFragmentDoc]

export default NewsPage
