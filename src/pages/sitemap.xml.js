import fetchAPI from '@/utils/fetch';

const SITE_URL = 'https://embasul.com.br';
const LOCALES = ['pt-BR', 'en', 'es'];
const DEFAULT_LOCALE = 'pt-BR';

const STATIC_PATHS = [
  '', '/empresa', '/produtos', '/produtos/projetos', '/sustentabilidade',
  '/inovacao', '/pessoas', '/trabalhe-conosco', '/blog', '/faq', '/politica-de-privacidade',
];

function loc(path, locale) {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

function alternatesFor(path) {
  const links = LOCALES.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${loc(path, l)}"/>`).join('');
  return links + `<xhtml:link rel="alternate" hreflang="x-default" href="${loc(path, DEFAULT_LOCALE)}"/>`;
}

function staticEntries() {
  return STATIC_PATHS.map(path => {
    const opts = path === '' ? { p: '1.0', f: 'weekly' } : { p: '0.7', f: 'monthly' };
    const alts = alternatesFor(path);
    return LOCALES.map(l =>
      `<url><loc>${loc(path, l)}</loc>${alts}<changefreq>${opts.f}</changefreq><priority>${opts.p}</priority></url>`
    ).join('');
  }).join('');
}

async function postEntries() {
  let xml = '';
  for (const locale of LOCALES) {
    try {
      const posts = await fetchAPI('posts', { locale, populate: false, sort: 'publishedDate:desc', 'pagination[limit]': 100 });
      (posts || []).forEach(p => {
        const slug = p?.attributes?.slug;
        if (slug) xml += `<url><loc>${loc(`/blog/${slug}`, locale)}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`;
      });
    } catch (e) {
      console.error('[sitemap] failed to fetch posts for', locale, e?.message);
    }
  }
  return xml;
}

export async function getServerSideProps({ res }) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${staticEntries()}${await postEntries()}</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400');
  res.write(xml);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
