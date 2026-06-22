import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import X from 'public/images/icons/x.svg';
import Arrow from 'public/images/icons/arrow-short.svg';
import { apiURL } from '@/utils/env';
import { t } from '@/utils/translations';

import styles from './ProjectModal.module.scss';

export default function ProjectModal({ open, project, onClose }) {
  const { locale } = useRouter();
  const dialogRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cover = project?.cover?.data;
  const galleryItems = project?.gallery?.data ?? [];
  const filteredGallery = cover ? galleryItems.filter(img => img.id !== cover.id) : galleryItems;
  const images = cover ? [cover, ...filteredGallery] : filteredGallery;
  const mainImage = images[activeIndex];
  const categoryName = project?.categories?.data?.[0]?.attributes?.name;
  const description = project?.text;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function lock() {
      const scrollbarComp = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (scrollbarComp > 0) document.body.style.paddingRight = `${scrollbarComp}px`;
      document.documentElement.classList.add('no-scroll');
    }

    function unlock() {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.classList.remove('no-scroll');
    }

    if (open && !dialog.open) {
      dialog.showModal();
      lock();
    } else if (!open && dialog.open) {
      dialog.close();
      unlock();
    }
    return unlock;
  }, [open]);

  useEffect(() => {
    if (open) setActiveIndex(0);
  }, [open, project?.slug]);

  useEffect(() => {
    if (!open || !hasMultiple) return;
    function handleKey(e) {
      if (e.key === 'ArrowLeft') setActiveIndex(i => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setActiveIndex(i => (i + 1) % images.length);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, hasMultiple, images.length]);

  function prev() {
    setActiveIndex(i => (i - 1 + images.length) % images.length);
  }
  function next() {
    setActiveIndex(i => (i + 1) % images.length);
  }

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
          aria-label={t('modal.close', locale)}
        >
          <X />
        </button>

        <div className={styles.body}>
          <div className={styles.imagery}>
            {mainImage && (
              <Image
                key={mainImage.id}
                src={apiURL + mainImage.attributes.url}
                alt={mainImage.attributes.alternativeText ?? project.title}
                fill
                sizes="(max-width: 992px) 100vw, 70vw"
                className={styles.mainImage}
                priority
              />
            )}

            {hasMultiple && (
              <>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.prev}`}
                  onClick={prev}
                  aria-label={t('modal.prevImage', locale)}
                >
                  <Arrow />
                </button>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.next}`}
                  onClick={next}
                  aria-label={t('modal.nextImage', locale)}
                >
                  <Arrow />
                </button>

                <div className={styles.indicator} aria-hidden>
                  {images.map((img, i) => (
                    <button
                      key={img.id}
                      type="button"
                      className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`${t('modal.image', locale)} ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className={styles.info}>
            {categoryName && <span className={styles.category}>{categoryName}</span>}
            <h2 className={`display-2 no-period ${styles.title}`}>{project.title}</h2>
            {/* {description && <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />} */}
          </div>
        </div>
      </div>
    </dialog>
  );
}
