import PostCard from '@/components/blog/PostCard';
import styles from './RelatedPosts.module.scss';

export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Posts relacionados</h2>
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
