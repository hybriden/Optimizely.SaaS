#!/usr/bin/env node

/**
 * Component Generator for Optimizely CMS
 *
 * Generates boilerplate React components and GraphQL fragments from SDK content type definitions.
 * Supports incremental updates - preserves customizations when adding new properties.
 *
 * Usage:
 *   node scripts/generate-component.mjs <ContentTypeName> <page|component|experience>
 *
 * Example:
 *   node scripts/generate-component.mjs BlogPost page
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// ============================================================================
// Argument Parsing
// ============================================================================

const [,, contentTypeName, baseType] = process.argv;

if (!contentTypeName || !baseType) {
  console.error('Usage: node generate-component.mjs <ContentTypeName> <page|component|experience>');
  console.error('Example: node generate-component.mjs BlogPost page');
  process.exit(1);
}

if (!config.VALIDATION.baseTypes.includes(baseType)) {
  console.error(`Base type must be one of: ${config.VALIDATION.baseTypes.join(', ')}`);
  process.exit(1);
}

// ============================================================================
// Path Resolution
// ============================================================================

const baseDir = config.getAbsolutePath(config.PATHS.cms[baseType]);
const contentTypeDir = path.join(baseDir, contentTypeName);
const contentTypeFile = path.join(contentTypeDir, config.NAMING.contentTypeFile(contentTypeName));
const componentFile = path.join(contentTypeDir, config.NAMING.indexFile(contentTypeName));
const graphqlFile = path.join(contentTypeDir, config.NAMING.graphqlFile(contentTypeName));
const factoryFile = path.join(baseDir, config.NAMING.factoryFile());

// ============================================================================
// Content Type Parser
// ============================================================================

function parseContentTypeDefinition(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Content type definition not found: ${filePath}`);
    console.error('Create the content type .ts file first before generating components.');
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract content type key
  const keyMatch = content.match(/"key":\s*"([^"]+)"/);
  const key = keyMatch ? keyMatch[1] : contentTypeName;

  // Extract display name
  const displayNameMatch = content.match(/"displayName":\s*"([^"]+)"/);
  const displayName = displayNameMatch ? displayNameMatch[1] : contentTypeName;

  // Extract base type
  const baseTypeMatch = content.match(/"baseType":\s*"([^"]+)"/);
  const extractedBaseType = baseTypeMatch ? baseTypeMatch[1] : `_${baseType}`;

  // Extract all property names and their types
  const properties = [];
  const propertyTypes = {};
  const propertiesMatch = content.match(/"properties":\s*\{([\s\S]*)\}\s*\}\s*\);/);

  if (propertiesMatch) {
    const propsContent = propertiesMatch[1];
    // Match property blocks: "PropertyName": { ... }
    const propBlockMatches = propsContent.matchAll(/"(\w+)":\s*\{([^}]+)\}/g);

    for (const match of propBlockMatches) {
      const propName = match[1];
      const propConfig = match[2];

      // Extract the type from the property configuration
      const typeMatch = propConfig.match(/"type":\s*"([^"]+)"/);
      const propType = typeMatch ? typeMatch[1] : 'string';

      properties.push(propName);
      propertyTypes[propName] = propType;
    }
  }

  return { key, displayName, baseType: extractedBaseType, properties, propertyTypes };
}

// ============================================================================
// GraphQL Fragment Generator (with incremental update support)
// ============================================================================

/**
 * Maps content type property types to GraphQL field selections
 */
function mapPropertyTypeToGraphQL(prop, propType) {
  const typeLower = propType.toLowerCase();
  const propLower = prop.toLowerCase();

  // Rich text / HTML content
  if (typeLower === 'richtext' || typeLower === 'xhtmlstring') {
    return `  ${prop} {\n    html\n  }`;
  }

  // Images and media
  if (typeLower === 'image' || (typeLower === 'contentreference' && propLower.includes('image'))) {
    return `  ${prop} {\n    url {\n      default\n    }\n  }`;
  }

  // Content areas and content references
  if (typeLower === 'contentarea' || propLower.includes('contentarea') ||
      typeLower === 'contentreference' || propLower.includes('contentlink')) {
    return `  ${prop} {\n    __typename\n    _metadata {\n      key\n      displayName\n    }\n  }`;
  }

  // Arrays (generic collections)
  if (typeLower === 'array') {
    return `  ${prop} {\n    __typename\n    _metadata {\n      key\n      displayName\n    }\n  }`;
  }

  // Simple scalar types (string, number, boolean, date)
  return `  ${prop}`;
}

function generateGraphQLFragment(contentTypeInfo) {
  const { key, properties, propertyTypes } = contentTypeInfo;

  // Check if fragment already exists
  if (fs.existsSync(graphqlFile)) {
    console.log(`📝 GraphQL fragment exists, checking for new properties...`);
    return updateGraphQLFragment(contentTypeInfo);
  }

  // Generate new fragment
  const metadataFields = `  _metadata {
    key
    version
    published
    lastModified
    displayName
    url {
      base
      default
    }
  }`;

  const propertyFields = properties.map(prop => {
    const propType = propertyTypes[prop] || 'string';
    return mapPropertyTypeToGraphQL(prop, propType);
  }).join('\n');

  const fragment = `fragment ${key}Data on ${key} {
${metadataFields}
${propertyFields}
}
`;

  return fragment;
}

function updateGraphQLFragment(contentTypeInfo) {
  const { key, properties, propertyTypes } = contentTypeInfo;
  const existingContent = fs.readFileSync(graphqlFile, 'utf-8');

  // Extract existing properties from fragment
  const lines = existingContent.split('\n');
  const existingProps = new Set();

  for (const line of lines) {
    const match = line.trim().match(/^(\w+)/);
    if (match && match[1] !== 'fragment' && match[1] !== '_metadata' && match[1] !== 'on') {
      existingProps.add(match[1]);
    }
  }

  // Find new properties
  const newProps = properties.filter(prop => !existingProps.has(prop));

  if (newProps.length === 0) {
    console.log(`✅ GraphQL fragment is up-to-date`);
    return existingContent;
  }

  console.log(`➕ Adding ${newProps.length} new properties: ${newProps.join(', ')}`);

  // Add new properties before the closing brace
  const newLines = newProps.map(prop => {
    const propType = propertyTypes[prop] || 'string';
    return mapPropertyTypeToGraphQL(prop, propType);
  });

  // Insert new properties before the closing brace
  const closingBraceIndex = lines.lastIndexOf('}');
  lines.splice(closingBraceIndex, 0, ...newLines);

  return lines.join('\n');
}

// ============================================================================
// Component Generator (with preservation logic)
// ============================================================================

function generateComponent(contentTypeInfo) {
  const { key, displayName, baseType } = contentTypeInfo;

  // Fix: Avoid double suffixes like "ArticlePagePage"
  // Remove existing suffix if present before adding baseType suffix
  let componentName = key;
  const hasSuffix = config.NAMING.suffixes.some(suffix => key.endsWith(suffix));

  if (!hasSuffix) {
    const suffix = config.NAMING.getSuffix(baseType);
    componentName = `${key}${suffix}`;
  }

  // Check if component already exists
  if (fs.existsSync(componentFile)) {
    console.log(`✅ Component exists, preserving customizations`);
    return null; // Don't overwrite existing component
  }

  // Generate new component
  const isPage = baseType === '_page';
  const clientDirective = isPage ? "'use client';\n" : "";

  const component = `${clientDirective}import { type OptimizelyNextPage as CmsComponent } from "@/lib/optimizely-cms";
import { ${key}DataFragmentDoc, type ${key}DataFragment } from "@/gql/graphql";

/**
 * ${displayName} Component
 */
export const ${componentName}: CmsComponent<${key}DataFragment> = ({ data, children }) => {
    const displayName = data._metadata?.displayName || '${displayName}';

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{displayName}</h1>

            {/* TODO: Implement your design here */}
            <div className="prose max-w-none">
                <pre className="bg-gray-100 p-4 rounded">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>

            {children}
        </div>
    );
}

${componentName}.displayName = "${displayName} (${baseType === '_page' ? 'Page' : baseType === '_experience' ? 'Experience' : 'Component'}/${key})";
${componentName}.getDataFragment = () => ['${key}Data', ${key}DataFragmentDoc];

export default ${componentName};
`;

  return component;
}

// ============================================================================
// Factory Registration
// ============================================================================

function updateFactory(contentTypeInfo) {
  const { key } = contentTypeInfo;

  if (!fs.existsSync(factoryFile)) {
    console.error(`Factory file not found: ${factoryFile}`);
    return false;
  }

  const content = fs.readFileSync(factoryFile, 'utf-8');

  // Check if already registered
  if (content.includes(`"${key}"`)) {
    console.log(`✅ Already registered in factory`);
    return false;
  }

  console.log(`➕ Adding to factory registration`);

  const lines = content.split('\n');

  // Find where to insert import (after last import statement)
  let lastImportIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import') && lines[i].includes('Component from')) {
      lastImportIndex = i;
    }
  }

  if (lastImportIndex === -1) {
    console.error('Could not find import section in factory file');
    return false;
  }

  // Insert new import after last import
  const importStatement = `import ${key}Component from "./${key}/${key}Index";`;
  lines.splice(lastImportIndex + 1, 0, importStatement);

  // Find dictionary closing brace and insert new entry before it
  let dictClosingIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '};' && i > lastImportIndex) {
      dictClosingIndex = i;
      break;
    }
  }

  if (dictClosingIndex === -1) {
    console.error('Could not find dictionary closing brace');
    return false;
  }

  // Check if previous line needs a comma
  const prevLine = lines[dictClosingIndex - 1].trim();
  if (prevLine && !prevLine.endsWith(',') && !prevLine.startsWith('//')) {
    lines[dictClosingIndex - 1] += ',';
  }

  // Insert new entry before closing brace
  const newEntry = `    "${key}": ${key}Component`;
  lines.splice(dictClosingIndex, 0, newEntry);

  // Write updated content
  fs.writeFileSync(factoryFile, lines.join('\n'), 'utf-8');
  return true;
}

// ============================================================================
// Main Execution
// ============================================================================

async function main() {
  try {
    console.log(`\n🔧 Generating component for: ${contentTypeName} (${baseType})\n`);

    // Ensure directory structure exists
    if (!fs.existsSync(contentTypeDir)) {
      console.log(`📁 Creating directory: ${path.relative(projectRoot, contentTypeDir)}`);
      fs.mkdirSync(contentTypeDir, { recursive: true });
    }

    // 1. Parse content type definition
    console.log(`📖 Reading content type definition...`);
    const contentTypeInfo = parseContentTypeDefinition(contentTypeFile);
    console.log(`   Found: ${contentTypeInfo.displayName} with ${contentTypeInfo.properties.length} properties`);

    // Track created files for potential rollback
    const createdFiles = [];

    try {
      // 2. Generate/update GraphQL fragment
      console.log(`\n📝 Processing GraphQL fragment...`);
      const graphqlContent = generateGraphQLFragment(contentTypeInfo);
      const graphqlExists = fs.existsSync(graphqlFile);
      fs.writeFileSync(graphqlFile, graphqlContent, 'utf-8');
      if (!graphqlExists) createdFiles.push(graphqlFile);
      console.log(`   Saved: ${path.relative(projectRoot, graphqlFile)}`);

      // 3. Generate React component (only if doesn't exist)
      console.log(`\n⚛️  Processing React component...`);
      const componentContent = generateComponent(contentTypeInfo);
      if (componentContent) {
        fs.writeFileSync(componentFile, componentContent, 'utf-8');
        createdFiles.push(componentFile);
        console.log(`   Created: ${path.relative(projectRoot, componentFile)}`);
      } else {
        console.log(`   Skipped: ${path.relative(projectRoot, componentFile)} (already exists)`);
      }

      // 4. Update factory registration
      console.log(`\n🏭 Processing factory registration...`);
      const factoryUpdated = updateFactory(contentTypeInfo);
      if (factoryUpdated) {
        console.log(`   Updated: ${path.relative(projectRoot, factoryFile)}`);
      }

      // 5. Regenerate factories and registries
      console.log(`\n🔄 Regenerating factories and registries...`);
      const { execSync } = await import('child_process');
      try {
        // Regenerate factories
        execSync('node scripts/generate-factories.mjs', {
          cwd: projectRoot,
          stdio: 'inherit'
        });
        // Regenerate registries
        execSync('node scripts/generate-registry.mjs', {
          cwd: projectRoot,
          stdio: 'inherit'
        });
        execSync('node scripts/generate-client-registry.mjs', {
          cwd: projectRoot,
          stdio: 'inherit'
        });
      } catch (error) {
        console.warn(`   ⚠️  Warning: Could not regenerate all files: ${error.message}`);
      }

      console.log(`\n✨ Done! Next steps:`);
      console.log(`   1. Regenerate types: yarn compile`);
      console.log(`   2. Push to CMS: yarn opti:push`);
      console.log(`   3. Customize: ${path.relative(projectRoot, componentFile)}`);
      console.log(`   4. Test: yarn dev\n`);

    } catch (error) {
      // Rollback: Clean up any files we created
      console.error(`\n❌ Error during generation: ${error.message}`);
      if (createdFiles.length > 0) {
        console.log(`\n🔄 Rolling back created files...`);
        for (const file of createdFiles) {
          if (fs.existsSync(file)) {
            fs.unlinkSync(file);
            console.log(`   Removed: ${path.relative(projectRoot, file)}`);
          }
        }
      }
      throw error;
    }

  } catch (error) {
    console.error(`\n❌ Fatal error: ${error.message}`);
    if (error.stack) {
      console.error(`\nStack trace:\n${error.stack}`);
    }
    process.exit(1);
  }
}

// Run main function
main();
