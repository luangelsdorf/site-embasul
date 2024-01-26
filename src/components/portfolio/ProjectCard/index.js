import { getSizesString } from '@/utils/images';
import styles from './ProjectCard.module.scss';
import Img from '@/components/common/Img';

export default function ProjectCard({ cover, title, slug, categories }) {
  return (
    <div className={styles.card} href={`/projetos/${slug}`}>
      <article>
        <Img fill sizes={getSizesString('col-12 col-md-4')} {...cover} />
        <div>
          <span>{categories?.data.length > 0 && categories.data[0].attributes.name}</span>
          <span className="heading-h3-size">{title}</span>
        </div>
      </article>
    </div>
  );
}
