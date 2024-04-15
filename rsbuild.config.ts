import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  source: {
    transformImport: [
      {
        libraryName: '@alifd/next',
        libraryDirectory: 'es',
        style: true,
      },
      {
        libraryName: '@formily/next',
        libraryDirectory: 'esm',
        style: true,
      },
    ],
  },
  plugins: [pluginReact()],
});
