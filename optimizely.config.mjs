import { buildConfig } from '@optimizely/cms-sdk';

export default buildConfig({
  components: [
    './src/components/cms/page/**/*.opti-type.ts',
    './src/components/cms/component/**/*.opti-type.ts',
    './src/components/cms/experience/**/*.opti-type.ts',
  ],
});
