import { buildConfig } from '@optimizely/cms-sdk';

export default buildConfig({
  components: [
    // Content type definitions follow the pattern: FolderName/FolderName.ts
    // e.g., StartPage/StartPage.ts, HeroBlock/HeroBlock.ts
    './src/components/cms/page/*/[A-Z]*.ts',
    './src/components/cms/component/*/[A-Z]*.ts',
    './src/components/cms/experience/*/[A-Z]*.ts',
  ],
});
