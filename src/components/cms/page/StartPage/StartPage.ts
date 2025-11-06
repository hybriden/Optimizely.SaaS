import { contentType } from '@optimizely/cms-sdk';

/**
 * Startpage Content Type Definition
 */
export const StartPageContentType = contentType({
  "key": "StartPage",
  "displayName": "Startpage",
  "description": "",
  "baseType": "_page",
  "properties": {
    "Heading": {
      "type": "string",
      "displayName": "Heading",
      "required": true,
      "group": "Information",
      "sortOrder": 0,
      "maxLength": 100
    },
    "MainIntro": {
      "type": "string",
      "displayName": "Intro",
      "group": "Information",
      "sortOrder": 0
    },
    "MainContentArea": {
      "type": "array",
      "displayName": "Content",
      "group": "Information",
      "sortOrder": 0,
      "maxItems": 4,
      "items": {
        "type": "content",
        // Note: 'as any' required due to Optimizely SDK alpha type limitations
        // The SDK doesn't know about our custom content types at compile time
        "allowedTypes": [
          "HeroBlock" as any,
          "TextBlock" as any,
          "SliderBlock" as any
        ]
      }
    }
  }
});
