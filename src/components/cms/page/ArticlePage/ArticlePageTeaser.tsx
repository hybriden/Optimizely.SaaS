'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";
import { TeaserCard } from "@/components/cms/shared/TeaserCard";

/**
 * ArticlePageTeaser Component
 * Card variant for displaying ArticlePage in content areas
 */
export const ArticlePageTeaser: CmsComponent<ArticlePageDataFragment> = ({ data }) => {
    const url = data._metadata?.url?.default || '#';
    const heading = data.Heading || data._metadata?.displayName || 'Untitled Article';
    const intro = data.Intro || '';
    const publishDate = data._metadata?.published || '';

    return (
        <TeaserCard
            title={heading}
            description={intro}
            url={url}
            category="Article"
            date={publishDate}
            variant="default"
        />
    );
};

ArticlePageTeaser.displayName = "ArticlePage (Teaser)";
ArticlePageTeaser.getDataFragment = () => ['ArticlePageData', ArticlePageDataFragmentDoc];

export default ArticlePageTeaser;
