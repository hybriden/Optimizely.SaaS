'use client';
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';

export const SiteHeader = ({}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div>
            <header className='sticky top-0 z-50 backdrop-blur-lg bg-[var(--bg-primary)]/90 border-b border-[var(--border-subtle)]'>
                <div className='container py-4'>
                    <div className="flex items-center justify-between">
                        {/* Logo with gradient */}
                        <Link
                            href="/"
                            className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity duration-200"
                        >
                            PROXIMA
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            <NavLink href="/services">Services</NavLink>
                            <NavLink href="/projects">Projects</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <Link
                                href="/contact"
                                className="btn btn-primary ml-2"
                            >
                                Contact Us
                            </Link>
                            <ThemeToggle />
                        </nav>

                        {/* Mobile: Theme Toggle + Menu Button */}
                        <div className="md:hidden flex items-center gap-3">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-[var(--text-primary)] border border-[var(--border-medium)] rounded-lg hover:bg-[var(--bg-secondary)] transition-all"
                                aria-label="Toggle menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-[var(--bg-primary)] backdrop-blur-lg animate-fade-in">
                    <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
                        <MobileNavLink href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                            Services
                        </MobileNavLink>
                        <MobileNavLink href="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                            Projects
                        </MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                            About
                        </MobileNavLink>
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn btn-primary btn-large mt-4"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

// Desktop Nav Link Component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-teal)] transition-colors duration-200 relative group"
    >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-teal)] group-hover:w-full transition-all duration-200" />
    </Link>
);

// Mobile Nav Link Component
const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
    <Link
        href={href}
        onClick={onClick}
        className="text-3xl font-bold text-[var(--text-primary)] hover:text-[var(--brand-teal)] transition-all duration-200"
    >
        {children}
    </Link>
);

export default SiteHeader;
