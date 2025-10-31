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

if (!['page', 'component', 'experience'].includes(baseType)) {
  console.error('Base type must be one of: page, component, experience');
  process.exit(1);
}

// ============================================================================
// Path Resolution
// ============================================================================

const baseDir = path.join(projectRoot, 'src', 'components', 'cms', baseType);
const contentTypeDir = path.join(baseDir, contentTypeName);
const contentTypeFile = path.join(contentTypeDir, `${contentTypeName}.ts`);
const componentFile = path.join(contentTypeDir, `${contentTypeName}Index.tsx`);
const graphqlFile = path.join(contentTypeDir, `${contentTypeName}.graphql`);
const factoryFile = path.join(baseDir, 'index.ts');

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

  // Extract all property names using a more robust parser
  const properties = [];
  const propertiesMatch = content.match(/"properties":\s*\{([\s\S]*)\}\s*\}\s*\);/);

  if (propertiesMatch) {
    const propsContent = propertiesMatch[1];
    // Match top-level property names (before their opening brace)
    // Look for pattern: "PropertyName": { at the beginning of a line (after whitespace)
    // Skip "items", "allowedTypes", "type" which are configuration properties, not data properties
    const propMatches = propsContent.matchAll(/^\s*"(\w+)":\s*\{/gm);
    for (const match of propMatches) {
      const propName = match[1];
      // Skip configuration properties
      if (!['items', 'allowedTypes', 'type'].includes(propName)) {
        properties.push(propName);
      }
    }
  }

  return { key, displayName, baseType: extractedBaseType, properties };
}

// ============================================================================
// GraphQL Fragment Generator (with incremental update support)
// ============================================================================

function generateGraphQLFragment(contentTypeInfo) {
  const { key, properties } = contentTypeInfo;

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
    // Handle complex types that need subfields
    if (prop.toLowerCase().includes('intro') || prop.toLowerCase().includes('text') || prop.toLowerCase().includes('body')) {
      return `  ${prop} {\n    html\n  }`;
    }
    if (prop.toLowerCase().includes('contentarea') || prop.toLowerCase().includes('content')) {
      return `  ${prop} {\n    __typename\n    _metadata {\n      key\n      displayName\n    }\n  }`;
    }
    return `  ${prop}`;
  }).join('\n');

  const fragment = `fragment ${key}Data on ${key} {
${metadataFields}
${propertyFields}
}
`;

  return fragment;
}

function updateGraphQLFragment(contentTypeInfo) {
  const { key, properties } = contentTypeInfo;
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
    // Handle complex types
    if (prop.toLowerCase().includes('intro') || prop.toLowerCase().includes('text') || prop.toLowerCase().includes('body')) {
      return `  ${prop} {\n    html\n  }`;
    }
    if (prop.toLowerCase().includes('contentarea') || prop.toLowerCase().includes('content')) {
      return `  ${prop} {\n    __typename\n    _metadata {\n      key\n      displayName\n    }\n  }`;
    }
    return `  ${prop}`;
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
  const componentName = `${key}${baseType === '_page' ? 'Page' : baseType === '_experience' ? 'Experience' : 'Component'}`;

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

  // Add import
  const importStatement = `import ${key}Component from "./${key}/${key}Index";`;
  const importSectionEnd = content.indexOf('\n// Build dictionary');
  const beforeImports = content.substring(0, importSectionEnd);
  const afterImports = content.substring(importSectionEnd);

  // Add to dictionary
  const dictionaryMatch = afterImports.match(/export const \w+Factory[^{]+\{([^}]+)\}/s);
  if (!dictionaryMatch) {
    console.error('Could not parse factory dictionary');
    return false;
  }

  const dictionaryContent = dictionaryMatch[1];
  const lastEntry = dictionaryContent.trim().split('\n').pop();
  const needsComma = !lastEntry.trim().endsWith(',');

  const newEntry = `    "${key}": ${key}Component`;
  const updatedDictionary = dictionaryContent.trimEnd() + (needsComma ? ',' : '') + '\n' + newEntry;

  const updatedContent = beforeImports + '\n' + importStatement + afterImports.replace(
    dictionaryMatch[0],
    dictionaryMatch[0].replace(dictionaryContent, updatedDictionary)
  );

  fs.writeFileSync(factoryFile, updatedContent, 'utf-8');
  return true;
}

// ============================================================================
// Main Execution
// ============================================================================

console.log(`\n🔧 Generating component for: ${contentTypeName} (${baseType})\n`);

// 1. Parse content type definition
console.log(`📖 Reading content type definition...`);
const contentTypeInfo = parseContentTypeDefinition(contentTypeFile);
console.log(`   Found: ${contentTypeInfo.displayName} with ${contentTypeInfo.properties.length} properties`);

// 2. Generate/update GraphQL fragment
console.log(`\n📝 Processing GraphQL fragment...`);
const graphqlContent = generateGraphQLFragment(contentTypeInfo);
fs.writeFileSync(graphqlFile, graphqlContent, 'utf-8');
console.log(`   Saved: ${path.relative(projectRoot, graphqlFile)}`);

// 3. Generate React component (only if doesn't exist)
console.log(`\n⚛️  Processing React component...`);
const componentContent = generateComponent(contentTypeInfo);
if (componentContent) {
  fs.writeFileSync(componentFile, componentContent, 'utf-8');
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

console.log(`\n✨ Done! Next steps:`);
console.log(`   1. Run: yarn compile`);
console.log(`   2. Customize: ${path.relative(projectRoot, componentFile)}`);
console.log(`   3. Test: yarn dev\n`);
