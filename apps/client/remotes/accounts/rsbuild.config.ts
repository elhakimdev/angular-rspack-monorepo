import { defineConfig } from '@rsbuild/core';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import path from 'path';

const envMode = process.env['APP_ENV'] || 'development';

export default defineConfig({
  server: {
    port: 4201
  },
  output: {
    distPath: {
      root: 'dist',
    },
    cleanDistPath: true,
  },
  resolve: {
    alias: {
      '@auth/logger': path.resolve(
        __dirname, 
        '../../../../packages/server/index.ts'
      ),
    }
  },
  source: {
    tsconfigPath: './tsconfig.json',
  },
  html: {
    title: 'Accounts Micro App',
    template: './src/index.html',
  },
  plugins: [
    pluginSass(),
    pluginModuleFederation({
      name: 'accounts',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './AccountsModule': './src/accounts.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, requiredVersion: 'auto', eager: true },
        '@angular/common': { singleton: true, requiredVersion: 'auto', eager: true },
        '@angular/router': { singleton: true, requiredVersion: 'auto', eager: true },
      },
      skipSharingAngularInternals: true,
      generatePackageJson: false,
    }),
  ],
  tools: {
    swc: {
      jsc: {
        parser: {
          syntax: 'typescript',
          decorators: true,
        },
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
        },
      },
    },
    rspack: (config) => {
      config.module?.rules?.push({
        test: /\.html$/,
        type: 'asset/source',
        exclude: /index\.html$/,
      });
      config.ignoreWarnings = [/Failed to parse source map/];
      return config;
    },
  },
});
