import Head from 'next/head';
import { useRouter } from 'next/router';
import { LOCALES, DEFAULT_LOCALE } from '@/utils/translations';

export const SITE_URL = 'https://embasul.com.br';
export const SITE_NAME = 'Embasul';
const DEFAULT_OG_IMAGE = `${SITE_URL}/strapi/uploads/CAMINHOES_EMBASUL_SITE_0fd70bedbd.png`;
const OG_LOCALE = { 'pt-BR': 'pt_BR', en: 'en_US', es: 'es_ES' };

function localizedUrl(path, locale) {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const clean = path === '/' ? '' : path;
  return `${SITE_URL}${prefix}${clean}`;
}

export default function Seo({ title, description, image, type = 'website', noindex = false }) {
  const router = useRouter();
  const path = (router.asPath || '/').split('#')[0].split('?')[0];
  const locale = router.locale || DEFAULT_LOCALE;
  const fullTitle = title ? `${title} - ${SITE_NAME}` : SITE_NAME;
  const canonical = localizedUrl(path, locale);
  const ogImage = image || DEFAULT_OG_IMAGE;

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonical} />

      {LOCALES.map(l => (
        <link key={`alt-${l}`} rel="alternate" hrefLang={l} href={localizedUrl(path, l)} />
      ))}
      <link key="alt-x-default" rel="alternate" hrefLang="x-default" href={localizedUrl(path, DEFAULT_LOCALE)} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={OG_LOCALE[locale] || 'pt_BR'} />
      {LOCALES.filter(l => l !== locale).map(l => (
        <meta key={`oglocale-${l}`} property="og:locale:alternate" content={OG_LOCALE[l]} />
      ))}
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
