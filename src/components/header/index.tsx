import Link from 'next/link';

export const SiteHeader = ({}) => {
    return <header className='bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm'>
        <div className='max-w-[1088px] mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-gray-900 transition-colors hover:text-[#75E6DA]">
                    Epinova
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/about" className="text-sm font-light text-gray-700 hover:text-[#75E6DA] transition-colors">
                        About
                    </Link>
                    <Link href="/services" className="text-sm font-light text-gray-700 hover:text-[#75E6DA] transition-colors">
                        Services
                    </Link>
                    <Link href="/contact" className="text-sm font-light text-gray-700 hover:text-[#75E6DA] transition-colors">
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    </header>
}

export default SiteHeader