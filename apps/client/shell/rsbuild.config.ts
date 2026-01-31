import { defineConfig } from '@rsbuild/core';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import path from 'path/win32';

const envMode = process.env['APP_ENV'] || 'development';

console.log(`\n=============================================`);
console.log(`🚀 RSBUILD STARTING FOR: ${envMode.toUpperCase()}`);
console.log
console.log(`=============================================\n`);

const envFileMap: Record<string, string> = {
  development: './src/environments/environment.ts',
  staging: './src/environments/environment.staging.ts',
  beta: './src/environments/environment.beta.ts',
  production: './src/environments/environment.prod.ts',
};

const tsConfigMap: Record<string, string> = {
  development: './tsconfig.json',
  staging: './tsconfig.staging.json',
  beta: './tsconfig.beta.json',
  production: './tsconfig.prod.json',
};

if (!envFileMap[envMode]) {
  throw new Error(`❌ Environment '${envMode}' tidak dikenal! Gunakan: dev, staging, beta, atau prod.`);
}


export default defineConfig({
  server: {
    port: 4200
  },
  output: {
    distPath: {
      root: 'dist',
    },
    cleanDistPath: true,
  },
  resolve: {
    alias: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      '@env': envFileMap[envMode],
      '@auth/primitives-ui': path.resolve(
        __dirname, 
        '../../../packages/client/primitives-ui/src/index.ts'
      ),
    }
  }, 
  source: {
    tsconfigPath: tsConfigMap[envMode],
  },
  html: {
    title: `Shell App (${envMode})`, // Judul tab browser berubah sesuai env
    template: './src/index.html',
  },
  plugins: [
    pluginSass(),
    pluginModuleFederation({
      name: 'shell',
      remotes: {
        // login: 'login@http://localhost:4201/mf-manifest.json',
      },
      shared: {
        '@angular/core': { singleton: true, requiredVersion: 'auto', eager: true, },
        '@angular/common': { singleton: true, requiredVersion: 'auto', eager: true, },
        '@angular/router': { singleton: true, requiredVersion: 'auto', eager: true, },
      },
    }),
  ],

  tools: {
    // 1. Config Compiler SWC (Pengganti Babel)
    swc: {
      jsc: {
        parser: {
          syntax: 'typescript',
          decorators: true, // Wajib buat Angular
        },
        transform: {
          legacyDecorator: true, // Angular pakai style lama
          decoratorMetadata: true, // Wajib buat Dependency Injection
        },
      },
    },

    // 2. Config Bundler Rspack
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
})

function getRemoteUrl(remoteName: string, localPort: number): string {
  const isDev = envMode === 'development';
  if (isDev) {
    return `${remoteName}@http://localhost:${localPort}/mf-manifest.json`;
  }
  return `${remoteName}@https://${envMode}-${remoteName}.acme.com/mf-manifest.json`;
}