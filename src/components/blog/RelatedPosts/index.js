import PostCard from '@/components/blog/PostCard';
import styles from './RelatedPosts.module.scss';
import { useRouter } from 'next/router';
import { t } from '@/utils/translations';

export default function RelatedPosts({ posts }) {
  const { locale } = useRouter();
  if (!posts || posts.length === 0) return null;

  return (
    <div className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>{t('blog.relatedPosts', locale)}</h2>
        </header>

        <div className={styles.grid}>
          {posts.map(card => (
            <PostCard key={card.id} {...card.attributes} />
          ))}
        </div>
      </div>
    </div>
  );
}
