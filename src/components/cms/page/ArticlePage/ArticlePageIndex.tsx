'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";
import { sanitizeHtml } from "@/lib/sanitize";

/**
 * ArticlePage - Futuristic Dark Neon Theme
 * ✅ Security: HTML content is sanitized to prevent XSS attacks
 */
export const ArticlePagePage: CmsComponent<ArticlePageDataFragment> = ({ data, children }) => {
    const heading = data.Heading || data._metadata?.displayName || 'Untitled Article';
    const intro = data.Intro;
    const mainBody = data.MainBody?.html;
    const sanitizedMainBody = sanitizeHtml(mainBody || '');
    const published = data._metadata?.published;

    return (
        <div className="min-h-screen relative">
            {/* Hero Section with dark gradient */}
            <section className="relative section section-glow overflow-hidden">
                {/* Floating gradient orbs */}
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[var(--neon-purple)] rounded-full opacity-10 blur-[120px] animate-float" />
                <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[var(--neon-cyan)] rounded-full opacity-10 blur-[120px] animate-float" style={{ animationDelay: '4s' }} />

                <div className="container max-w-4xl relative z-10">
                    <div className="animate-fade-in">
                        {/* Meta with neon accent */}
                        {published && (
                            <div className="inline-flex items-center gap-2 text-sm font-mono text-[var(--neon-cyan)] mb-6 px-4 py-2 rounded-full border border-[var(--border-glow)] bg-[var(--bg-glass)] backdrop-blur-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {new Date(published).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        )}

                        {/* Heading with gradient */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent">
                            {heading}
                        </h1>

                        {/* Intro */}
                        {intro && (
                            <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
                                {intro}
                            </p>
                        )}
                    </div>
                </div>

                {/* Bottom neon line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-purple)] to-transparent opacity-50" />
            </section>

            {/* Main Content with glassmorphism */}
            <section className="section relative">
                <div className="container max-w-4xl">
                    <article className="card card-featured animate-slide-up">
                        {sanitizedMainBody && (
                            <div
                                className="richtext-content"
                                dangerouslySetInnerHTML={{ __html: sanitizedMainBody }}
                            />
                        )}

                        {children && (
                            <div className="mt-12 pt-8 border-t border-[var(--border-glow)]">
                                <h2 className="text-2xl font-bold mb-6 text-[var(--neon-cyan)]">Related Content</h2>
                                <div className="grid-2">
                                    {children}
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </section>
        </div>
    );
}

ArticlePagePage.displayName = "ArticlePage (Page/ArticlePage)";
ArticlePagePage.getDataFragment = () => ['ArticlePageData', ArticlePageDataFragmentDoc];

export default ArticlePagePage;
