import '@/styles/cargotemplate.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '@/styles/slick.css';
import '@/styles/slick-theme.css';
import '@/styles/style.scss';
import { LayoutContext } from '@/utils/contexts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function App({ Component, pageProps }) {

  if ((!pageProps.layout) && (Object.keys(pageProps).length > 0)) console.warn('[Warning]: Layout info not passed into `_app.js`');

  return (
    <LayoutContext.Provider value={pageProps.layout}>
      <Header />
      <Component {...pageProps} />
    </LayoutContext.Provider>
  )
}
