import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'awesome-layout',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'awesome-layout',
      proxiesFile: '../awesome-layout-react/src/components.ts',
      includeDefineCustomElements: true,
      loaderDir: './loader',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
  ],
};
