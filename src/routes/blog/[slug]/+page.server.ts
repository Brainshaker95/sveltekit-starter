import { error } from '@sveltejs/kit';

import { BLOG_ARTICLES } from '$lib/mocks/blog';
import { HTTP } from '$lib/utils/http';
import { randomInt } from '$lib/utils/number';

import type { BlogArticle } from '$types/blog';
import type { Maybe } from '$types/core';
import type { PageServerLoad } from './$types';

// Simulates the time it takes for a real database query
const DB_FETCH_DURATION = 100;

const findBySlug = async (slug: string): Promise<Maybe<BlogArticle>> => new Promise((resolve, reject) => {
  setTimeout(() => {
    // Simulates unexpected errors
    if (randomInt(0, 1) === 0) {
      reject(new Error('An unexpected error occured'));
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
export const load: PageServerLoad = async ({ params }) => {
  let blogArticle: Maybe<BlogArticle>;

  try {
    blogArticle = await findBySlug(params.slug);
  } catch {
    error(HTTP.INTERNAL_SERVER_ERROR, 'Oopsie doopsie');
  }

  if (!blogArticle) {
    error(HTTP.NOT_FOUND, 'Article not found');
  }

  return blogArticle;
};
