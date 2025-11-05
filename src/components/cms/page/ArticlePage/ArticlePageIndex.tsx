'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";

/**
 * ArticlePage - Professional article layout
 */
export const ArticlePagePage: CmsComponent<ArticlePageDataFragment> = ({ data, children }) => {
    const heading = data.Heading || data._metadata?.displayName || 'Untitled Article';
    const intro = data.Intro;
    const mainBody = data.MainBody?.html;
    const published = data._metadata?.published;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section bg-gradient-to-b from-white to-gray-50">
                <div className="container max-w-4xl">
                    <div className="animate-fade-in">
                        {/* Meta */}
                        {published && (
                            <div className="text-sm text-gray-500 mb-4">
                                {new Date(published).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        )}

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                            {heading}
                        </h1>

                        {/* Intro */}
                        {intro && (
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {intro}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container max-w-4xl">
                    <article className="card animate-slide-up">
                        {mainBody && (
                            <div
                                className="richtext-content"
                                dangerouslySetInnerHTML={{ __html: mainBody }}
                            />
                        )}

                        {children && (
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h2 className="text-2xl font-semibold mb-6">Related Content</h2>
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
