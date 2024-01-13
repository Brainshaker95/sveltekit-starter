import type { PageLoad } from './$types';

// @see https://kit.svelte.dev/docs/page-options
// export const prerender = true or false or 'auto'
// export const ssr = true or false
// export const csr = true or false

/**
 * This function will run on the client and on the server
 *
 * @see https://kit.svelte.dev/docs/routing#page-page-js
 */
export const load: PageLoad = ({ data }) => {
  // Do whatever needs to be done to the data before passing it to the page

  // Keep in mind that console output will be visible to the client during CSR
  // eslint-disable-next-line no-console
  console.log(data);

  return data;
};
