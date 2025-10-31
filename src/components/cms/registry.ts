/**
 * Central CMS Component Registry
 *
 * This file provides a generic, centralized registry for all CMS components,
 * pages, and teasers. It eliminates hardcoded dependencies and provides a
 * single source of truth for component resolution.
 *
 * Usage:
 * - Components are automatically registered from their factory files
 * - Teasers are registered separately for page types
 * - The registry provides type-safe lookup functions
 */

import { ComponentType } from 'react';
import { type ComponentTypeDictionary } from '@/lib/optimizely-cms';

// Import existing factories
import PageFactory from './page';
import ComponentFactory from './component';
import ExperienceFactory from './experience';

// Import teasers
import LandingPageTeaser from './page/LandingPage/LandingPageTeaser';
import ArticlePageTeaser from './page/ArticlePage/ArticlePageTeaser';
import NewsPageTeaser from './page/NewsPage/NewsPageTeaser';

/**
 * Component registry types
 */
type CmsComponent = ComponentType<any>;

interface ComponentRegistry {
  [key: string]: CmsComponent;
}

/**
 * Central component registry
 * Combines all factories into a single registry
 */
const COMPONENT_REGISTRY: ComponentRegistry = {
  ...PageFactory,
  ...ComponentFactory,
  ...ExperienceFactory,
};

/**
 * Teaser registry for page types
 * When pages are added to content areas, they render as teasers/cards
 */
const TEASER_REGISTRY: ComponentRegistry = {
  'LandingPage': LandingPageTeaser,
  'ArticlePage': ArticlePageTeaser,
  'NewsPage': NewsPageTeaser,
};

/**
 * Register a new component dynamically
 *
 * @param typeName - The content type name (e.g., "HeroBlock", "NewsPage")
 * @param component - The React component to register
 */
export function registerComponent(typeName: string, component: CmsComponent): void {
  COMPONENT_REGISTRY[typeName] = component;
}

/**
 * Register a teaser component for a page type
 *
 * @param typeName - The page type name (e.g., "NewsPage")
 * @param component - The teaser component to register
 */
export function registerTeaser(typeName: string, component: CmsComponent): void {
  TEASER_REGISTRY[typeName] = component;
}

/**
 * Get a component for a specific content type
 *
 * @param typeName - The content type name
 * @returns The component or null if not found
 */
export function getComponent(typeName: string): CmsComponent | null {
  return COMPONENT_REGISTRY[typeName] || null;
}

/**
 * Get a teaser component for a page type
 *
 * @param typeName - The page type name
 * @returns The teaser component or null if not found
 */
export function getTeaser(typeName: string): CmsComponent | null {
  return TEASER_REGISTRY[typeName] || null;
}

/**
 * Check if a component is registered
 *
 * @param typeName - The content type name
 * @returns True if the component is registered
 */
export function hasComponent(typeName: string): boolean {
  return typeName in COMPONENT_REGISTRY;
}

/**
 * Check if a teaser is registered for a page type
 *
 * @param typeName - The page type name
 * @returns True if the teaser is registered
 */
export function hasTeaser(typeName: string): boolean {
  return typeName in TEASER_REGISTRY;
}

/**
 * Get all registered component type names
 *
 * @returns Array of registered type names
 */
export function getRegisteredTypes(): string[] {
  return Object.keys(COMPONENT_REGISTRY);
}

/**
 * Get all registered teaser type names
 *
 * @returns Array of page types with teasers
 */
export function getRegisteredTeasers(): string[] {
  return Object.keys(TEASER_REGISTRY);
}

/**
 * Export the complete component dictionary for backward compatibility
 * with the existing CmsFactory pattern
 */
export const CmsComponentRegistry: ComponentTypeDictionary = COMPONENT_REGISTRY as ComponentTypeDictionary;

/**
 * Export as default for easy importing
 */
export default {
  registerComponent,
  registerTeaser,
  getComponent,
  getTeaser,
  hasComponent,
  hasTeaser,
  getRegisteredTypes,
  getRegisteredTeasers,
  CmsComponentRegistry,
};
