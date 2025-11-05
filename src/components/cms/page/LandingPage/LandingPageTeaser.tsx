'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { type LandingPageDataFragment } from "@/gql/graphql";
import { TeaserCard } from "@/components/cms/shared/TeaserCard";

export const LandingPageTeaser: CmsComponent<LandingPageDataFragment> = ({ data }) => {
    const metadata = (data as any)._metadata;
    const title = (data as any).Title || metadata?.displayName || 'Landing Page';
    const metaDescription = (data as any).MetaDescription || 'Explore our content.';
    const publishDate = metadata?.published || new Date().toISOString();

    // Try multiple URL extraction methods
    const url = metadata?.url?.hierarchical
        || metadata?.url?.default
        || metadata?.url?.base
        || metadata?.url
        || (metadata?.key ? `/${metadata.key}` : undefined)
        || '#';

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
