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
      "type": "richText",
      "displayName": "Main Body Content",
      "group": "Content",
      "sortOrder": 30
    }
  }
});
