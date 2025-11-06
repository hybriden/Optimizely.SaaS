import { CmsComponent, ComponentTypeDictionary, FactoryConfig } from './types';
import { sanitizeUrl, sanitizeImageUrl } from '../sanitize';

/**
 * Component Factory for registering and resolving CMS components
 */
export class ComponentFactory {
  private components: Map<string, CmsComponent<any>> = new Map();
  private config: FactoryConfig;

  constructor(config: FactoryConfig = {}) {
    this.config = config;
  }

  /**
   * Register a single component
   */
  register(typename: string, component: CmsComponent<any>): this {
    if (this.config.debug) {
      console.log(`[ComponentFactory] Registering component: ${typename}`);
    }
    this.components.set(typename, component);
    return this;
  }

  /**
   * Register multiple components from a dictionary
   */
  registerAll(dictionary: ComponentTypeDictionary): this {
    Object.entries(dictionary).forEach(([typename, component]) => {
      this.register(typename, component);
    });
    return this;
  }

  /**
   * Resolve a component by typename
   */
  resolve(typename?: string): CmsComponent<any> | null {
    if (!typename) {
      if (this.config.debug) {
        console.warn('[ComponentFactory] No typename provided');
      }
      return null;
    }

    const component = this.components.get(typename);

    if (!component && this.config.debug) {
      console.warn(`[ComponentFactory] Component not found: ${typename}`);
    }

    return component || null;
  }

  /**
   * Check if a component is registered
   */
  has(typename: string): boolean {
    return this.components.has(typename);
  }

  /**
   * Get all registered component names
   */
  getRegisteredComponents(): string[] {
    return Array.from(this.components.keys());
  }

  /**
   * Unregister a component
   */
  unregister(typename: string): boolean {
    return this.components.delete(typename);
  }

  /**
   * Clear all registered components
   */
  clear(): void {
    this.components.clear();
  }

  /**
   * Get the number of registered components
   */
  size(): number {
    return this.components.size;
  }
}

/**
 * Factory function to create a new ComponentFactory instance
 */
export function getFactory(config?: FactoryConfig): ComponentFactory {
  return new ComponentFactory(config);
}

/**
 * Default component fallback when a component is not found
 */
export const DefaultComponent: CmsComponent = ({ data }) => {
  const typename = data?.__typename || data?._type || 'Unknown';
  return (
    <div style={{ padding: '1rem', border: '2px dashed #ccc', margin: '1rem 0' }}>
      <h3>Missing Component: {typename}</h3>
      <p>This content type does not have a registered component.</p>
      {process.env.NODE_ENV === 'development' && (
        <details>
          <summary>Debug Info</summary>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </details>
      )}
    </div>
  );
};
DefaultComponent.displayName = 'DefaultComponent';

/**
 * Rich text components dictionary for rendering rich text content
 */
export const RichTextComponentDictionary: ComponentTypeDictionary = {
  // Paragraph
  'paragraph': ({ data, children }) => <p>{children}</p>,

  // Headings
  'heading-1': ({ data, children }) => <h1>{children}</h1>,
  'heading-2': ({ data, children }) => <h2>{children}</h2>,
  'heading-3': ({ data, children }) => <h3>{children}</h3>,
  'heading-4': ({ data, children }) => <h4>{children}</h4>,
  'heading-5': ({ data, children }) => <h5>{children}</h5>,
  'heading-6': ({ data, children }) => <h6>{children}</h6>,

  // Lists
  'unordered-list': ({ data, children }) => <ul>{children}</ul>,
  'ordered-list': ({ data, children }) => <ol>{children}</ol>,
  'list-item': ({ data, children }) => <li>{children}</li>,

  // Formatting
  'bold': ({ data, children }) => <strong>{children}</strong>,
  'italic': ({ data, children }) => <em>{children}</em>,
  'underline': ({ data, children }) => <u>{children}</u>,
  'code': ({ data, children }) => <code>{children}</code>,

  // Blocks
  'blockquote': ({ data, children }) => <blockquote>{children}</blockquote>,
  'code-block': ({ data, children }) => <pre><code>{children}</code></pre>,

  // Links
  // ✅ Security: URLs are validated to prevent javascript: protocol injection
  'link': ({ data, children }) => {
    const safeHref = sanitizeUrl(data?.url);
    const safeRel = data?.target === '_blank' ? 'noopener noreferrer' : data?.rel;

    return (
      <a href={safeHref} target={data?.target} rel={safeRel}>
        {children}
      </a>
    );
  },

  // Images
  // ✅ Security: Image URLs are validated to prevent data exfiltration
  'image': ({ data }) => {
    const safeSrc = sanitizeImageUrl(data?.url);

    return (
      <img
        src={safeSrc}
        alt={data?.alt || ''}
        title={data?.title}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  },

  // Horizontal rule
  'hr': () => <hr />,

  // Line break
  'br': () => <br />,
};
