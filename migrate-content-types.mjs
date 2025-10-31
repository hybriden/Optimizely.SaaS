import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Map JSON types to SDK types
const typeMap = {
  'string': (prop) => {
    if (prop.format === 'html') return 'richText';
    return 'string';
  },
  'xhtml': () => 'richText',
  'contentReference': () => 'contentReference',
  'ContentReference': () => 'contentReference',
  'ContentArea': () => 'array',
  'array': () => 'array',
  'boolean': () => 'boolean',
  'integer': () => 'integer',
  'float': () => 'float',
};

// Map baseType
const baseTypeMap = {
  'page': '_page',
  'component': '_component',
  'block': '_component',
  'experience': '_experience',
};

function convertProperty(propName, prop) {
  const typeConverter = typeMap[prop.type] || (() => prop.type);
  const sdkType = typeConverter(prop);

  const propDef = {
    type: sdkType,
    displayName: prop.displayName || propName,
  };

  if (prop.description) propDef.description = prop.description;
  if (prop.required) propDef.required = true;
  if (prop.group) propDef.group = prop.group;
  if (prop.sortOrder !== undefined) propDef.sortOrder = prop.sortOrder;
  if (prop.maxLength) propDef.maxLength = prop.maxLength;
  if (prop.maxItems) propDef.maxItems = prop.maxItems;

  // Handle array items
  if (prop.items) {
    propDef.items = {};
    if (prop.items.type === 'content' || prop.items.type === 'ContentReference') {
      propDef.items.type = 'content';
    } else if (prop.items.type === 'string' && prop.items.enum) {
      propDef.items.type = 'string';
      if (prop.items.enum.values) {
        // Keep the enum structure with displayName and value
        propDef.items.enum = prop.items.enum.values;
      }
    } else {
      propDef.items.type = prop.items.type;
    }

    if (prop.items.allowedTypes && prop.items.allowedTypes.length > 0) {
      propDef.items.allowedTypes = prop.items.allowedTypes;
    }
  }

  // Handle contentReference allowedTypes
  if (prop.allowedTypes && prop.allowedTypes.length > 0) {
    propDef.allowedTypes = prop.allowedTypes;
  }

  return propDef;
}

function generateTypeScriptFile(contentType) {
  const sdkBaseType = baseTypeMap[contentType.baseType] || contentType.baseType;

  const properties = {};
  if (contentType.properties) {
    for (const [propName, prop] of Object.entries(contentType.properties)) {
      properties[propName] = convertProperty(propName, prop);
    }
  }

  const typeDef = {
    key: contentType.key,
    displayName: contentType.displayName || contentType.key,
    description: contentType.description || '',
    baseType: sdkBaseType,
  };

  if (Object.keys(properties).length > 0) {
    typeDef.properties = properties;
  }

  const code = `import { contentType } from '@optimizely/cms-sdk';

/**
 * ${contentType.displayName || contentType.key} Content Type Definition
 */
export const ${contentType.key}ContentType = contentType(${JSON.stringify(typeDef, null, 2)});
`;

  return code;
}

async function migrateContentTypes() {
  const componentsDir = path.join(__dirname, 'src/components/cms');
  const outputDir = path.join(__dirname, 'src/contentTypes');

  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });

  // Find all .opti-type.json files
  async function findTypeFiles(dir) {
    const files = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...await findTypeFiles(fullPath));
      } else if (entry.name.endsWith('.opti-type.json')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  const typeFiles = await findTypeFiles(componentsDir);
  console.log(`Found ${typeFiles.length} content type definitions\n`);

  for (const typeFile of typeFiles) {
    const json = await fs.readFile(typeFile, 'utf-8');
    const contentType = JSON.parse(json);

    const tsCode = generateTypeScriptFile(contentType);
    const outputFile = path.join(outputDir, `${contentType.key}.ts`);

    await fs.writeFile(outputFile, tsCode);
    console.log(`✓ Migrated ${contentType.key} to ${path.relative(__dirname, outputFile)}`);
  }

  console.log(`\n✅ Successfully migrated ${typeFiles.length} content types!`);
}

migrateContentTypes().catch(console.error);
