import { buildConfig } from '@optimizely/cms-sdk';

export default buildConfig({
  components: [
    './src/contentTypes/**/*.ts',
  ],
});
