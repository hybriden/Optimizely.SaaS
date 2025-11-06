'use client';
import { type CmsComponent, type ContentData } from "@/lib/optimizely-cms";
import { type NewsPageDataFragment } from "@/gql/graphql";
import { TeaserCard } from "@/components/cms/shared/TeaserCard";

export const NewsPageTeaser: CmsComponent<NewsPageDataFragment> = ({ data }) => {
    // Type-safe access to CMS content properties
    const contentData = data as NewsPageDataFragment & ContentData;
    const metadata = contentData._metadata;
    const title = metadata?.displayName || 'Latest News';
    const publishDate = metadata?.published || new Date().toISOString();

    // Try multiple URL extraction methods - ensure we get a string
    const urlObject = metadata?.url;
    const url = (typeof urlObject === 'string' ? urlObject :
                  urlObject?.hierarchical ||
                  urlObject?.default ||
                  urlObject?.base) ||
                (metadata?.key ? `/${metadata.key}` : '#');

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
