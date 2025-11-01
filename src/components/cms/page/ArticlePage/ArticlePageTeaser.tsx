'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";
import Link from "next/link";

/**
 * ArticlePageTeaser Component
 * Card variant for displaying ArticlePage in content areas
 */
export const ArticlePageTeaser: CmsComponent<ArticlePageDataFragment> = ({ data }) => {
    const url = data._metadata?.url?.default || '#';
    const heading = data.Heading || data._metadata?.displayName || 'Untitled Article';
    const intro = data.Intro || '';

    return (
        <Link
            href={url}
            className="group block h-full"
        >
            <article className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
                    <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-blue-100 transition-colors">
                        {heading}
                    </h3>
                </div>

                {/* Card Body */}
                <div className="p-6">
                    {intro && (
                        <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                            {intro}
                        </p>
                    )}

                    {/* Read More Link */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-indigo-700 transition-colors">
                        <span>Read article</span>
                        <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>

                {/* Card Footer with metadata */}
                {data._metadata?.lastModified && (
                    <div className="px-6 pb-4 text-xs text-gray-400 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {new Date(data._metadata.lastModified).toLocaleDateString()}
                    </div>
                )}
            </article>
        </Link>
    );
};

ArticlePageTeaser.displayName = "ArticlePage (Teaser)";
ArticlePageTeaser.getDataFragment = () => ['ArticlePageData', ArticlePageDataFragmentDoc];

export default ArticlePageTeaser;
