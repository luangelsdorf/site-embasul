import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Caret from 'public/images/icons/caret-down.svg';
import { LOCALES, LOCALE_LABELS, DEFAULT_LOCALE, t } from '@/utils/translations';
import styles from './LanguageSwitcher.module.scss';

export default function LanguageSwitcher({ expanded = false }) {
  const router = useRouter();
  const { pathname, asPath, query, locale: currentLocale } = router;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const active = LOCALE_LABELS[currentLocale] ?? LOCALE_LABELS[DEFAULT_LOCALE];

  useEffect(() => {
    if (!open) return;
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function handleEsc(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

  if (expanded) {
    return (
      <ul className={styles.expanded} aria-label={t('lang.menuLabel', currentLocale)}>
        {LOCALES.map(loc => {
          const label = LOCALE_LABELS[loc];
          const isActive = loc === currentLocale;
          return (
            <li key={loc}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={loc}
                className={isActive ? styles.active : ''}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className={styles.flag} aria-hidden>{label.flag}</span>
                <span>{label.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className={`${styles.switcher} ${open ? styles.open : ''}`} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`${t('lang.current', currentLocale)}: ${active.name}`}
      >
        <span className={styles.flag} aria-hidden>{active.flag}</span>
        <Caret className={styles.caret} />
      </button>

      <ul className={styles.menu} role="listbox">
        {LOCALES.map(loc => {
          const label = LOCALE_LABELS[loc];
          const isActive = loc === currentLocale;
          return (
            <li key={loc} role="option" aria-selected={isActive}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={loc}
                className={isActive ? styles.active : ''}
                onClick={() => setOpen(false)}
              >
                <span className={styles.flag} aria-hidden>{label.flag}</span>
                <span>{label.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
