/**
 * Client-Side CMS Component Registry
 *
 * This is a client-safe registry that can be used in client components
 * like ContentAreaRenderer. It only imports components and pages, not
 * experiences which may have server-only dependencies.
 */

'use client';

import { ComponentType } from 'react';

// Import components
import TextBlockComponent from './component/TextBlock';
import SliderBlockComponent from './component/SliderBlock';
import HeroBlockComponent from './component/HeroBlock';
import ContentAreaComponent from './component/ContentArea';
import BlankSectionComponent from './component/BlankSection';
import ImageMediaComponent from './component/ImageMedia';
import VideoMediaComponent from './component/VideoMedia';
import GenericMediaComponent from './component/GenericMedia';
import SysContentFolderComponent from './component/SysContentFolder';

// Import pages
import StartPageComponent from './page/StartPage';
import LandingPageComponent from './page/LandingPage';
import ArticlePageComponent from './page/ArticlePage';
import NewsPageComponent from './page/NewsPage';
import MyTestComponent from './page/MyTest';

// Import teasers
import LandingPageTeaser from './page/LandingPage/Teaser';
import ArticlePageTeaser from './page/ArticlePage/Teaser';
import NewsPageTeaser from './page/NewsPage/Teaser';

/**
 * Component registry types
 */
type CmsComponent = ComponentType<any>;

interface ComponentRegistry {
  [key: string]: CmsComponent;
}

/**
 * Component registry for blocks and pages
 */
const COMPONENT_REGISTRY: ComponentRegistry = {
  // Components/Blocks
  'TextBlock': TextBlockComponent,
  'SliderBlock': SliderBlockComponent,
  'HeroBlock': HeroBlockComponent,
  'ContentArea': ContentAreaComponent,
  'BlankSection': BlankSectionComponent,
  'ImageMedia': ImageMediaComponent,
  'VideoMedia': VideoMediaComponent,
  'GenericMedia': GenericMediaComponent,
  'SysContentFolder': SysContentFolderComponent,

  // Pages
  'StartPage': StartPageComponent,
  'LandingPage': LandingPageComponent,
  'ArticlePage': ArticlePageComponent,
  'NewsPage': NewsPageComponent,
  'MyTest': MyTestComponent,
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
