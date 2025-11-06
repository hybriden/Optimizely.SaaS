import { contentType } from '@optimizely/cms-sdk';

/**
 * ContentArea Content Type Definition
 */
export const ContentAreaContentType = contentType({
  "key": "ContentArea",
  "displayName": "Content Area",
  "description": "A reusable component to define a content area",
  "baseType": "_component",
  "properties": {
    "MainContentArea": {
      "type": "array",
      "displayName": "Content",
      "group": "Information",
      "sortOrder": 0,
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
