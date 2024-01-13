import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from 'svelte-adapter-bun';

import aliases from './aliases.json' assert { type: 'json' };

const dev = process.env.ENV === 'dev';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      precompress: !dev,
    }),
    alias: aliases,
  },
};

export default config;
