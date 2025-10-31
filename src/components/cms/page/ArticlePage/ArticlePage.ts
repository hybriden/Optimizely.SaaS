import { contentType } from '@optimizely/cms-sdk';

/**
 * ArticlePage Content Type Definition
 */
export const ArticlePageContentType = contentType({
  "key": "ArticlePage",
  "displayName": "ArticlePage",
  "description": "",
  "baseType": "_page",
  "properties": {
    "Heading": {
      "type": "string",
      "displayName": "Heading"
    },
    "MainIntro": {
      "type": "string",
      "displayName": "Main Intro"
    },
    "MainBody": {
      "type": "richText",
      "displayName": "Main Body"
    }
  }
});
