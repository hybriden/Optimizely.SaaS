import { contentType } from '@optimizely/cms-sdk';

/**
 * Hero Content Type Definition
 */
export const HeroBlockContentType = contentType({
  "key": "HeroBlock",
  "displayName": "Hero",
  "description": "",
  "baseType": "_component",
  "properties": {
    "Heading": {
      "type": "string",
      "displayName": "Heading",
      "required": true,
      "group": "Information",
      "sortOrder": 0,
      "maxLength": 100
    },
    "Image": {
      "type": "contentReference",
      "displayName": "Image",
      "group": "Information",
      "sortOrder": 0
    },
    "MainIntro": {
      "type": "string",
      "displayName": "MainIntro",
      "group": "Information",
      "sortOrder": 0
    },
    "ContentLink": {
      "type": "contentReference",
      "displayName": "ContentLink",
      "group": "Information",
      "sortOrder": 0
    },
    "Width": {
      "type": "string",
      "displayName": "Width",
      "group": "Information",
      "sortOrder": 10,
      "enum": [
        {
          "displayName": "Full Width",
          "value": "Full"
        },
        {
          "displayName": "Regular Width",
          "value": "Regular"
        }
      ]
    }
  }
});
