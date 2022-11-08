import { HTTP } from '$lib/utils/http';

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }) => {
  if (url.searchParams.get('fail')) {
    return new Response('It failed!', {
      status: HTTP.BAD_REQUEST,
    });
  }

  return new Response('It worked!', {
    status: HTTP.OK,
  });
};
