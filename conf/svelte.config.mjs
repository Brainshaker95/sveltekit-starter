import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from 'svelte-adapter-bun';

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
  },
};

export default config;
