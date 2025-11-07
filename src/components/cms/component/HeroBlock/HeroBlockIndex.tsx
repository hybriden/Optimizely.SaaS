import { type CmsComponent } from "@/lib/optimizely-cms";
import { HeroBlockDataFragmentDoc, type HeroBlockDataFragment } from "@/gql/graphql";
import Image from "next/image";

/**
 * Hero Block - Futuristic Dark Neon Theme
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
        <section className="relative section section-glow overflow-hidden">
            {/* Animated gradient orbs in background */}
            <div className="absolute top-20 -left-40 w-96 h-96 bg-[var(--neon-cyan)] rounded-full opacity-20 blur-[120px] animate-float" />
            <div className="absolute bottom-20 -right-40 w-96 h-96 bg-[var(--neon-purple)] rounded-full opacity-20 blur-[120px] animate-float" style={{ animationDelay: '2s' }} />

            <div className={containerClass}>
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Text Content */}
                    <div className="space-y-6 animate-slide-up">
                        {heading && (
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent animate-glow-pulse">
                                {heading}
                            </h1>
                        )}
                        {mainIntro && (
                            <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
                                {mainIntro}
                            </p>
                        )}
                        {contentLink && (
                            <div className="flex flex-wrap gap-4 pt-6">
                                <a href={contentLink} className="btn btn-primary btn-large group">
                                    Learn More
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                    {/* Image with neon glow - ⚡ Optimized with Next.js Image */}
                    {imageUrl && (
                        <div className="relative w-full h-[400px] lg:h-[600px] animate-fade-in">
                            {/* Glowing border container */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] p-[2px] animate-glow-pulse">
                                <div className="relative w-full h-full bg-[var(--bg-primary)] rounded-2xl overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt={heading || 'Hero image'}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover animate-float"
                                        priority
                                    />
                                    {/* Image overlay with gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-50" />
                                </div>
                            </div>
                            {/* Additional glow effects */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] rounded-2xl blur-2xl opacity-20 -z-10" />
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom neon line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-50" />
        </section>
    );
}

HeroBlockComponent.displayName = "Hero (Component/HeroBlock)"
HeroBlockComponent.getDataFragment = () => ['HeroBlockData', HeroBlockDataFragmentDoc]

export default HeroBlockComponent
