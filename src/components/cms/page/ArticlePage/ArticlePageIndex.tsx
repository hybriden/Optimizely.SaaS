'use client';
// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file

import { type CmsComponent } from "@/lib/optimizely-cms";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";

/**
 * ArticlePage
 *
 */
export const ArticlePageComponent : CmsComponent<ArticlePageDataFragment> = ({ data, children }) => {
    // TODO: Implement your component logic here

    return (
        <div className="cms-articlepage">
            <h2>ArticlePage</h2>
            {/* Add your component markup here */}
            {children}
        </div>
    );
}
ArticlePageComponent.displayName = "ArticlePage (page/ArticlePage)"
ArticlePageComponent.getDataFragment = () => ['ArticlePageData', ArticlePageDataFragmentDoc]

export default ArticlePageComponent
