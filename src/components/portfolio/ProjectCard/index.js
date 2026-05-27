import { useRef, useState } from 'react';
import { getSizesString } from '@/utils/images';
import styles from './ProjectCard.module.scss';
import Img from '@/components/common/Img';
import ProjectModal from '@/components/portfolio/ProjectModal';

export default function ProjectCard({ cover, title, categories, gallery, text, slug }) {
  const mouseDownPos = useRef(null);
  const [open, setOpen] = useState(false);

  function handleMouseDown(e) {
    const { clientX, clientY } = e;
    mouseDownPos.current = { clientX, clientY };
  }

  function handleMouseUp(e) {
    if (
      mouseDownPos.current &&
      e.clientX === mouseDownPos.current.clientX &&
      e.clientY === mouseDownPos.current.clientY
    ) {
      setOpen(true);
    }
  }

  return (
    <>
      <div className={styles.card} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
        <article>
          <Img fill sizes={getSizesString('col-12 col-md-4')} {...cover} />
          <div>
            <span>{categories?.data.length > 0 && categories.data[0].attributes.name}</span>
            <span className="heading-h3-size">{title}</span>
          </div>
        </article>
      </div>

      {open && (
        <ProjectModal
          open={open}
          project={{ cover, title, categories, gallery, text, slug }}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
