'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { type NewsPageDataFragment } from "@/gql/graphql";
import { TeaserCard } from "@/components/cms/shared/TeaserCard";

export const NewsPageTeaser: CmsComponent<NewsPageDataFragment> = ({ data }) => {
    const metadata = (data as any)._metadata;
    const title = metadata?.displayName || 'Latest News';
    const publishDate = metadata?.published || new Date().toISOString();
    const url = metadata?.url?.default || metadata?.url?.base || '#';

    return (
        <TeaserCard
            title={title}
            description="Stay updated with the latest news and breaking stories."
            url={url}
            category="News"
            date={publishDate}
            variant="default"
        />
    );
};

NewsPageTeaser.displayName = "NewsPage Teaser";

export default NewsPageTeaser;
