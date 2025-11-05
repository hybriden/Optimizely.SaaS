import { type CmsComponent } from "@/lib/optimizely-cms";
import { HeroBlockDataFragmentDoc, type HeroBlockDataFragment } from "@/gql/graphql";
import Image from "next/image";

/**
 * Hero Block - Professional Epinova-style
 */
export const HeroBlockComponent : CmsComponent<HeroBlockDataFragment> = ({ data, children }) => {
    const heading = data.Heading || '';
    const mainIntro = data.MainIntro || '';
    const width = data.Width || 'Full';
    const imageUrl = (data.Image as any)?.url?.default || '';

    // Extract ContentLink
    const contentLinkData = (data as any).ContentLink;
    const contentLink = contentLinkData?.url?.default || '';

    const widthClasses = {
        'Full': 'container',
        'Wide': 'container',
        'Medium': 'container max-w-4xl',
        'Narrow': 'container max-w-3xl'
    };

    const containerClass = widthClasses[width as keyof typeof widthClasses] || widthClasses['Full'];

    return (
        <section className="section bg-white">
            <div className={containerClass}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 animate-fade-in">
                        {heading && (
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                                {heading}
                            </h1>
                        )}
                        {mainIntro && (
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {mainIntro}
                            </p>
                        )}
                        {contentLink && (
                            <div className="flex gap-4 pt-4">
                                <a href={contentLink} className="btn btn-primary btn-large">
                                    Learn More
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <a href="#contact" className="btn btn-secondary btn-large">
                                    Contact Us
                                </a>
                            </div>
                        )}
                        {children && (
                            <div className="flex flex-wrap gap-4 pt-4">
                                {children}
                            </div>
                        )}
                    </div>

                    {/* Image */}
                    {imageUrl && (
                        <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg animate-slide-up">
                            <img
                                src={imageUrl}
                                alt={heading || 'Hero image'}
                                style={{
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    height: '100%',
                                    width: 'auto',
                                    minHeight: '100%'
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

HeroBlockComponent.displayName = "Hero (Component/HeroBlock)"
HeroBlockComponent.getDataFragment = () => ['HeroBlockData', HeroBlockDataFragmentDoc]

export default HeroBlockComponent
