import Img from '@/components/common/Img';
import { formatDate } from '@/utils/helpers';
import { getSizesString } from '@/utils/images';
import styles from './PostHeader.module.scss';

export default function PostHeader({ title, cover, publishedDate, category }) {
  const categoryName = category?.data?.attributes?.name;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center">
            <div className={styles.meta}>
              {categoryName && <span className={styles.category}>{categoryName}</span>}
              <span className={styles.date}>{formatDate(publishedDate)}</span>
            </div>
            <h1 className={`display-1 no-period ${styles.title}`}>{title}</h1>
          </div>
        </div>
      </div>

      {cover?.data && (
        <div className={styles.cover}>
          <div className="container">
            <Img fill sizes={getSizesString('col-sm-12')} {...cover} />
          </div>
        </div>
      )}
    </header>
  );
}
