import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import X from 'public/images/icons/x.svg';
import { apiURL } from '@/utils/env';
import { getExcerpt } from '@/utils/helpers';
import styles from './ProjectModal.module.scss';

export default function ProjectModal({ open, project, onClose }) {
  const dialogRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cover = project?.cover?.data;
  const galleryItems = project?.gallery?.data ?? [];
  const images = cover ? [cover, ...galleryItems] : galleryItems;
  const mainImage = images[activeIndex];
  const categoryName = project?.categories?.data?.[0]?.attributes?.name;
  const description = getExcerpt(project?.text ?? '', 28);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.classList.add('no-scroll');
    } else if (!open && dialog.open) {
      dialog.close();
      document.documentElement.classList.remove('no-scroll');
    }
    return () => document.documentElement.classList.remove('no-scroll');
  }, [open]);

  useEffect(() => {
    if (open) setActiveIndex(0);
  }, [open, project?.slug]);

  function handleBackdropClick(e) {
    if (e.target === dialogRef.current) onClose?.();
  }

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      className={`fullscreen ${styles.dialog}`}
      onClose={() => onClose?.()}
      onClick={handleBackdropClick}
    >
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.close}
          onClick={() => onClose?.()}
          aria-label="Fechar"
        >
          <X />
        </button>

        <div className={styles.body}>
          <div className={styles.imagery}>
            <div className={styles.mainImage}>
              {mainImage && (
                <Image
                  src={apiURL + mainImage.attributes.url}
                  alt={mainImage.attributes.alternativeText ?? project.title}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              )}
            </div>

            {images.length > 1 && (
              <ul className={styles.thumbnails}>
                {images.map((img, i) => (
                  <li key={img.id}>
                    <button
                      type="button"
                      className={`${styles.thumbnail} ${i === activeIndex ? styles.active : ''}`}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Imagem ${i + 1}`}
                    >
                      <Image
                        src={apiURL + img.attributes.url}
                        alt=""
                        width={120}
                        height={90}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.info}>
            {categoryName && <span className={styles.category}>{categoryName}</span>}
            <h2 className={`display-2 no-period ${styles.title}`}>{project.title}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        </div>
      </div>
    </dialog>
  );
}
