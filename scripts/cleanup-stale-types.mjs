#!/usr/bin/env node

/**
 * Cleanup Stale Content Types
 *
 * Detects and removes references to deleted content types from:
 * - Factory files (page, component, experience index.ts)
 * - GraphQL queries (content.graphql)
 *
 * Usage:
 *   node scripts/cleanup-stale-types.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// ============================================================================
// Find all content type TypeScript files
// ============================================================================

function findAllContentTypes() {
  const contentTypes = {
    page: [],
    component: [],
    experience: []
  };

  const baseDirs = {
    page: path.join(projectRoot, 'src', 'components', 'cms', 'page'),
    component: path.join(projectRoot, 'src', 'components', 'cms', 'component'),
    experience: path.join(projectRoot, 'src', 'components', 'cms', 'experience')
  };

  for (const [type, baseDir] of Object.entries(baseDirs)) {
    if (!fs.existsSync(baseDir)) continue;

    const folders = fs.readdirSync(baseDir);
    for (const folder of folders) {
      const folderPath = path.join(baseDir, folder);
      if (!fs.statSync(folderPath).isDirectory()) continue;

      // Check if TypeScript content type definition exists
      const tsFile = path.join(folderPath, `${folder}.ts`);
      if (fs.existsSync(tsFile)) {
        contentTypes[type].push(folder);
      }
    }
  }

  return contentTypes;
}

// ============================================================================
// Clean Factory Files
// ============================================================================

function cleanFactoryFile(factoryPath, validTypes) {
  if (!fs.existsSync(factoryPath)) return;

  console.log(`\n🔍 Checking: ${path.relative(projectRoot, factoryPath)}`);

  const content = fs.readFileSync(factoryPath, 'utf-8');
  const lines = content.split('\n');

  const removedImports = [];
  const removedEntries = [];
  let modified = false;

  // Filter out stale imports
  const filteredLines = lines.filter(line => {
    const importMatch = line.match(/^import (\w+)Component from "\.\/(\w+)\/\w+Index"/);
    if (importMatch) {
      const [, varName, typeName] = importMatch;
      if (!validTypes.includes(typeName)) {
        removedImports.push(typeName);
        modified = true;
        return false;
      }
    }
    return true;
  });

  // Filter out stale factory entries
  let updatedContent = filteredLines.join('\n');
  const factoryMatch = updatedContent.match(/export const \w+Factory[^{]+\{([^}]+)\}/s);

  if (factoryMatch) {
    const factoryContent = factoryMatch[1];
    const entries = factoryContent.split('\n');

    const filteredEntries = entries.filter(entry => {
      // Skip empty lines
      if (!entry.trim()) return true;

      const entryMatch = entry.match(/"(\w+)":\s*\w+Component/);
      if (entryMatch) {
        const typeName = entryMatch[1];
        if (!validTypes.includes(typeName)) {
          removedEntries.push(typeName);
          modified = true;
          return false;
        }
      }
      return true;
    });

    if (modified) {
      // Rebuild factory content - preserve indentation and formatting
      const newFactoryContent = filteredEntries.join('\n');
      updatedContent = updatedContent.replace(factoryContent, newFactoryContent);
    }
  }

  if (modified) {
    fs.writeFileSync(factoryPath, updatedContent, 'utf-8');
    console.log(`  ✅ Cleaned up ${removedImports.length + removedEntries.length} stale references`);
    if (removedImports.length > 0) {
      console.log(`     Removed imports: ${removedImports.join(', ')}`);
    }
    if (removedEntries.length > 0) {
      console.log(`     Removed entries: ${removedEntries.join(', ')}`);
    }
  } else {
    console.log(`  ✅ No stale references found`);
  }
}

// ============================================================================
// Clean GraphQL Query File
// ============================================================================

function cleanGraphQLQueryFile(queryPath, validTypes) {
  if (!fs.existsSync(queryPath)) {
    console.log(`\n⚠️  GraphQL query file not found: ${path.relative(projectRoot, queryPath)}`);
    return;
  }

  console.log(`\n🔍 Checking: ${path.relative(projectRoot, queryPath)}`);

  const content = fs.readFileSync(queryPath, 'utf-8');
  const lines = content.split('\n');

  const removedFragments = [];
  let modified = false;

  // Filter out stale fragment spreads (... on TypeName)
  const filteredLines = lines.filter(line => {
    const fragmentMatch = line.match(/^\s*\.\.\.\s*on\s+(\w+)\s*\{/);
    if (fragmentMatch) {
      const typeName = fragmentMatch[1];
      if (!validTypes.includes(typeName)) {
        removedFragments.push(typeName);
        modified = true;
        // Also remove the closing brace on the next line
        return false;
      }
    }

    // Also check for fragment inclusion like ...StartPageData
    const fragmentIncludeMatch = line.match(/^\s*\.\.\.(\w+)Data$/);
    if (fragmentIncludeMatch) {
      const typeName = fragmentIncludeMatch[1];
      if (!validTypes.includes(typeName)) {
        removedFragments.push(typeName);
        modified = true;
        return false;
      }
    }

    return true;
  });

  // Remove orphaned closing braces after "... on Type {"
  let cleanedContent = filteredLines.join('\n');
  cleanedContent = cleanedContent.replace(/\n\s*\.\.\.\w+Data\s*\n\s*\}/g, ''); // Remove fragment + closing brace pattern

  if (modified) {
    fs.writeFileSync(queryPath, cleanedContent, 'utf-8');
    console.log(`  ✅ Cleaned up ${removedFragments.length} stale fragment references`);
    if (removedFragments.length > 0) {
      console.log(`     Removed: ${removedFragments.join(', ')}`);
    }
  } else {
    console.log(`  ✅ No stale references found`);
  }
}

// ============================================================================
// Main Execution
// ============================================================================

console.log('🧹 Starting cleanup of stale content type references...\n');

/**
 * Main execution
 */
async function main() {
  try {
    // 1. Find all valid content types
    const contentTypes = findAllContentTypes();
    const allTypes = [...contentTypes.page, ...contentTypes.component, ...contentTypes.experience];

    console.log('📋 Found valid content types:');
    console.log(`   Pages: ${contentTypes.page.join(', ') || '(none)'}`);
    console.log(`   Components: ${contentTypes.component.join(', ') || '(none)'}`);
    console.log(`   Experiences: ${contentTypes.experience.join(', ') || '(none)'}`);

    // 2. Clean factory files
    cleanFactoryFile(
      path.join(projectRoot, 'src', 'components', 'cms', 'page', 'index.ts'),
      contentTypes.page
    );

    cleanFactoryFile(
      path.join(projectRoot, 'src', 'components', 'cms', 'component', 'index.ts'),
      contentTypes.component
    );

    cleanFactoryFile(
      path.join(projectRoot, 'src', 'components', 'cms', 'experience', 'index.ts'),
      contentTypes.experience
    );

    // 3. Clean GraphQL query file
    cleanGraphQLQueryFile(
      path.join(projectRoot, 'src', 'gql', 'queries', 'content.graphql'),
      allTypes
    );

    console.log('\n✨ Cleanup complete!\n');
    console.log('Next steps:');
    console.log('  1. Review changes: git diff');
    console.log('  2. Test compilation: yarn compile');
    console.log('  3. Test build: yarn build\n');

  } catch (error) {
    console.error(`\n❌ Error during cleanup: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
