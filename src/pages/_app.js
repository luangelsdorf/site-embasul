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
import Cookies from '@/components/common/Cookies';
import lightGallery from 'lightgallery';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if ((!pageProps.layout) && (Object.keys(pageProps).length > 0)) console.warn('[Warning]: Layout info not passed into `_app.js`');

  useEffect(() => {
    const onChange = () => document?.querySelector('[data-open="true"]')?.previousElementSibling.firstChild.click();
    router.events.on('routeChangeStart', onChange);
    router.events.on('hashChangeStart', onChange);
    return () => {
      router.events.off('routeChangeStart', onChange);
      router.events.off('hashChangeStart', onChange);
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
      {router.pathname !== '/trabalhe-conosco' && <Header videoLink={pageProps.videoLink} />}
      <Component {...pageProps} />
      {(pageProps.layout && router.pathname !== '/trabalhe-conosco') && <Footer />}
      <Cookies />
    </LayoutContext.Provider>
  )
}
