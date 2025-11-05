'use client';

import { type CmsComponent } from "@/lib/optimizely-cms";
import { SliderBlockDataFragmentDoc, type SliderBlockDataFragment } from "@/gql/graphql";
import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Slider Block - Professional card-based slider
 */
export const SliderBlockComponent : CmsComponent<SliderBlockDataFragment> = ({ data, children }) => {
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
        <section className="section">
            <div className="container">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
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
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Arrows */}
                    {totalSlides > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-md transition-all z-20"
                                aria-label="Previous slide"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-md transition-all z-20"
                                aria-label="Next slide"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Dots Indicator */}
                    {totalSlides > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentSlide
                                            ? 'bg-[var(--accent-primary)] w-8 h-2.5'
                                            : 'bg-white/60 hover:bg-white/80 w-2.5 h-2.5'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

SliderBlockComponent.displayName = "Slider Block (Component/SliderBlock)"
SliderBlockComponent.getDataFragment = () => ['SliderBlockData', SliderBlockDataFragmentDoc]

export default SliderBlockComponent
