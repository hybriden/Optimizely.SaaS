import Link from 'next/link';

export const SiteHeader = ({}) => {
    return (
        <header className='sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm'>
            <div className='container py-4'>
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-semibold text-gray-900 hover:text-[var(--accent-primary)] transition-colors"
                    >
                        Proxima
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="/services"
                            className="text-sm font-medium text-gray-700 hover:text-[var(--accent-primary)] transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            href="/projects"
                            className="text-sm font-medium text-gray-700 hover:text-[var(--accent-primary)] transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-gray-700 hover:text-[var(--accent-primary)] transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="btn btn-primary"
                        >
                            Contact Us
                        </Link>
                    </nav>
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-gray-700"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;
