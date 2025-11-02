#!/usr/bin/env node

/**
 * Auto-generate both registry.ts and client-registry.ts
 *
 * This script generates:
 * 1. registry.ts - Server-safe registry that imports from factories
 * 2. client-registry.ts - Client-safe registry for client components
 *
 * Both registries are kept in sync automatically.
 *
 * Usage:
 *   node scripts/generate-registry.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

/**
 * Discover all page teasers
 */
function discoverTeasers() {
  const pageDir = config.getAbsolutePath(config.PATHS.cms.page);

  if (!fs.existsSync(pageDir)) {
    return [];
  }

  const folders = fs.readdirSync(pageDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const teasers = [];

  for (const folderName of folders) {
    const teaserFile = path.join(pageDir, folderName, config.NAMING.teaserFile(folderName));

    if (fs.existsSync(teaserFile)) {
      teasers.push({
        name: folderName,
        importPath: `./page/${folderName}/${folderName}Teaser`,
        varName: config.NAMING.teaserVar(folderName)
      });
    }
  }

  return teasers;
}

/**
 * Generate registry.ts (server-side registry)
 */
function generateServerRegistry(teasers) {
  const teaserImports = teasers
    .map(t => `import ${t.varName} from '${t.importPath}';`)
    .join('\n');

  const teaserEntries = teasers
    .map(t => `  '${t.name}': ${t.varName},`)
    .join('\n');

  return `${config.TEMPLATES.autoGenWarning}

import { ComponentType } from 'react';
import { type ComponentTypeDictionary } from '@/lib/optimizely-cms';

// Import factories (auto-generated)
import PageFactory from './page';
import ComponentFactory from './component';
import ExperienceFactory from './experience';

// Import teasers (auto-generated)
${teaserImports}

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
${teaserEntries}
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

// Export the full registry for advanced use cases
export const CmsComponentRegistry = COMPONENT_REGISTRY;
export const CmsTeaserRegistry = TEASER_REGISTRY;
`;
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('📋 Generating registry files...\n');

    // Discover teasers
    const teasers = discoverTeasers();
    console.log(`✅ Found ${teasers.length} teaser(s)`);
    teasers.forEach(t => console.log(`   - ${t.name}`));

    // Generate server-side registry
    console.log(`\n📝 Generating src/components/cms/registry.ts...`);
    const serverRegistry = generateServerRegistry(teasers);
    const serverRegistryPath = path.join(projectRoot, 'src/components/cms/registry.ts');
    fs.writeFileSync(serverRegistryPath, serverRegistry, 'utf8');
    console.log(`   ✅ Generated server registry`);

    // Note: client-registry.ts is generated by generate-client-registry.mjs
    console.log(`\n✨ Registry generation complete!`);
    console.log(`   Server registry: src/components/cms/registry.ts`);
    console.log(`   Client registry: generated by generate-client-registry.mjs\n`);

  } catch (error) {
    console.error(`\n❌ Error generating registries: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
