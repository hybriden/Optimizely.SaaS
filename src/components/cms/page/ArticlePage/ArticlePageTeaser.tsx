'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";
import { TeaserCard } from "@/components/cms/shared/TeaserCard";

/**
 * ArticlePageTeaser Component
 * Card variant for displaying ArticlePage in content areas
 */
export const ArticlePageTeaser: CmsComponent<ArticlePageDataFragment> = ({ data }) => {
    const metadata = data._metadata;
    const heading = data.Heading || metadata?.displayName || 'Untitled Article';
    const intro = data.Intro || '';
    const publishDate = metadata?.published || '';

    // Try multiple URL extraction methods
    const url = metadata?.url?.hierarchical
        || metadata?.url?.default
        || metadata?.url?.base
        || (typeof metadata?.url === 'string' ? metadata.url : undefined)
        || (metadata?.key ? `/${metadata.key}` : undefined)
        || '#';

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
