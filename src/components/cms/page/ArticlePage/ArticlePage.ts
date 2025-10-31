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
    "Intro": {
      "type": "string",
      "displayName": "Intro"
    },
    "MainBody": {
      "type": "richText",
      "displayName": "Main Body"
    }
  }
});
