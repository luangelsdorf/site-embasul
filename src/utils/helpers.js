export function getExcerpt(string, wordLimit = 24) {
  let cleanText = string.replace(/(<([^>]+)>)/gi, "").split(' ').slice(0, wordLimit).join(' ').replaceAll('&nbsp;', '');
  const lastChar = cleanText.at(-1);
  switch (lastChar) {
    case '.':
    case ',':
    case '!':
    case '?':
      cleanText = cleanText.slice(0, -1);
  }
  cleanText += '…';
  return cleanText;
}

export const hasCategory = (post, category = '') => !!post.attributes.categories.data.filter(cat => cat.attributes.slug === category).length;
