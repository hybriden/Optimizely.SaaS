'use client';
import { ComponentType } from 'react';
import { getComponent, getTeaser } from '@/components/cms/client-registry';

/**
 * Generic content area renderer
 * Renders an array of content items based on their _type
 */
interface ContentAreaRendererProps {
  data?: {
    items?: any[];
  };
  items?: any[];
  fallbackComponent?: ComponentType<{ data: any }>;
}

export function ContentAreaRenderer({ items, data, fallbackComponent }: ContentAreaRendererProps) {
  // Support both direct items prop and data.items for CMS component compatibility
  const contentItems = items || data?.items || [];

  if (!contentItems || contentItems.length === 0) {
    return null;
  }

  return (
    <>
      {contentItems.map((item: any, index: number) => {
        // Try to find the specific component type from the types array
        // The types array typically contains: ["HeroBlock", "_Component", "_Content"]
        // We want the most specific type (not _Component or _Content)
        const types = item._metadata?.types || [];
        const itemType = types.find((t: string) => !t.startsWith('_')) || item.__typename || item._type;

        const key = item._metadata?.key || `item-${index}`;
        const contentLink = {
          key: item._metadata?.key || `item-${index}`,
          locale: item._metadata?.locale || 'en'
        };

        // Check if this is a page type that should render as a teaser
        const TeaserComponent = getTeaser(itemType);
        if (TeaserComponent) {
          return <TeaserComponent key={key} contentLink={contentLink} data={item} />;
        }

        // Get regular component from registry
        const Component = getComponent(itemType);
        if (Component) {
          return <Component key={key} contentLink={contentLink} data={item} />;
        }

        // Fallback for unknown types
        if (fallbackComponent) {
          const FallbackComponent = fallbackComponent;
          return <FallbackComponent key={key} data={item} />;
        }

        // Default fallback
        return (
          <div key={key} className="p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg border border-yellow-400 dark:border-yellow-600">
            <p className="text-sm font-semibold">Unknown block type: {itemType}</p>
            <pre className="text-xs mt-2 overflow-auto">{JSON.stringify({
              __typename: item.__typename,
              _type: item._type,
              types: item._metadata?.types,
              displayName: item._metadata?.displayName,
              key: item._metadata?.key,
            }, null, 2)}</pre>
          </div>
        );
      })}
    </>
  );
}

export default ContentAreaRenderer;
