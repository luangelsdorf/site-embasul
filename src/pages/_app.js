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

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if ((!pageProps.layout) && (Object.keys(pageProps).length > 0)) console.warn('[Warning]: Layout info not passed into `_app.js`');

  useEffect(() => {
    const onChange = () => document?.querySelector('[data-open="true"]')?.previousElementSibling.firstChild.click();
    router.events.on('routeChangeStart', onChange);
    return () => router.events.off('routeChangeStart', onChange);
  }, []);

  return (
    <LayoutContext.Provider value={pageProps.layout}>
      <Header />
      <Component {...pageProps} />
      {pageProps.layout && <Footer />}
    </LayoutContext.Provider>
  )
}
