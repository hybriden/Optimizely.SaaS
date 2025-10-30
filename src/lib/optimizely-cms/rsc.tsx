import 'server-only';
import { ReactNode } from 'react';
import { ComponentFactory, RichTextComponentDictionary } from './factory';
import { getServerContext } from './context';
import { CompositionNode, ContentData, CmsComponentProps, CmsLayoutComponent } from './types';

export { getServerContext, ComponentFactory, RichTextComponentDictionary };
export type { CmsLayoutComponent };

/**
 * CmsEditable wrapper for edit mode (async server component)
 * In Next.js 16, server context APIs are async, so this must be an async component
 */
export async function CmsEditable({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const { inEditMode } = await getServerContext();

  if (inEditMode) {
    return (
      <div className={`cms-editable ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
}

/**
 * Check if a value is a composition node
 */
export function isNode(value: any): value is CompositionNode {
  return (
    value &&
    typeof value === 'object' &&
    ('nodeType' in value || 'displayName' in value || 'component' in value)
  );
}

/**
 * OptimizelyComposition renderer for Visual Builder
 */
export function OptimizelyComposition({
  node,
  factory,
  className,
}: {
  node?: CompositionNode;
  factory: ComponentFactory;
  className?: string;
}) {
  if (!node) {
    return null;
  }

  // If this node has a component, render it
  if (node.component) {
    const Component = factory.resolve(node.component.__typename || node.component._type);
    if (Component) {
      return (
        <CmsEditable className={className}>
          <Component data={node.component} />
        </CmsEditable>
      );
    }
  }

  // If this is a structure node with children, render recursively
  if (node.nodes && node.nodes.length > 0) {
    const containerClasses = getContainerClasses(node);

    return (
      <div className={`${containerClasses} ${className || ''}`} data-node-type={node.nodeType}>
        {node.nodes.map((childNode, index) => (
          <OptimizelyComposition
            key={childNode.key || `node-${index}`}
            node={childNode}
            factory={factory}
          />
        ))}
      </div>
    );
  }

  return null;
}

/**
 * Get container CSS classes based on node type
 */
function getContainerClasses(node: CompositionNode): string {
  const classes: string[] = [];

  // Add layout classes based on node type
  switch (node.nodeType?.toLowerCase()) {
    case 'row':
      classes.push('flex', 'flex-row');
      break;
    case 'column':
      classes.push('flex', 'flex-col');
      break;
    case 'section':
      classes.push('w-full');
      break;
    default:
      break;
  }

  // Add display settings as classes
  if (node.displaySettings) {
    node.displaySettings.forEach(({ key, value }) => {
      if (key === 'class' || key === 'className') {
        classes.push(value);
      }
    });
  }

  return classes.join(' ');
}

/**
 * Content renderer that resolves and renders content by typename
 */
export function ContentRenderer({
  content,
  factory,
  className,
}: {
  content: ContentData | ContentData[];
  factory: ComponentFactory;
  className?: string;
}) {
  // Handle array of content
  if (Array.isArray(content)) {
    return (
      <>
        {content.map((item, index) => (
          <ContentRenderer
            key={item._metadata?.key || `content-${index}`}
            content={item}
            factory={factory}
            className={className}
          />
        ))}
      </>
    );
  }

  // Handle single content item
  const typename = content.__typename || content._type;
  if (!typename) {
    return null;
  }

  const Component = factory.resolve(typename);
  if (!Component) {
    console.warn(`[ContentRenderer] No component registered for: ${typename}`);
    return null;
  }

  return (
    <CmsEditable className={className}>
      <Component data={content} />
    </CmsEditable>
  );
}

/**
 * Get base factory with common components pre-registered
 */
export function getFactory(): ComponentFactory {
  const factory = new ComponentFactory({ debug: false });
  return factory;
}
