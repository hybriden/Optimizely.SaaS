'use client';
import { Component, ComponentType, ReactNode } from 'react';
import { getComponent, getTeaser } from '@/components/cms/client-registry';
import { DEFAULT_LOCALE } from '@/lib/optimizely-cms/constants';

/**
 * Content item from GraphQL - uses loose typing to match generated types
 */
interface ContentAreaItem {
  __typename?: string;
  _type?: string;
  _metadata?: {
    key?: string | null;
    locale?: string | null;
    types?: string[] | null;
    displayName?: string | null;
    [key: string]: unknown;
  } | null;
  [key: string]: unknown;
}

/**
 * Content link reference
 */
interface ContentLink {
  key: string;
  locale: string;
}

/**
 * Error boundary for individual content items
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  itemKey?: string;
  itemType?: string;
}

class ContentItemErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[ContentArea] Error rendering item:', {
      itemKey: this.props.itemKey,
      itemType: this.props.itemType,
      error: error.message,
      stack: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <p className="text-sm font-semibold text-red-800 dark:text-red-200">
            Error rendering content block
          </p>
          <p className="text-xs text-red-600 dark:text-red-400 mt-1">
            {this.props.itemType && `Type: ${this.props.itemType}`}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Resolve the specific content type from item metadata
 * Types array is ordered: [SpecificType, _Component, _Content]
 */
function resolveItemType(item: ContentAreaItem): string | undefined {
  const types = item._metadata?.types ?? [];
  // Find first non-generic type (doesn't start with _)
  const specificType = types.find((t) => !t.startsWith('_'));
  return specificType ?? item.__typename ?? item._type;
}

/**
 * Create content link from item metadata
 */
function createContentLink(item: ContentAreaItem, index: number): ContentLink {
  return {
    key: item._metadata?.key ?? `item-${index}`,
    locale: item._metadata?.locale ?? DEFAULT_LOCALE,
  };
}

/**
 * Props for ContentAreaRenderer
 */
interface ContentAreaRendererProps {
  /** Content area data from GraphQL */
  data?: {
    items?: (ContentAreaItem | null)[];
  };
  /** Direct items array */
  items?: (ContentAreaItem | null)[];
  /** Custom fallback component for unknown types */
  fallbackComponent?: ComponentType<{ data: ContentAreaItem }>;
}

/**
 * Generic content area renderer
 * Renders an array of content items based on their type
 */
export function ContentAreaRenderer({
  items,
  data,
  fallbackComponent,
}: ContentAreaRendererProps) {
  // Support both direct items prop and data.items for CMS component compatibility
  // Filter out null items from GraphQL response
  const contentItems = (items || data?.items || []).filter(
    (item): item is ContentAreaItem => item !== null
  );

  if (contentItems.length === 0) {
    return null;
  }

  return (
    <>
      {contentItems.map((item, index) => {
        const itemType = resolveItemType(item);
        const key = item._metadata?.key ?? `item-${index}`;
        const contentLink = createContentLink(item, index);

        // Skip items without a resolvable type
        if (!itemType) {
          return null;
        }

        // Check if this is a page type that should render as a teaser
        const TeaserComponent = getTeaser(itemType);
        if (TeaserComponent) {
          return (
            <ContentItemErrorBoundary key={key} itemKey={key} itemType={itemType}>
              <TeaserComponent contentLink={contentLink} data={item} />
            </ContentItemErrorBoundary>
          );
        }

        // Get regular component from registry
        const Component = getComponent(itemType);
        if (Component) {
          return (
            <ContentItemErrorBoundary key={key} itemKey={key} itemType={itemType}>
              <Component contentLink={contentLink} data={item} />
            </ContentItemErrorBoundary>
          );
        }

        // Fallback for unknown types
        if (fallbackComponent) {
          const FallbackComponent = fallbackComponent;
          return (
            <ContentItemErrorBoundary key={key} itemKey={key} itemType={itemType}>
              <FallbackComponent data={item} />
            </ContentItemErrorBoundary>
          );
        }

        // Default fallback for development
        return (
          <div
            key={key}
            className="p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg border border-yellow-400 dark:border-yellow-600"
          >
            <p className="text-sm font-semibold">Unknown block type: {itemType}</p>
            <pre className="text-xs mt-2 overflow-auto">
              {JSON.stringify(
                {
                  __typename: item.__typename,
                  _type: item._type,
                  types: item._metadata?.types,
                  displayName: item._metadata?.displayName,
                  key: item._metadata?.key,
                },
                null,
                2
              )}
            </pre>
          </div>
        );
      })}
    </>
  );
}

export default ContentAreaRenderer;
