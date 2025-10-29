'use client';

import { type CmsComponent } from "@/lib/optimizely-cms";
import { SliderBlockDataFragmentDoc, type SliderBlockDataFragment } from "@/gql/graphql";
import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Slider block
 * 
 */
export const SliderBlockComponent : CmsComponent<SliderBlockDataFragment> = ({ data, children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const sliderContent = data.SliderContent || [];

    // Extract image URLs from slider content
    const slides = sliderContent.map((item: any) => ({
        url: item._metadata?.url?.default || '',
        displayName: item._metadata?.displayName || 'Slide'
    })).filter(slide => slide.url);

    const totalSlides = slides.length;
    
    // Auto-play functionality
    useEffect(() => {
        if (totalSlides <= 1) return;
        
        const interval = setInterval(() => {
            setDirection('next');
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000); // Change slide every 5 seconds
        
        return () => clearInterval(interval);
    }, [totalSlides]);
    
    const nextSlide = () => {
        setDirection('next');
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
    
    const prevSlide = () => {
        setDirection('prev');
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
    
    const goToSlide = (index: number) => {
        setDirection(index > currentSlide ? 'next' : 'prev');
        setCurrentSlide(index);
    };
    
    if (totalSlides === 0) {
        return null;
    }
    
    return (
        <div className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl ring-1 ring-white/10">
                    {/* Slides Container */}
                    <div className="relative min-h-[500px] md:min-h-[600px]">
                        {slides.map((slide, index) => {
                            const isActive = index === currentSlide;
                            const isPrev = index === (currentSlide - 1 + totalSlides) % totalSlides;
                            const isNext = index === (currentSlide + 1) % totalSlides;
                            
                            return (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                        isActive 
                                            ? 'opacity-100 scale-100 z-10' 
                                            : direction === 'next'
                                            ? isPrev 
                                                ? 'opacity-0 scale-95 -translate-x-full'
                                                : 'opacity-0 scale-95 translate-x-full'
                                            : isNext
                                                ? 'opacity-0 scale-95 translate-x-full'
                                                : 'opacity-0 scale-95 -translate-x-full'
                                    }`}
                                    style={{
                                        transform: isActive ? 'none' : undefined
                                    }}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={slide.url}
                                            alt={slide.displayName}
                                            fill
                                            className={`object-cover transition-transform duration-700 ${
                                                isActive ? 'scale-100' : 'scale-110'
                                            }`}
                                            priority={index === 0}
                                        />
                                        {/* Image Overlay with gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Navigation Arrows */}
                    {totalSlides > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded-full p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl z-20 backdrop-blur-sm"
                                aria-label="Previous slide"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded-full p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl z-20 backdrop-blur-sm"
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
                                            ? 'bg-blue-500 w-8 h-2.5' 
                                            : 'bg-slate-500 hover:bg-slate-400 w-2.5 h-2.5'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                    
                    {/* Progress Bar */}
                    {totalSlides > 1 && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-700 z-20">
                            <div 
                                className="h-full bg-blue-500 transition-all duration-[5000ms] ease-linear"
                                style={{
                                    width: `${((currentSlide + 1) / totalSlides) * 100}%`
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
SliderBlockComponent.displayName = "Slider block (Component/SliderBlock)"
SliderBlockComponent.getDataFragment = () => ['SliderBlockData', SliderBlockDataFragmentDoc]

export default SliderBlockComponent