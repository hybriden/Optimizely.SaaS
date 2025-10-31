import { contentType } from '@optimizely/cms-sdk';

/**
 * NewsPage Content Type Definition
 */
export const NewsPageContentType = contentType({
  "key": "NewsPage",
  "displayName": "NewsPage",
  "description": "",
  "baseType": "_page",
  "properties": {
    "MainBody": {
      "type": "contentReference",
      "displayName": "MainBody"
    },
    "MainContentArea": {
      "type": "array",
      "displayName": "MainContentArea",
      "items": {
        "type": "content"
      }
    }
  }
});
