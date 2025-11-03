#!/usr/bin/env node

/**
 * Auto-generate src/gql/fragments/shared-fragments.ts
 *
 * This script generates a consolidated fragment file by reading
 * .graphql files from component directories. This eliminates
 * hardcoded fragment definitions.
 *
 * Run: node scripts/generate-shared-fragments.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as config from './config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Discover components with GraphQL fragments
 */
function discoverFragments(type) {
  const fragments = [];
  const baseDir = config.getAbsolutePath(config.PATHS.cms[type]);

  if (!fs.existsSync(baseDir)) {
    console.log(`⚠️  Directory not found: ${baseDir}`);
    return fragments;
  }

  const folders = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const folderName of folders) {
    const graphqlFile = path.join(baseDir, folderName, config.NAMING.graphqlFile(folderName));

    if (fs.existsSync(graphqlFile)) {
      const content = fs.readFileSync(graphqlFile, 'utf-8').trim();
      fragments.push({
        name: folderName,
        type: type,
        content: content,
      });
    }
  }

  return fragments;
}

/**
 * Inject component fragments into ContentArea fields
 * Detects patterns like "MainContentArea {" or "SliderContent {" and adds inline fragments
 */
function injectComponentFragments(fragmentContent, components) {
  // Match ContentArea field patterns with proper brace matching
  // Look for field names ending with ContentArea or Content
  const lines = fragmentContent.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Check if this line starts a ContentArea field
    const match = trimmedLine.match(/^(\w+ContentArea|\w+Content)\s*\{/);
    if (match) {
      const fieldName = match[1];
      result.push(line);
      i++;

      // Collect the field content until we find the closing brace
      const fieldLines = [];
      let braceCount = 1;
      let hasInlineFragments = false;

      while (i < lines.length && braceCount > 0) {
        const fieldLine = lines[i];
        const fieldTrimmed = fieldLine.trim();

        if (fieldTrimmed.includes('... on')) {
          hasInlineFragments = true;
        }

        if (fieldTrimmed.includes('{')) {
          braceCount++;
        }
        if (fieldTrimmed.includes('}')) {
          braceCount--;
          if (braceCount === 0) {
            // This is the closing brace for the ContentArea field
            if (!hasInlineFragments && components.length > 0) {
              // Add all field lines collected so far
              fieldLines.forEach(fl => result.push(fl));

              // Inject component fragments before the closing brace
              const indent = fieldLine.match(/^\s*/)[0];
              components.forEach(c => {
                result.push(`${indent}  ... on ${c.name} {`);
                result.push(`${indent}    ...${c.name}Data`);
                result.push(`${indent}  }`);
              });
            } else {
              // Already has fragments or no components, keep as is
              fieldLines.forEach(fl => result.push(fl));
            }
            // Add the closing brace
            result.push(fieldLine);
            i++;
            break;
          }
        }

        fieldLines.push(fieldLine);
        i++;
      }
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join('\n');
}

/**
 * Generate the shared-fragments.ts file
 */
function generateSharedFragments() {
  console.log('📝 Generating src/gql/fragments/shared-fragments.ts...\n');

  // Discover all fragments
  const components = discoverFragments('component');
  const pages = discoverFragments('page');
  const experiences = discoverFragments('experience');

  console.log(`✅ Found ${components.length} component fragment(s)`);
  components.forEach(c => console.log(`   - ${c.name}`));

  console.log(`✅ Found ${pages.length} page fragment(s)`);
  pages.forEach(p => console.log(`   - ${p.name}`));

  console.log(`✅ Found ${experiences.length} experience fragment(s)`);
  experiences.forEach(e => console.log(`   - ${e.name}`));

  console.log();

  // Generate fragment sections
  const generateFragmentSection = (fragments, injectComponents = false) => {
    return fragments.map(f => {
      let content = f.content;
      // Inject component fragments into ContentArea fields for pages and experiences
      if (injectComponents && components.length > 0) {
        content = injectComponentFragments(content, components);
      }
      return `  ${content}`;
    }).join('\n\n');
  };

  const pageFragmentsContent = generateFragmentSection(pages, true);
  const experienceFragmentsContent = generateFragmentSection(experiences, true);
  const componentFragmentsContent = generateFragmentSection(components, false);

  // Generate file content
  const content = `/**
 * ⚠️  AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * This file is automatically generated by scripts/generate-shared-fragments.mjs
 * Run 'yarn generate:fragments' to regenerate this file.
 *
 * Shared GraphQL Fragments
 *
 * These fragments are extracted from individual component .graphql files
 * and combined here for use in queries. This eliminates duplication and
 * ensures fragments stay in sync with component definitions.
 */

import { gql } from 'graphql-request';

/**
 * Core metadata fragments
 * These are hand-maintained as they define base interfaces
 */
export const CORE_FRAGMENTS = gql\`
  fragment IContentData on _IContent {
    _metadata {
      ...IContentInfo
    }
    _type: __typename
  }

  fragment IContentInfo on IContentMetadata {
    key
    locale
    types
    displayName
    version
    url {
      ...LinkData
    }
  }

  fragment LinkData on ContentUrl {
    base
    default
  }

  fragment PageData on _IContent {
    ...IContentData
  }
\`;

/**
 * Page type fragments (${pages.length} page(s))
 * Auto-generated from component .graphql files
 */
export const PAGE_FRAGMENTS = gql\`
${pageFragmentsContent}
\`;

/**
 * Experience type fragments (${experiences.length} experience(s))
 * Auto-generated from component .graphql files
 */
export const EXPERIENCE_FRAGMENTS = gql\`
${experienceFragmentsContent}
\`;

/**
 * Component/Block type fragments (${components.length} component(s))
 * Auto-generated from component .graphql files
 */
export const COMPONENT_FRAGMENTS = gql\`
${componentFragmentsContent}
\`;

/**
 * All fragments combined for easier import
 * Note: Only includes fragments for top-level queryable types (pages, experiences)
 * Component fragments are available separately for use in ContentArea queries
 */
export const ALL_FRAGMENTS = gql\`
  \${CORE_FRAGMENTS}
  \${PAGE_FRAGMENTS}
  \${EXPERIENCE_FRAGMENTS}
\`;

/**
 * Component fragments for use in ContentArea rendering
 * These are blocks/elements used within pages, not top-level content types
 */
export const COMPONENT_FRAGMENT_DEFINITIONS = COMPONENT_FRAGMENTS;
`;

  // Write the file
  const outputPath = path.join(config.PATHS.projectRoot, 'src', 'gql', 'fragments', 'shared-fragments.ts');
  fs.writeFileSync(outputPath, content, 'utf-8');

  console.log(`✅ Generated: ${outputPath}`);
  console.log(`\n✨ Successfully generated shared-fragments.ts with ${pages.length + experiences.length + components.length} fragment(s)!`);
}

// Main execution
try {
  generateSharedFragments();
} catch (error) {
  console.error(`\n❌ Error generating shared-fragments.ts: ${error.message}`);
  console.error(error.stack);
  process.exit(1);
}
