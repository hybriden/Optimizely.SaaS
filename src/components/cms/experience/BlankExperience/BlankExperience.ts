import { contentType } from '@optimizely/cms-sdk';

/**
 * Blank Experience Content Type Definition
 */
export const BlankExperienceContentType = contentType({
  "key": "BlankExperience",
  "displayName": "Blank Experience",
  "description": "An experience without a predefined layout",
  "baseType": "_experience",
  "properties": {}
});
