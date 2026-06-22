import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';
import '@/styles/cargotemplate.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '@/styles/slick.css';
import '@/styles/slick-theme.css';
import '@/styles/style.scss';
import { LayoutContext } from '@/utils/contexts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Cookies from '@/components/common/Cookies';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import lightGallery from 'lightgallery';

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Embasul',
  alternateName: 'Embasul Embalagens',
  url: 'https://embasul.com.br',
  logo: 'https://embasul.com.br/images/svg/Logo.svg',
  description: 'Fabricante de embalagens de papelão ondulado sob medida, com impressão de alta qualidade, agilidade na entrega e compromisso socioambiental.',
  sameAs: [
    'https://www.instagram.com/embasul.oficial',
    'https://www.facebook.com/embasul.oficial/',
    'https://br.linkedin.com/company/embasulembalagens',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-51-3595-9696',
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: ['Portuguese', 'English', 'Spanish'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Farroupilha, 233, São José',
    addressLocality: 'Novo Hamburgo',
    addressRegion: 'RS',
    postalCode: '93530-500',
    addressCountry: 'BR',
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if ((!pageProps.layout) && (Object.keys(pageProps).length > 0)) console.warn('[Warning]: Layout info not passed into `_app.js`');

  useEffect(() => {
    const closeAllSubmenus = () => document?.querySelector('[data-open="true"]')?.previousElementSibling.firstChild.click();
    router.events.on('routeChangeStart', closeAllSubmenus);
    router.events.on('hashChangeStart', closeAllSubmenus);
    return () => {
      router.events.off('routeChangeStart', closeAllSubmenus);
      router.events.off('hashChangeStart', closeAllSubmenus);
    }
  }, []);

  useEffect(() => {
    const galleries = document.querySelectorAll('.lg-react-element');
    const galleryContainers = document.querySelectorAll('.lg-container');

    function openGalleryHandler() {
      history.pushState({ openGallery: true }, '', '#galeria');
    }
    function hashListener(e) {
      if (e.oldURL.endsWith('#galeria')) {
        document.querySelectorAll('.lg-close.lg-icon')?.forEach(btn => { btn.click() });
      }
    }
    function closeBtnHandler(e) {
      if (e.isTrusted && window.location.hash === '#galeria') {
        history.back();
      }
    }
    function escKeyHandler(e) {
      if (e.key === 'Escape' && window.location.hash === '#galeria') {
        history.back();
      }
    }

    window.addEventListener('hashchange', hashListener);
    window.addEventListener('keydown', escKeyHandler);
    galleries?.forEach(el => el.addEventListener('lgAfterOpen', openGalleryHandler));
    galleryContainers?.forEach(el => el.querySelector('.lg-close.lg-icon')?.addEventListener('click', closeBtnHandler));

    return () => {
      window.removeEventListener('hashchange', hashListener);
      window.removeEventListener('keydown', escKeyHandler);
      galleries?.forEach(el => el.removeEventListener('lgAfterOpen', openGalleryHandler));
      galleryContainers?.forEach(el => el.querySelector('.lg-close.lg-icon')?.removeEventListener('click', closeBtnHandler));
    }
  }, [router, lightGallery]);

  return (
    <LayoutContext.Provider value={pageProps.layout}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
      </Head>
      <Header videoLink={pageProps.videoLink} />
      <ErrorBoundary locale={router.locale} resetKey={router.asPath}>
        <Component {...pageProps} />
      </ErrorBoundary>
      {pageProps.layout && <Footer />}
      <Cookies />
    </LayoutContext.Provider>
  )
}
