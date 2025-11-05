'use client';
import { useState } from 'react';
import Link from 'next/link';

export const SiteHeader = ({}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className='sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg-card)] border-b border-[var(--border-subtle)] shadow-[0_8px_32px_rgba(0,240,255,0.1)]'>
                <div className='container py-4'>
                    <div className="flex items-center justify-between">
                        {/* Logo with glow effect */}
                        <Link
                            href="/"
                            className="text-3xl font-bold bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 relative group"
                        >
                            <span className="relative z-10">PROXIMA</span>
                            <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] transition-opacity duration-300 -z-10" />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            <NavLink href="/services">Services</NavLink>
                            <NavLink href="/projects">Projects</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <Link
                                href="/contact"
                                className="btn btn-primary btn-sm"
                            >
                                Contact Us
                            </Link>
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-[var(--neon-cyan)] border border-[var(--border-glow)] rounded-lg hover:bg-[var(--bg-glass)] transition-all hover:shadow-[var(--glow-cyan-sm)]"
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
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-[var(--bg-primary)] bg-opacity-95 backdrop-blur-xl animate-fade-in">
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
        </>
    );
};

// Desktop Nav Link Component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-all duration-300 relative group uppercase tracking-wider"
    >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] group-hover:w-full transition-all duration-300 shadow-[var(--glow-cyan-sm)]" />
    </Link>
);

// Mobile Nav Link Component
const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
    <Link
        href={href}
        onClick={onClick}
        className="text-4xl font-bold text-[var(--text-primary)] hover:text-[var(--neon-cyan)] transition-all duration-300 hover:scale-110 hover:text-glow"
    >
        {children}
    </Link>
);

export default SiteHeader;
