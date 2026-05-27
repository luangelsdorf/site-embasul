import { useState } from 'react';
import PostCard from '@/components/blog/PostCard';
import styles from './PostList.module.scss';

export default function PostList({ posts, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const list = activeCategory === 'all'
    ? posts
    : posts.filter(p => p.attributes.category?.data?.attributes?.slug === activeCategory);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Categorias</h2>
            <ul className={styles.categories}>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={activeCategory === 'all' ? styles.active : ''}
                >
                  Todas
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(cat.attributes.slug)}
                    className={activeCategory === cat.attributes.slug ? styles.active : ''}
                  >
                    {cat.attributes.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.grid}>
            {list.length > 0 ? (
              list.map(card => <PostCard key={card.id} {...card.attributes} />)
            ) : (
              <p className={styles.notFound}>Nenhum post encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
