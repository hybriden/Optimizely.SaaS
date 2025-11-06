import DOMPurify from 'isomorphic-dompurify';
import type { Config as DOMPurifyConfig } from 'dompurify';

/**
 * HTML Sanitization Configuration
 *
 * Sanitizes HTML content from CMS to prevent XSS attacks while
 * preserving safe formatting elements.
 */

export interface SanitizeOptions {
  /** Allow additional tags beyond the default safe list */
  allowedTags?: string[];
  /** Allow additional attributes beyond the default safe list */
  allowedAttributes?: Record<string, string[]>;
  /** Strict mode - only allow minimal formatting */
  strict?: boolean;
}

/**
 * Default safe tags for rich text content
 */
const DEFAULT_ALLOWED_TAGS = [
  // Text formatting
  'p', 'br', 'strong', 'em', 'b', 'i', 'u', 's', 'sub', 'sup',
  // Headings
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  // Lists
  'ul', 'ol', 'li',
  // Links
  'a',
  // Block elements
  'blockquote', 'pre', 'code',
  // Tables
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
  // Semantic
  'article', 'section', 'div', 'span',
  // Media (with validation)
  'img',
];

/**
 * Default safe attributes for allowed tags
 */
const DEFAULT_ALLOWED_ATTR = {
  'a': ['href', 'title', 'target', 'rel'],
  'img': ['src', 'alt', 'title', 'width', 'height'],
  '*': ['class', 'id'], // Global attributes for styling
};

/**
 * Strict mode - minimal formatting only
 */
const STRICT_ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li',
];

const STRICT_ALLOWED_ATTR = {
  'a': ['href', 'title'],
};

/**
 * Sanitize HTML content from CMS
 *
 * @param html - Raw HTML string from CMS
 * @param options - Sanitization options
 * @returns Sanitized HTML string safe for rendering
 *
 * @example
 * ```tsx
 * const cleanHtml = sanitizeHtml(data.MainBody?.html);
 * <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
 * ```
 */
export function sanitizeHtml(html: string | null | undefined, options: SanitizeOptions = {}): string {
  if (!html) return '';

  const {
    allowedTags,
    allowedAttributes,
    strict = false,
  } = options;

  // Choose tag/attribute lists based on mode
  const baseTags = strict ? STRICT_ALLOWED_TAGS : DEFAULT_ALLOWED_TAGS;
  const baseAttrs = strict ? STRICT_ALLOWED_ATTR : DEFAULT_ALLOWED_ATTR;

  // Merge with custom options
  const finalTags = allowedTags ? [...baseTags, ...allowedTags] : baseTags;
  const finalAttrs = allowedAttributes
    ? { ...baseAttrs, ...allowedAttributes }
    : baseAttrs;

  // Configure DOMPurify
  const config: DOMPurifyConfig = {
    ALLOWED_TAGS: finalTags,
    ALLOWED_ATTR: Object.entries(finalAttrs).flatMap(([tag, attrs]) =>
      tag === '*' ? attrs : attrs.map(attr => `${tag}:${attr}`)
    ),
    // Additional security settings
    KEEP_CONTENT: true, // Keep text content of removed tags
    ALLOW_DATA_ATTR: false, // Block data-* attributes
    ALLOW_UNKNOWN_PROTOCOLS: false, // Only http:, https:, mailto:, tel:
    SAFE_FOR_TEMPLATES: true, // Escape templating syntax
  };

  // Sanitize and return
  // Cast to string to handle TrustedHTML type in some environments
  const clean = DOMPurify.sanitize(html, config) as unknown as string;

  return clean;
}

/**
 * Validate that a URL is safe for use in href attributes
 * Prevents javascript:, data:, and other dangerous protocols
 *
 * @param url - URL to validate
 * @returns true if URL is safe
 */
export function isSafeUrl(url: string | null | undefined): boolean {
  if (!url) return false;

  const trimmed = url.trim().toLowerCase();

  // Allow relative URLs
  if (trimmed.startsWith('/') || trimmed.startsWith('#')) {
    return true;
  }

  // Allow safe protocols
  const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
  return safeProtocols.some(protocol => trimmed.startsWith(protocol));
}

/**
 * Sanitize a URL for use in href attributes
 * Returns '#' if URL is unsafe
 *
 * @param url - URL to sanitize
 * @returns Safe URL or '#'
 */
export function sanitizeUrl(url: string | null | undefined): string {
  return isSafeUrl(url) ? url! : '#';
}
