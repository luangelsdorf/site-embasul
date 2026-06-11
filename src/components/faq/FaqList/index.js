import { useState } from 'react';
import FaqItem from '@/components/faq/FaqItem';
import Caret from 'public/images/icons/caret-down.svg';
import styles from './FaqList.module.scss';
import { useRouter } from 'next/router';
import { t } from '@/utils/translations';

export default function FaqList({ items, categories }) {
  const router = useRouter();
  const { locale } = router;
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = activeCategory === 'all'
    ? items
    : items.filter(it => it.attributes.category?.data?.attributes?.slug === activeCategory);

  const activeCategoryName = activeCategory === 'all'
    ? t('faq.all', locale)
    : categories.find(c => c.attributes.slug === activeCategory)?.attributes?.name ?? t('faq.all', locale);

  function handleSelect(value) {
    setActiveCategory(value);
    setMobileOpen(false);
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <aside className={`${styles.sidebar} ${mobileOpen ? styles.open : ''}`}>
            <button
              type="button"
              className={styles.trigger}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="faq-categories"
            >
              <span>{t('faq.dropdownLabel', locale)} {activeCategoryName}</span>
              <Caret />
            </button>

            <h2 className={styles.sidebarTitle}>{t('faq.categories', locale)}</h2>

            <ul id="faq-categories" className={styles.categories}>
              <li>
                <button
                  type="button"
                  onClick={() => handleSelect('all')}
                  className={activeCategory === 'all' ? styles.active : ''}
                >
                  {t('faq.all', locale)}
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(cat.attributes.slug)}
                    className={activeCategory === cat.attributes.slug ? styles.active : ''}
                  >
                    {cat.attributes.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.content}>
            {filtered.length > 0 ? (
              <ul className={styles.items}>
                {filtered.map(it => (
                  <li key={it.id}>
                    <FaqItem {...it.attributes} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.notFound}>{t('faq.empty', locale)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
