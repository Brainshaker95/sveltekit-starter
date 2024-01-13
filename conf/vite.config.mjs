import path from 'path';

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
// @ts-expect-error - currently not working due to vite version mismatch
const config = {
  envPrefix: 'APP_',
  plugins: [
    // @ts-expect-error - currently not working due to vite version mismatch
    sveltekit(),
    // @ts-expect-error - currently not working due to vite version mismatch
    checker({
      typescript: true,
    }),
    // @ts-expect-error - currently not working due to vite version mismatch
    eslint({
      ...COMMON_ESLINT_AND_STYLELINT_OPTIONS,
      overrideConfigFile: path.resolve(__dirname, './eslint.config.cjs'),
    }),
    // @ts-expect-error - currently not working due to vite version mismatch
    stylelint({
      ...COMMON_ESLINT_AND_STYLELINT_OPTIONS,
      configFile: path.resolve(__dirname, './stylelint.config.cjs'),
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
          file: path.resolve(__dirname, '../static/licenses.txt'),
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
        tailwindcss(path.resolve(__dirname, './tailwind.config.cjs')),
        // @ts-expect-error - currently not working due to vite version mismatch
        autoprefixer,
      ],
    },
  },
};

export default config;
