import { type CmsComponent } from "@/lib/optimizely-cms";
import { HeroBlockDataFragmentDoc, type HeroBlockDataFragment } from "@/gql/graphql";
import Image from "next/image";

/**
 * Hero
 * 
 */
export const HeroBlockComponent : CmsComponent<HeroBlockDataFragment> = ({ data, children }) => {
    const heading = data.Heading || '';
    const mainIntro = data.MainIntro || '';
    const width = data.Width || 'Full';
    const imageUrl = (data.Image as any)?.url?.default || '';
    
    // Extract ContentLink - use default path for internal links, or full URL for external
    const contentLinkData = (data as any).ContentLink;
    const contentLink = contentLinkData?.url?.default || '';
    
    const widthClasses = {
        'Full': 'max-w-[1088px]',
        'Wide': 'max-w-[1088px]',
        'Medium': 'max-w-[900px]',
        'Narrow': 'max-w-[700px]'
    };

    const containerWidth = widthClasses[width as keyof typeof widthClasses] || widthClasses['Full'];

    return (
        <section className="relative w-full bg-[#D1CEC8] py-20 md:py-28 lg:py-36 overflow-hidden">
            <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${containerWidth}`}>
                <div className="flex flex-col gap-16">
                    {/* Heading and Text Section */}
                    <div className="space-y-8 text-center">
                        {heading && (
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-fade-in">
                                {heading}
                            </h1>
                        )}
                        {mainIntro && (
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light animate-slide-in-up">
                                {mainIntro}
                            </p>
                        )}
                        {contentLink && (
                            <div className="flex justify-center mt-10 animate-slide-in-up">
                                <a
                                    href={contentLink}
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white font-normal rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-gray-700"
                                >
                                    <span>Les mer</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        )}
                        {children && (
                            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                                {children}
                            </div>
                        )}
                    </div>

                    {/* Image Section */}
                    {imageUrl && (
                        <div className="relative h-[400px] lg:h-[500px] w-full mx-auto rounded-2xl overflow-hidden shadow-lg group animate-fade-in">
                            {contentLink ? (
                                <a href={contentLink} className="block w-full h-full">
                                    <Image
                                        src={imageUrl}
                                        alt={heading || 'Hero image'}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                </a>
                            ) : (
                                <Image
                                    src={imageUrl}
                                    alt={heading || 'Hero image'}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            )}
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