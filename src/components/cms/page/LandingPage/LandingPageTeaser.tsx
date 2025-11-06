'use client';
import { type CmsComponent, type ContentData } from "@/lib/optimizely-cms";
import { type LandingPageDataFragment } from "@/gql/graphql";
import { TeaserCard } from "@/components/cms/shared/TeaserCard";

export const LandingPageTeaser: CmsComponent<LandingPageDataFragment> = ({ data }) => {
    // Type-safe access to CMS content properties
    const contentData = data as LandingPageDataFragment & ContentData;
    const metadata = contentData._metadata;
    const title = data.Title || metadata?.displayName || 'Landing Page';
    const metaDescription = data.MetaDescription || 'Explore our content.';
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
            description={metaDescription}
            url={url}
            date={publishDate}
            variant="default"
        />
    );
};

LandingPageTeaser.displayName = "LandingPage Teaser";

export default LandingPageTeaser;
