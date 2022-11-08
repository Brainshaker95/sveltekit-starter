import { BLOG_ARTICLES } from '$lib/mocks/blog';

import type { LayoutLoad } from '$dynamic-types/blog/$types';
import type { NavigationItem } from '$types/navigation';

// @see https://kit.svelte.dev/docs/page-options
// export const prerender = true or false or 'auto'
// export const ssr = true or false
// export const csr = true or false

/**
 * This function will run on the client and on the server
 *
 * @see https://kit.svelte.dev/docs/routing#layout-layout-js
 */
export const load: LayoutLoad = () => {
  const sidebarItems: NavigationItem[] = BLOG_ARTICLES.map((blogArticle) => ({
    name: blogArticle.title,
    path: `/blog/${blogArticle.slug}`,
  }));

  return {
    sidebarItems,
  };
};
