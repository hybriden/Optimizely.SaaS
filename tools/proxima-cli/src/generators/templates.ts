import { ContentTypeDefinition, PropertyDefinition } from '../types';

/**
 * Template generator for creating code files
 */
export class Templates {
  /**
   * Generate React component template
   */
  static generateComponent(contentType: ContentTypeDefinition): string {
    const { key, displayName, baseType } = contentType;
    const fragmentName = `${key}Data`;
    const componentName = `${key}Component`;
    const suffix = baseType === 'page' ? 'page' : 'component';

    return `'use client';
// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file

import { type CmsComponent } from "@/lib/optimizely-cms";
import { ${fragmentName}FragmentDoc, type ${fragmentName}Fragment } from "@/gql/graphql";

/**
 * ${displayName}
 *
 */
export const ${componentName} : CmsComponent<${fragmentName}Fragment> = ({ data, children }) => {
    // TODO: Implement your component logic here

    return (
        <div className="cms-${key.toLowerCase()}">
            <h2>${displayName}</h2>
            {/* Add your component markup here */}
            {children}
        </div>
    );
}
${componentName}.displayName = "${displayName} (${baseType}/${key})"
${componentName}.getDataFragment = () => ['${fragmentName}', ${fragmentName}FragmentDoc]

export default ${componentName}
`;
  }

  /**
   * Generate GraphQL fragment template
   */
  static generateGraphQLFragment(contentType: ContentTypeDefinition): string {
    const { key, properties } = contentType;
    const fragmentName = `${key}Data`;

    // Generate field list based on properties
    const fields: string[] = [];

    for (const [propKey, prop] of Object.entries(properties)) {
      fields.push(this.generateGraphQLField(propKey, prop));
    }

    // If no fields, include at minimum the _metadata field for experiences/pages
    // or a comment for components with no properties
    let fieldsList: string;
    if (fields.length > 0) {
      fieldsList = '\n  ' + fields.join('\n  ');
    } else {
      // Always include at least _metadata to avoid empty fragments
      fieldsList = '\n  _metadata { key }';
    }

    return `fragment ${fragmentName} on ${key} {${fieldsList}
}
`;
  }

  /**
   * Generate GraphQL field based on property type
   */
  private static generateGraphQLField(key: string, prop: PropertyDefinition): string {
    const { type, format, items } = prop;

    // Handle different property types
    if (type === 'string' && format === 'html') {
      return `${key} { json, html }`;
    }

    // Handle xhtml type (RichText in GraphQL)
    if (type === 'xhtml') {
      return `${key} { html }`;
    }

    if (type === 'array' && items?.type === 'content') {
      return `${key} {
    __typename
    _metadata {
      key
      displayName
      types
      url {
        default
        base
      }
    }
  }`;
    }

    if (type === 'content') {
      return `${key} { ...IContentData }`;
    }

    // Handle contentReference type
    if (type === 'contentReference') {
      return `${key} { ...ReferenceData }`;
    }

    // Handle array types with string enums
    if (type === 'array' && items?.type === 'string') {
      return key;
    }

    if (type === 'string' || type === 'number' || type === 'boolean') {
      return key;
    }

    // Default fallback - for complex types, use IContentData
    if (type && !['string', 'number', 'boolean'].includes(type)) {
      return `${key} { ...IContentData }`;
    }

    return key;
  }

  /**
   * Generate type definition JSON
   */
  static generateTypeDefinition(contentType: ContentTypeDefinition): string {
    return JSON.stringify(contentType, null, 2) + '\n';
  }

  /**
   * Generate component factory/index file
   */
  static generateFactoryIndex(
    components: Array<{ key: string; displayName: string }>,
    baseType: 'page' | 'component' | 'experience'
  ): string {
    const factoryName = `${baseType.charAt(0).toUpperCase() + baseType.slice(1)}Factory`;

    // Generate imports
    const imports = components
      .map(c => `import ${c.key}Component from "./${c.key}";`)
      .join('\n');

    // Generate factory entries as object
    const entries = components
      .map(c => `    "${c.key}": ${c.key}Component`)
      .join(',\n');

    return `// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
${imports}

// Build dictionary
export const ${factoryName} : ComponentTypeDictionary = {
${entries}
};

// Export dictionary
export default ${factoryName};
`;
  }

  /**
   * Generate main CMS factory index
   */
  static generateMainFactory(): string {
    return `// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@/lib/optimizely-cms";
import NodeComponent from "./node";
import UtilsContentAreaRendererComponent from "./utils/contentAreaRenderer";
import PageFactory from "./page";
import ExperienceFactory from "./experience";
import ComponentFactory from "./component";

// Build dictionary
export const CmsFactory : ComponentTypeDictionary = {
    "Node": NodeComponent,
    "utils/contentAreaRenderer": UtilsContentAreaRendererComponent,
    ...PageFactory,
    ...ExperienceFactory,
    ...ComponentFactory
};

// Export dictionary
export default CmsFactory;
`;
  }

  /**
   * Generate GraphQL content query with all fragments
   */
  static generateContentQuery(
    pageTypes: ContentTypeDefinition[],
    experienceTypes: ContentTypeDefinition[],
    componentTypes: ContentTypeDefinition[]
  ): string {
    // Generate fragment spreads for each page type
    const pageFragments = pageTypes
      .map(ct => `      ... on ${ct.key} {
        ...${ct.key}Data
      }`)
      .join('\n');

    // Generate fragment spreads for each experience type
    const experienceFragments = experienceTypes
      .map(ct => `      ... on ${ct.key} {
        ...${ct.key}Data
      }`)
      .join('\n');

    return `query getContentByPath($path: [String!]!, $locale: [Locales!], $changeset: String = null) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}}, changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      __typename
      _metadata {
        key
        displayName
        types
        url {
          default
          base
        }
      }
      ...IContentData
      ...PageData
${pageFragments}
${experienceFragments}
    }
  }
}
`;
  }
}
