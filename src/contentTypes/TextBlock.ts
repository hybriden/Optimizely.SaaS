import { contentType } from '@optimizely/cms-sdk';

/**
 * Text block Content Type Definition
 */
export const TextBlockContentType = contentType({
  "key": "TextBlock",
  "displayName": "Text block",
  "description": "",
  "baseType": "_component",
  "properties": {
    "Text": {
      "type": "richText",
      "displayName": "Text",
      "group": "Information",
      "sortOrder": 0
    }
  }
});
