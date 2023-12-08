import '@/styles/slick.css';
import '@/styles/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import Header from 'public/images/svg/Heading.svg';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    window.onscroll = e => {
      if (window.scrollY > 60) {
        document.getElementById('headerfixed').classList.remove('top');
      } else {
        document.getElementById('headerfixed').classList.add('top');
      }
    }

    return () => window.onscroll = null;
  }, []);

  return (
    <>
      <Header style={{
        width: 'calc(100vw + 32px)',
        height: 'auto',
        position: 'fixed',
        left: '-24px',
        top: '-18px',
        /* transform: 'translateY(-100%)', */
        transition: '400ms',
      }}
        id="headerfixed"
      />
      <Component {...pageProps} />
    </>
  )
}
