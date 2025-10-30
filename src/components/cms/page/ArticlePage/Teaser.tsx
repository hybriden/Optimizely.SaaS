'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { type ArticlePageDataFragment } from "@/gql/graphql";
import { TeaserCard } from "@/components/cms/shared/TeaserCard";

export const ArticlePageTeaser: CmsComponent<ArticlePageDataFragment> = ({ data }) => {
    const metadata = (data as any)._metadata;
    const publishDate = metadata?.published || new Date().toISOString();
    const url = metadata?.url?.default || metadata?.url?.base || '#';

    return (
        <TeaserCard
            title="Article"
            description="Read this article for more information."
            url={url}
            category="Article"
            date={publishDate}
            variant="default"
        />
    );
};

ArticlePageTeaser.displayName = "ArticlePage Teaser";

export default ArticlePageTeaser;
