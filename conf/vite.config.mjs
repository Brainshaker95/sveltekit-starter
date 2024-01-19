import path from 'path';
import { fileURLToPath } from 'url';

import { sveltekit } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import license from 'rollup-plugin-license';
import tailwindcss from 'tailwindcss';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';

const isDev = process.env.ENV === 'dev';
const host = process.env.APP_HOST ?? '127.0.0.1';
const port = Number(process.env.APP_PORT ?? 42069);
const dirname = fileURLToPath(new URL('.', import.meta.url));

/**
 * @type {{
 *   [K in keyof import('vite-plugin-eslint2').ESLintPluginUserOptions]:
 *     K extends keyof import('vite-plugin-stylelint').StylelintPluginUserOptions
 *       ? import('vite-plugin-eslint2').ESLintPluginUserOptions[K]
 *       : never
 * } & {
 *   fix: boolean,
 *   formatter?: never,
 * }}
 */
const COMMON_ESLINT_AND_STYLELINT_OPTIONS = {
  fix: true,
  build: true,
  chokidar: true,
  lintOnStart: true,
  lintInWorker: isDev,
  emitWarningAsError: !isDev,
};

const ALLOWED_EXTERNAL_LICENSES = [
  '0BSD',
  'ISC',
  'MIT',
];

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  envPrefix: 'APP_',
  plugins: [
    sveltekit(),
    checker({
      typescript: true,
    }),
    eslint({
      ...COMMON_ESLINT_AND_STYLELINT_OPTIONS,
      overrideConfigFile: path.resolve(dirname, './eslint.config.cjs'),
    }),
    stylelint({
      ...COMMON_ESLINT_AND_STYLELINT_OPTIONS,
      configFile: path.resolve(dirname, './stylelint.config.cjs'),
    }),
    license({
      thirdParty: {
        includePrivate: false,
        allow: {
          failOnUnlicensed: true,
          failOnViolation: true,
          test: (dependency) => ALLOWED_EXTERNAL_LICENSES.includes(dependency.license ?? ''),
        },
        output: {
          file: path.resolve(dirname, '../static/licenses.txt'),
        },
      },
    }),
  ],
  server: {
    host,
    port,
  },
  preview: {
    host,
    port,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(path.resolve(dirname, './tailwind.config.cjs')),
        autoprefixer,
      ],
    },
  },
};

export default config;
