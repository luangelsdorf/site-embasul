import { getSizesString } from '@/utils/images';
import styles from './ProjectCard.module.scss';
import Img from '@/components/common/Img';
import { apiURL } from '@/utils/env';
import LightGallery from 'lightgallery/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ProjectCard({ cover, title, categories, gallery }) {
  let mouseDownPos = useRef(null);

  function handleMouseDown(e) {
    let { clientX, clientY } = e;
    mouseDownPos.current = { clientX, clientY };
  }

  function handleMouseUp(e) {
    if (e.clientX === mouseDownPos.current.clientX && e.clientY === mouseDownPos.current.clientY) {
      e.currentTarget.querySelector('[data-src]')?.click();
    }
  }

  useEffect(() => {
    document.querySelectorAll('[data-src]')?.forEach(el => {
      el.dataset.src = el.src;
    });
  }, []);

  return (
    <div className={styles.card} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
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
            <Image
              key={img.id}
              data-src={apiURL + img.attributes.url}
              width={img.attributes.width}
              height={img.attributes.height}
              src={apiURL + img.attributes.url}
              alt=""
              style={{ display: 'none' }}
            />
          ))
        }
      </LightGallery>
    </div>
  );
}
