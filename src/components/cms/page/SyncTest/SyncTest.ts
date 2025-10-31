import { contentType } from '@optimizely/cms-sdk';

/**
 * SyncTest Content Type Definition
 * Test page type to verify SDK sync functionality
 */
export const SyncTestContentType = contentType({
  "key": "SyncTest",
  "displayName": "Sync Test Page",
  "description": "Test page type for verifying Optimizely SDK synchronization",
  "baseType": "_page",
  "properties": {
    // Property from StartPage
    "Heading": {
      "type": "string",
      "displayName": "Page Heading",
      "required": true,
      "group": "Content",
      "sortOrder": 10,
      "maxLength": 100
    },
    // Property from StartPage
    "MainIntro": {
      "type": "richText",
      "displayName": "Introduction Text",
      "group": "Content",
      "sortOrder": 20
    },
    // Property from NewsPage
    "MainBody": {
      "type": "contentReference",
      "displayName": "Main Body Content",
      "group": "Content",
      "sortOrder": 30
    },
    // Custom property - string
    "Subtitle": {
      "type": "string",
      "displayName": "Subtitle",
      "required": false,
      "group": "Content",
      "sortOrder": 15,
      "maxLength": 200
    },
    // Custom property - boolean
    "IsPublished": {
      "type": "boolean",
      "displayName": "Published Status",
      "group": "Information",
      "sortOrder": 50
    },
    // Custom property - integer (use string as number isn't supported)
    "Priority": {
      "type": "string",
      "displayName": "Priority",
      "group": "Information",
      "sortOrder": 60,
      "maxLength": 10
    },
    // Custom property - date string (use string as date isn't supported)
    "PublishDate": {
      "type": "string",
      "displayName": "Publish Date",
      "group": "Information",
      "sortOrder": 70,
      "maxLength": 50
    },
    // Property from StartPage - content area with allowed types
    "ContentArea": {
      "type": "array",
      "displayName": "Content Blocks",
      "group": "Content",
      "sortOrder": 40,
      "maxItems": 10,
      "items": {
        "type": "content",
        "allowedTypes": [
          "HeroBlock" as any,
          "TextBlock" as any,
          "SliderBlock" as any
        ]
      }
    },
    // Custom property - string array
    "Tags": {
      "type": "array",
      "displayName": "Tags",
      "group": "Information",
      "sortOrder": 80,
      "items": {
        "type": "string"
      }
    },
    // Custom property - URL
    "ExternalLink": {
      "type": "string",
      "displayName": "External Link",
      "group": "Information",
      "sortOrder": 90
    }
  }
});
