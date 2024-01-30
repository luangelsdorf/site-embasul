import { getSizesString } from '@/utils/images';
import styles from './ProjectCard.module.scss';
import Img from '@/components/common/Img';
import { apiURL } from '@/utils/env';
import LightGallery from 'lightgallery/react';

export default function ProjectCard({ cover, title, slug, categories, gallery }) {
  function handleClick(e) {
    e.target.querySelector('[data-src]')?.click();
  }

  return (
    <div className={styles.card} onMouseUp={handleClick}>
      <article>
        <Img fill sizes={getSizesString('col-12 col-md-4')} {...cover} />
        <div>
          <span>{categories?.data.length > 0 && categories.data[0].attributes.name}</span>
          <span className="heading-h3-size">{title}</span>
        </div>
      </article>
      <LightGallery download={false} speed={500}>
        {
          gallery.data.map(img => (
            <img loading="lazy" key={img.id} data-src={apiURL + img.attributes.url} width="0" height="0" src={apiURL + img.attributes.url} alt="" />
          ))
        }
      </LightGallery>
    </div>
  );
}
