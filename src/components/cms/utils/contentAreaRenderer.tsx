import { ComponentType } from 'react';
import HeroBlockComponent from '@/components/cms/component/HeroBlock';
import TextBlockComponent from '@/components/cms/component/TextBlock';
import SliderBlockComponent from '@/components/cms/component/SliderBlock';
import ContentAreaComponent from '@/components/cms/component/ContentArea';

// Central registry for all block components
type BlockComponent = ComponentType<any>;

interface BlockRegistry {
  [key: string]: BlockComponent;
}

const BLOCK_REGISTRY: BlockRegistry = {
  'HeroBlock': HeroBlockComponent,
  'TextBlock': TextBlockComponent,
  'SliderBlock': SliderBlockComponent,
  'ContentArea': ContentAreaComponent,
};

/**
 * Register a new block component type
 */
export function registerBlock(typeName: string, component: BlockComponent) {
  BLOCK_REGISTRY[typeName] = component;
}

/**
 * Get component for a specific block type
 */
export function getBlockComponent(typeName: string): BlockComponent | null {
  return BLOCK_REGISTRY[typeName] || null;
}

/**
 * Generic content area renderer
 * Renders an array of content items based on their _type
 */
interface ContentAreaRendererProps {
  items: any[];
  fallbackComponent?: ComponentType<{ data: any }>;
}

export function ContentAreaRenderer({ items, fallbackComponent }: ContentAreaRendererProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map((item: any, index: number) => {
        // Try to find the specific component type from the types array
        // The types array typically contains: ["HeroBlock", "_Component", "_Content"]
        // We want the most specific type (not _Component or _Content)
        const types = item._metadata?.types || [];
        const itemType = types.find((t: string) => !t.startsWith('_')) || item._type;

        const key = item._metadata?.key || `item-${index}`;
        const contentLink = {
          key: item._metadata?.key || `item-${index}`,
          locale: item._metadata?.locale || 'en'
        };

        // Get component from registry
        const Component = getBlockComponent(itemType);

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
            <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(item._metadata, null, 2)}</pre>
          </div>
        );
      })}
    </>
  );
}

export default ContentAreaRenderer;
