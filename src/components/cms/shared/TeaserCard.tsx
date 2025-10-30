'use client';
import { ReactNode } from 'react';
import Link from 'next/link';

export interface TeaserCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  category?: string;
  date?: string;
  author?: string;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
  children?: ReactNode;
}

export function TeaserCard({
  title,
  description,
  imageUrl,
  url,
  category,
  date,
  author,
  variant = 'default',
  className = '',
  children
}: TeaserCardProps) {
  const variantClasses = {
    default: 'h-full',
    featured: 'h-full md:col-span-2',
    compact: 'h-full'
  };

  const imageHeightClasses = {
    default: 'h-48',
    featured: 'h-64 md:h-80',
    compact: 'h-32'
  };

  const cardClassName = "relative h-full bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] block";

  const cardContent = (
    <>
        {imageUrl ? (
          <div className={'relative overflow-hidden ' + imageHeightClasses[variant]}>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
        ) : (
          <div className={'relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 overflow-hidden ' + imageHeightClasses[variant]}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
        )}
        <div className="p-6 space-y-4">
          {(category || date) && (
            <div className="flex flex-wrap items-center gap-3">
              {category && <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">{category}</span>}
              {date && <span className="text-slate-400 text-sm">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>}
            </div>
          )}
          <h3 className={'font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 ' + (variant === 'featured' ? 'text-2xl md:text-3xl' : variant === 'compact' ? 'text-lg' : 'text-xl')}>{title}</h3>
          {description && <p className={'text-slate-400 leading-relaxed ' + (variant === 'featured' ? 'text-base md:text-lg' : 'text-sm')}>{description}</p>}
          {author && (<div className="flex items-center gap-2 text-slate-400 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg><span>{author}</span></div>)}
          {children}
          {url && (<div className="flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-4 transition-all duration-300 pt-2"><span>Read more</span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></div>)}
        </div>
    </>
  );

  return (
    <article className={'group relative ' + variantClasses[variant] + ' ' + className}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-pink-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      {url ? (
        <Link href={url} className={cardClassName}>
          {cardContent}
        </Link>
      ) : (
        <div className={cardClassName}>
          {cardContent}
        </div>
      )}
    </article>
  );
}

export default TeaserCard;
