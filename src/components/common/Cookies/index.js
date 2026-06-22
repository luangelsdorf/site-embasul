import Link from 'next/link';
import styles from './Cookies.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { t } from '@/utils/translations';

export default function Cookies() {
  const { locale } = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!localStorage.embasulCookies) {
      setShowPopup(true);
    }
  }, []);

  function handleClick() {
    setShowPopup(false);
    localStorage.setItem('embasulCookies', true);
  }

  return (
    <div className={styles.wrapper} style={{ display: showPopup ? 'block' : 'none' }}>
      <div className="col-12 col-lg-6 mx-auto">
        <div className={styles.content}>
          <p className="text-100">{t('cookies.message', locale)} <Link className="p-0" href="/politica-de-privacidade">{t('footer.privacy', locale)}</Link>.
          </p>
          <button className="btn-primary small" onClick={handleClick}>{t('cookies.accept', locale)}</button>
        </div>
      </div>
    </div>
  )
}