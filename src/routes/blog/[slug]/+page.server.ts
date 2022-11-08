import { error } from '@sveltejs/kit';

import { BLOG_ARTICLES } from '$lib/mocks/blog';
import { HTTP } from '$lib/utils/http';

import type { PageServerLoad } from '$dynamic-types/blog/[slug]/$types';
import type { BlogArticle } from '$types/blog';

// Simulates the time it takes for a real database query
const DB_FETCH_DURATION = 100;

const findBySlug = async (slug: string): Promise<BlogArticle | undefined> => new Promise((resolve, reject) => {
  setTimeout(() => {
    // Simulates unexpected errors
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (Math.random() < 0.1) {
      reject(Error());
    } else {
      resolve(BLOG_ARTICLES.find((blogArticle) => blogArticle.slug === slug));
    }
  }, DB_FETCH_DURATION);
});

// @see https://kit.svelte.dev/docs/page-options
// export const prerender = true or false or 'auto'
// export const ssr = true or false
// export const csr = true or false

/**
 * This function will only run on the server
 *
 * @see https://kit.svelte.dev/docs/routing#page-page-server-js
 */
export const load: PageServerLoad<BlogArticle> = async ({ params }) => {
  let blogArticle: BlogArticle | undefined;

  try {
    blogArticle = await findBySlug(params.slug);
  } catch {
    throw error(HTTP.INTERNAL_SERVER_ERROR, 'Oopsie doopsie');
  }

  if (!blogArticle) {
    throw error(HTTP.NOT_FOUND, 'Article not found');
  }

  return blogArticle;
};
