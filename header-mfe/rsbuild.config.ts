import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'container',
      exposes: {
        './button': './src/button.tsx',
        './header': './src/header.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3000,
  },
});