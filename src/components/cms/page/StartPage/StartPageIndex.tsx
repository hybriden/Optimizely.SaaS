'use client';
import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { StartPageDataFragmentDoc, type StartPageDataFragment } from "@/gql/graphql";
import { ContentAreaRenderer } from "@/components/cms/utils/contentAreaRenderer";
import Link from "next/link";

/**
 * StartPage - Modern OsloMet-Inspired Design
 * Clean, professional design with WCAG accessibility
 */
export const StartPagePage : CmsComponent<StartPageDataFragment> = ({ data, children }) => {
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

            {/* Featured Services Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Expert consulting and development services powered by Optimizely
                        </p>
                    </div>
                    <div className="grid-3">
                        {/* Service Card 1 */}
                        <article className="card card-hover-lift">
                            <div className="mb-4">
                                <svg className="w-12 h-12 text-[var(--brand-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="card-title">CMS Development</h3>
                            <p className="card-description">
                                Build powerful, scalable content management solutions with Optimizely CMS that grow with your business.
                            </p>
                            <Link href="/services/cms" className="card-link">
                                Learn more
                            </Link>
                        </article>

                        {/* Service Card 2 */}
                        <article className="card card-hover-lift">
                            <div className="mb-4">
                                <svg className="w-12 h-12 text-[var(--brand-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="card-title">Performance Optimization</h3>
                            <p className="card-description">
                                Maximize your website's speed and user experience with expert performance tuning and optimization.
                            </p>
                            <Link href="/services/optimization" className="card-link">
                                Learn more
                            </Link>
                        </article>

                        {/* Service Card 3 */}
                        <article className="card card-hover-lift">
                            <div className="mb-4">
                                <svg className="w-12 h-12 text-[var(--brand-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="card-title">Custom Development</h3>
                            <p className="card-description">
                                Tailored web solutions designed specifically for your unique business requirements and goals.
                            </p>
                            <Link href="/services/custom" className="card-link">
                                Learn more
                            </Link>
                        </article>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="grid-4">
                        <div className="stat">
                            <div className="stat-value">50+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">98%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">15+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">24/7</div>
                            <div className="stat-label">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area from CMS */}
            {mainContentArea.length > 0 && (
                <div className="relative">
                    <ContentAreaRenderer items={mainContentArea} />
                </div>
            )}

            {/* Recent Projects Showcase */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
                        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Discover how we've helped organizations achieve their digital goals
                        </p>
                    </div>
                    <div className="grid-2">
                        {/* Project Card 1 */}
                        <article className="card card-hover-lift">
                            <div className="h-48 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-500)] rounded-lg mb-6 flex items-center justify-center">
                                <svg className="w-20 h-20 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="badge badge-success mb-3">E-commerce</span>
                            <h3 className="card-title">Enterprise Platform Redesign</h3>
                            <p className="card-description">
                                Complete digital transformation for a leading retailer, improving conversion rates by 45%.
                            </p>
                            <Link href="/projects/enterprise-platform" className="card-link">
                                View case study
                            </Link>
                        </article>

                        {/* Project Card 2 */}
                        <article className="card card-hover-lift">
                            <div className="h-48 bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-accent-500)] rounded-lg mb-6 flex items-center justify-center">
                                <svg className="w-20 h-20 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <span className="badge badge-success mb-3">Education</span>
                            <h3 className="card-title">Learning Management System</h3>
                            <p className="card-description">
                                Custom LMS solution serving 50,000+ students with 99.9% uptime and excellent user satisfaction.
                            </p>
                            <Link href="/projects/learning-system" className="card-link">
                                View case study
                            </Link>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="cta-section">
                        <h2 className="text-4xl font-bold">Ready to Start Your Project?</h2>
                        <p className="text-lg">
                            Let's discuss how we can help you achieve your digital goals with expert Optimizely solutions.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link href="/contact" className="btn btn-large" style={{ background: 'white', color: 'var(--brand-teal)' }}>
                                Contact Us Today
                            </Link>
                            <Link href="/about" className="btn btn-large" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid white' }}>
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fallback children */}
            {!mainContentArea.length && children && (
                <div className="relative">
                    {children}
                </div>
            )}
        </div>
    );
}

StartPagePage.displayName = "StartPage (Page/StartPage)"
StartPagePage.getDataFragment = () => ['StartPageData', StartPageDataFragmentDoc]
StartPagePage.getMetaData = async (contentLink, locale, client) => {
    return {}
}

export default StartPagePage
