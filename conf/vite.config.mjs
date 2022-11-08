import path from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import dotenv from 'dotenv';
import tailwindcss from 'tailwindcss';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';

dotenv.config();

const dev = process.env.NODE_ENV === 'dev';
const port = Number(process.env.PORT ?? 6969);

/**
 * @type {import('postcss').AcceptedPlugin[]}
 */
const postcssPlugins = [
  tailwindcss(path.resolve(__dirname, './tailwind.config.cjs')),
  autoprefixer,
];

if (!dev) {
  postcssPlugins.push(cssnano);
}

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  plugins: [
    sveltekit(),
    eslint({
      fix: true,
      failOnError: !dev,
      failOnWarning: !dev,
      overrideConfigFile: path.resolve(__dirname, './eslint.config.cjs'),
    }),
    stylelint({
      fix: true,
      emitErrorAsWarning: dev,
      emitWarningAsError: !dev,
      configFile: path.resolve(__dirname, './stylelint.config.cjs'),
    }),
  ],
  server: {
    port,
  },
  preview: {
    port,
  },
  resolve: {
    alias: {
      $scss: path.resolve(__dirname, '../src/scss'),
    },
  },
  css: {
    postcss: {
      plugins: postcssPlugins,
    },
  },
};

export default config;
