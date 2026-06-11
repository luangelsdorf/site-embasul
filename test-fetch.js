import fetchAPI from './src/utils/fetch.js';

async function test() {
  const res = await fetchAPI('posts', { 'filters[slug][$eq]': 'a-post-that-exists', locale: 'en' });
  console.log(res);
}
test();
