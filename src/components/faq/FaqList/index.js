import { useState } from 'react';
import FaqItem from '@/components/faq/FaqItem';
import Caret from 'public/images/icons/caret-down.svg';
import styles from './FaqList.module.scss';

export default function FaqList({ items, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = activeCategory === 'all'
    ? items
    : items.filter(it => it.attributes.category?.data?.attributes?.slug === activeCategory);

  const activeCategoryName = activeCategory === 'all'
    ? 'Todas'
    : categories.find(c => c.attributes.slug === activeCategory)?.attributes?.name ?? 'Todas';

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
              <span>Categoria: {activeCategoryName}</span>
              <Caret />
            </button>

            <h2 className={styles.sidebarTitle}>Categorias</h2>

            <ul id="faq-categories" className={styles.categories}>
              <li>
                <button
                  type="button"
                  onClick={() => handleSelect('all')}
                  className={activeCategory === 'all' ? styles.active : ''}
                >
                  Todas
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
              <p className={styles.notFound}>Nenhuma pergunta encontrada nesta categoria.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
