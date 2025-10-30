'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { type LandingPageDataFragment } from "@/gql/graphql";
import { TeaserCard } from "@/components/cms/shared/TeaserCard";

export const LandingPageTeaser: CmsComponent<LandingPageDataFragment> = ({ data }) => {
    const title = data.Title || 'Landing Page';
    const metaDescription = data.MetaDescription || 'Explore our content.';
    const metadata = (data as any)._metadata;
    const publishDate = metadata?.published || new Date().toISOString();
    const url = metadata?.url?.default || metadata?.url?.base || '#';

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
