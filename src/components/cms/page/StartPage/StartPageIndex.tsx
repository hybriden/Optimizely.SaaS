'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { StartPageDataFragmentDoc, type StartPageDataFragment } from "@/gql/graphql";
import { ContentAreaRenderer } from "@/components/cms/utils/contentAreaRenderer";
import Link from "next/link";

/**
 * StartPage - Modern OsloMet-Inspired Design
 * Clean, professional design with WCAG accessibility
 */
export const StartPage : CmsComponent<StartPageDataFragment> = ({ data, children }) => {
    const heading = data.Heading || '';
    const mainIntro = data.MainIntro || '';
    const mainContentArea = data.MainContentArea || [];

    return (
        <div className="min-h-screen relative">
            {/* Hero Section - Modern & Clean */}
            {(heading || mainIntro) && (
                <section className="hero">
                    <div className="container">
                        <div className="max-w-4xl animate-slide-up">
                            <span className="badge badge-primary mb-6">Professional Digital Solutions</span>
                            {heading && (
                                <h1 className="hero-title text-gradient">
                                    {heading}
                                </h1>
                            )}
                            {mainIntro && (
                                <p className="hero-subtitle">
                                    {mainIntro}
                                </p>
                            )}
                            <div className="hero-actions">
                                <Link href="/contact" className="btn btn-primary btn-large">
                                    Get Started
                                </Link>
                                <Link href="/services" className="btn btn-secondary btn-large">
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content Area from CMS */}
            {mainContentArea.length > 0 && (
                <div className="relative">
                    <ContentAreaRenderer items={mainContentArea} />
                </div>
            )}

            {/* Fallback children */}
            {!mainContentArea.length && children && (
                <div className="relative">
                    {children}
                </div>
            )}
        </div>
    );
}

StartPage.displayName = "StartPage (Page/StartPage)"
StartPage.getDataFragment = () => ['StartPageData', StartPageDataFragmentDoc]
StartPage.getMetaData = async (contentLink, locale, client) => {
    return {}
}

export default StartPage
