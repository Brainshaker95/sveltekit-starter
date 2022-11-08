import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'dev';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      precompress: !dev,
    }),
  },
};

export default config;
