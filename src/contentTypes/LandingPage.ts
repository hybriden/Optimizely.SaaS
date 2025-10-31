import { contentType } from '@optimizely/cms-sdk';

/**
 * Landing Page Content Type Definition
 */
export const LandingPageContentType = contentType({
  "key": "LandingPage",
  "displayName": "Landing Page",
  "description": "Used for landingpage content",
  "baseType": "_page",
  "properties": {
    "Title": {
      "type": "string",
      "displayName": "Page Title",
      "group": "Information",
      "sortOrder": 10
    },
    "MetaDescription": {
      "type": "string",
      "displayName": "Meta Description",
      "group": "SEO",
      "sortOrder": 10
    },
    "UrlSegment": {
      "type": "string",
      "displayName": "URL Segment",
      "group": "Information",
      "sortOrder": 20
    },
    "MainBody": {
      "type": "richText",
      "displayName": "Main Body",
      "description": "Main content body of the landing page",
      "group": "Content",
      "sortOrder": 30
    }
  }
});
