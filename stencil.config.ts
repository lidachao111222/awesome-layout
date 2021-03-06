import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'awesome-layout',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        { src: 'pages' }
      ],
      serviceWorker: null, // disable service workers
    },
  ],
};
