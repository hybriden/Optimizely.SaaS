import Link from 'next/link';

export const SiteHeader = ({}) => {
    return <header className='bg-slate-950/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-opacity hover:opacity-80">
                    Epinova
                </Link>
            </div>
        </div>
    </header>
}

export default SiteHeader