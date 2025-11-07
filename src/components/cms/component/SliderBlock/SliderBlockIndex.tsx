'use client';

import { type CmsComponent } from "@/lib/optimizely-cms";
import { SliderBlockDataFragmentDoc, type SliderBlockDataFragment } from "@/gql/graphql";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ErrorBoundary } from "@/components/ErrorBoundary";

/**
 * Slider Block - Futuristic Dark Neon Theme
 * ✅ Error Handling: Wrapped with ErrorBoundary for graceful error recovery
 */
const SliderBlockInner : CmsComponent<SliderBlockDataFragment> = ({ data, children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderContent = data.SliderContent || [];

    const slides = sliderContent.map((item: any) => ({
        url: item._metadata?.url?.default || '',
        displayName: item._metadata?.displayName || 'Slide'
    })).filter(slide => slide.url);

    const totalSlides = slides.length;

    useEffect(() => {
        if (totalSlides <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    if (totalSlides === 0) {
        return null;
    }

    return (
        <section className="section relative">
            <div className="container">
                {/* Glowing border container */}
                <div className="relative rounded-2xl bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] p-[2px] animate-glow-pulse">
                    <div className="relative overflow-hidden rounded-2xl bg-[var(--bg-primary)]">
                        {/* Slides Container */}
                        <div className="relative w-full h-[500px] md:h-[600px]">
                            {slides.map((slide, index) => {
                                const isActive = index === currentSlide;

                                return (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-700 ${
                                            isActive ? 'opacity-100 z-10' : 'opacity-0'
                                        }`}
                                    >
                                        <Image
                                            src={slide.url}
                                            alt={slide.displayName}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                        {/* Dark gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-40" />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation Arrows with neon glow */}
                        {totalSlides > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--bg-glass)] backdrop-blur-sm hover:bg-[var(--bg-tertiary)] text-[var(--neon-cyan)] border border-[var(--border-glow)] rounded-full p-3 hover:shadow-[var(--glow-cyan-sm)] transition-all z-20"
                                    aria-label="Previous slide"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--bg-glass)] backdrop-blur-sm hover:bg-[var(--bg-tertiary)] text-[var(--neon-cyan)] border border-[var(--border-glow)] rounded-full p-3 hover:shadow-[var(--glow-cyan-sm)] transition-all z-20"
                                    aria-label="Next slide"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Dots Indicator with neon glow */}
                        {totalSlides > 1 && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`transition-all duration-300 rounded-full ${
                                            index === currentSlide
                                                ? 'bg-[var(--neon-cyan)] shadow-[var(--glow-cyan-sm)] w-8 h-2.5'
                                                : 'bg-[var(--bg-glass)] border border-[var(--border-subtle)] hover:border-[var(--neon-cyan)] w-2.5 h-2.5 backdrop-blur-sm'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {/* External glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] rounded-2xl blur-2xl opacity-20 -z-10" />
            </div>
        </section>
    );
}

SliderBlockInner.displayName = "Slider Block Inner"
SliderBlockInner.getDataFragment = () => ['SliderBlockData', SliderBlockDataFragmentDoc]

// Wrap with Error Boundary
export const SliderBlockComponent : CmsComponent<SliderBlockDataFragment> = (props) => (
    <ErrorBoundary>
        <SliderBlockInner {...props} />
    </ErrorBoundary>
);

SliderBlockComponent.displayName = "Slider Block (Component/SliderBlock)"
SliderBlockComponent.getDataFragment = () => ['SliderBlockData', SliderBlockDataFragmentDoc]

export default SliderBlockComponent
