import { contentType } from '@optimizely/cms-sdk';

/**
 * Slider block Content Type Definition
 */
export const SliderBlockContentType = contentType({
  "key": "SliderBlock",
  "displayName": "Slider block",
  "description": "",
  "baseType": "_component",
  "properties": {
    "SliderContent": {
      "type": "array",
      "displayName": "SliderContent",
      "group": "Information",
      "sortOrder": 0,
      "items": {
        "type": "content",
        "allowedTypes": [
          "ImageMedia"
        ]
      }
    }
  }
});
