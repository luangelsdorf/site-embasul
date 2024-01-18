import '@/styles/cargotemplate.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { LayoutContext } from '@/utils/contexts';

export default function App({ Component, pageProps }) {

  if ((!pageProps.layout) && (Object.keys(pageProps).length > 0)) console.warn('[Warning]: Layout info not passed into `_app.js`');
  
  return (
    <LayoutContext.Provider value={pageProps.layout}>
      <Component {...pageProps} />
    </LayoutContext.Provider>
  )
}
