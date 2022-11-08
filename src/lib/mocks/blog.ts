import type { BlogArticle } from '$types/blog';

export const BLOG_ARTICLES: Readonly<BlogArticle>[] = [{
  slug: 'my-first-article',
  title: 'My first article',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
}, {
  slug: 'my-second-article',
  title: 'My second article',
  text: 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
}];
