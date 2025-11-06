import DOMPurify from 'isomorphic-dompurify';
import type { Config as DOMPurifyConfig } from 'dompurify';

/**
 * Default DOMPurify configuration for rich text content
 * Allows common HTML tags while blocking dangerous elements and attributes
 */
const DEFAULT_RICH_TEXT_CONFIG: DOMPurifyConfig = {
    ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'blockquote', 'code', 'pre',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'img', 'div', 'span', 'hr'
    ],
    ALLOWED_ATTR: [
        'href', 'title', 'target', 'rel',
        'src', 'alt', 'width', 'height',
        'class', 'id'
    ],
    ALLOW_DATA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    ALLOWED_URI_REGEXP: /^(?:https?|mailto|tel):/i,
};

/**
 * Sanitizes HTML content to prevent XSS attacks
 *
 * @param html - Raw HTML string from CMS
 * @param options - Optional DOMPurify configuration to override defaults
 * @returns Sanitized HTML string safe for rendering with dangerouslySetInnerHTML
 *
 * @example
 * ```tsx
 * const safeHtml = sanitizeHtml('<script>alert("xss")</script><p>Hello</p>');
 * // Returns: '<p>Hello</p>'
 *
 * <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
 * ```
 */
export function sanitizeHtml(html: string, options?: DOMPurifyConfig): string {
    if (!html) return '';

    const config = options || DEFAULT_RICH_TEXT_CONFIG;
    return DOMPurify.sanitize(html, config);
}

/**
 * Sanitizes a URL to prevent javascript:, data:, and other dangerous protocols
 *
 * @param url - URL string to validate and sanitize
 * @returns Safe URL or '#' if the URL is dangerous
 *
 * @example
 * ```tsx
 * sanitizeUrl('https://example.com')  // ✅ Returns: 'https://example.com'
 * sanitizeUrl('javascript:alert(1)')  // ❌ Returns: '#'
 * sanitizeUrl('data:text/html,<script>') // ❌ Returns: '#'
 * ```
 */
export function sanitizeUrl(url?: string): string {
    if (!url) return '#';

    const trimmed = url.trim().toLowerCase();

    // Block dangerous protocols
    const dangerousProtocols = [
        'javascript:',
        'data:',
        'vbscript:',
        'file:',
        'about:',
    ];

    for (const protocol of dangerousProtocols) {
        if (trimmed.startsWith(protocol)) {
            console.warn(`[Security] Blocked dangerous URL protocol: ${protocol}`, url);
            return '#';
        }
    }

    // Allow only safe protocols
    const safeProtocolPattern = /^(https?:\/\/|mailto:|tel:|\/|#)/i;
    if (!safeProtocolPattern.test(trimmed)) {
        console.warn('[Security] Blocked URL with unknown protocol:', url);
        return '#';
    }

    return url;
}

/**
 * Checks if a URL is safe for use in href or src attributes
 *
 * @param url - URL to validate
 * @returns true if the URL is safe, false otherwise
 *
 * @example
 * ```tsx
 * isSafeUrl('https://example.com')  // Returns: true
 * isSafeUrl('javascript:alert(1)')  // Returns: false
 * ```
 */
export function isSafeUrl(url?: string): boolean {
    if (!url) return false;
    return sanitizeUrl(url) !== '#';
}

/**
 * Sanitizes an image URL specifically
 * Stricter than general URL sanitization - only allows http(s) and data: with base64 images
 *
 * @param url - Image URL to sanitize
 * @returns Safe image URL or empty string if dangerous
 *
 * @example
 * ```tsx
 * sanitizeImageUrl('https://example.com/image.jpg')  // ✅ Returns: URL
 * sanitizeImageUrl('data:image/png;base64,iVBORw...')  // ✅ Returns: URL (safe base64)
 * sanitizeImageUrl('data:text/html,<script>...</script>')  // ❌ Returns: ''
 * ```
 */
export function sanitizeImageUrl(url?: string): string {
    if (!url) return '';

    const trimmed = url.trim().toLowerCase();

    // Allow http(s) URLs
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        return url;
    }

    // Allow data: URLs only for images
    if (trimmed.startsWith('data:')) {
        const imageDataUrlPattern = /^data:image\/(png|jpeg|jpg|gif|webp|svg\+xml);base64,/i;
        if (imageDataUrlPattern.test(trimmed)) {
            return url;
        }
        console.warn('[Security] Blocked non-image data: URL:', url.substring(0, 50) + '...');
        return '';
    }

    // Allow relative URLs
    if (trimmed.startsWith('/')) {
        return url;
    }

    console.warn('[Security] Blocked image URL with unknown protocol:', url);
    return '';
}
