import Link from 'next/link';
import Img from '@/components/common/Img';
import { getSizesString } from '@/utils/images';
import { formatDate } from '@/utils/helpers';
import styles from './PostCard.module.scss';

export default function PostCard({ title, slug, cover, publishedDate, category }) {
  const categoryName = category?.data?.attributes?.name;

  return (
    <Link href={`/blog/${slug}`} className={`wrapper ${styles.card}`}>
      <article>
        {cover?.data && (
          <div className={styles.cover}>
            <Img fill sizes={getSizesString('col-sm-12 col-lg-6')} {...cover} />
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.meta}>
            {categoryName && <span className={styles.category}>{categoryName}</span>}
            <span className={styles.date}>{formatDate(publishedDate)}</span>
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </article>
    </Link>
  );
}
