import path from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import license from 'rollup-plugin-license';
import tailwindcss from 'tailwindcss';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';

import { objectEntries } from '../src/lib/utils/object';
import tsConfig from '../tsconfig.json';

const isDev = process.env.ENV === 'dev';
const port = Number(process.env.APP_PORT ?? 42069);

/**
 * @type {Record<string, string>}
 */
const aliases = {};

objectEntries(tsConfig.compilerOptions.paths).forEach(([alias, paths]) => {
  if (alias.startsWith('$') && !alias.endsWith('*') && paths[0]) {
    aliases[alias] = path.resolve(__dirname, `../${paths[0]}`);
  }
});

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
  build: true,
  fix: true,
  chokidar: isDev,
  lintOnStart: !isDev,
  emitErrorAsWarning: isDev,
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
      overrideConfigFile: path.resolve(__dirname, './eslint.config.cjs'),
    }),
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
    port,
  },
  preview: {
    port,
  },
  resolve: {
    alias: aliases,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(path.resolve(__dirname, './tailwind.config.cjs')),
        autoprefixer,
      ],
    },
  },
};

export default config;
