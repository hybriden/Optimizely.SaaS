'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

  const cardClassName = "card relative h-full overflow-hidden block group";

  const cardContent = (
    <>
        {imageUrl ? (
          <div className={'relative overflow-hidden ' + imageHeightClasses[variant]}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className={'relative bg-[var(--bg-tertiary)] overflow-hidden flex items-center justify-center border-b border-[var(--border-subtle)] ' + imageHeightClasses[variant]}>
            <svg className="w-12 h-12 text-[var(--brand-teal)] opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="p-6 space-y-3">
          {(category || date) && (
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {category && <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-[var(--color-primary-100)] text-[var(--brand-teal)] border border-[var(--color-primary-200)]">{category}</span>}
              {date && <span className="text-[var(--text-muted)] text-xs">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>}
            </div>
          )}
          <h3 className={'font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-teal)] transition-colors ' + (variant === 'featured' ? 'text-2xl md:text-3xl' : variant === 'compact' ? 'text-lg' : 'text-xl')}>{title}</h3>
          {description && <p className={'text-[var(--text-secondary)] leading-relaxed ' + (variant === 'featured' ? 'text-base md:text-lg' : 'text-sm')}>{description}</p>}
          {author && (<div className="flex items-center gap-2 text-[var(--text-muted)] text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg><span>{author}</span></div>)}
          {children}
          {url && (<div className="flex items-center gap-2 text-[var(--brand-teal)] font-medium text-sm group-hover:gap-3 transition-all pt-2"><span>Read more</span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></div>)}
        </div>
    </>
  );

  return (
    <article className={'group relative ' + variantClasses[variant] + ' ' + className}>
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
