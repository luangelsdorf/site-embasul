import Button from '@/components/common/Button';
import styles from './EthicsChannel.module.scss';
import WhatsApp from 'public/images/icons/whatsapp-fill.svg';
import Phone from 'public/images/icons/phone-fill.svg';
import Globe from 'public/images/icons/globe.svg';
import AppStore from 'public/images/icons/app-store-ios-brands-solid-full.svg';
import GooglePlay from 'public/images/icons/google-play-brands-solid-full.svg';
import { toFormatted } from '@/utils/helpers';
import Reveal, { Fade } from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { t } from '@/utils/translations';

export default function EthicsChannel({ content }) {
  const { locale } = useRouter();
  const [os, setOs] = useState('ssr');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      setOs('android');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setOs('ios');
    } else {
      setOs('other');
    }
  }, []);

  const icons = [
    WhatsApp,
    Globe,
    Phone,
  ];

  const enrichedItems = content.items.map((item, i) => {
    return { ...item, originalIndex: i, icon: icons[i] };
  });

  const appItemIndex = enrichedItems.findIndex(item => item.title?.includes('WhatsApp'));
  if (appItemIndex !== -1) {
    const [appItem] = enrichedItems.splice(appItemIndex, 1);
    appItem.title = t('ethics.appTitle', locale);
    appItem.text = t('ethics.appText', locale);
    appItem.isApp = true;
    appItem.icon = Phone;
    enrichedItems.push(appItem);
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} cascade damping={0.3} className="col-12 col-lg-6">
            <div>
              <h2 className="display-1">{content.title}</h2>
            </div>
            <div>
              <p>{toFormatted(content.text)}</p>
            </div>
          </Reveal>
        </div>

        <div className="row">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} cascade damping={0.1} className="col-12 col-lg-4">
            {
              enrichedItems.map((item) => (
                <div key={item.id}>
                  <article>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.isApp ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                        {(os === 'ssr' || os === 'other' || os === 'android') && (
                          <Button LeftIcon={GooglePlay} className="small" href="https://play.google.com/store/apps/details?id=br.com.contatoseguro.appoficial&hl=pt_BR&gl=US" target="_blank">Google Play</Button>
                        )}
                        {(os === 'ssr' || os === 'other' || os === 'ios') && (
                          <Button LeftIcon={AppStore} className="small" href="https://apps.apple.com/br/app/contato-seguro/id945536717" target="_blank">App Store</Button>
                        )}
                      </div>
                    ) : (
                      <Button LeftIcon={item.icon} className="small" href={item.linkUrl} target={item.linkUrl?.startsWith('http') ? '_blank' : undefined}>{item.linkText}</Button>
                    )}
                  </article>
                </div>
              ))
            }
          </Reveal>
        </div>

        <div className="row justify-content-center">
          <Fade triggerOnce duration={500} fraction={0.5} className="col-12 col-lg-10">
            <div className={styles.note}>
              <p>
                <span>*</span>
                {content.note}
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
