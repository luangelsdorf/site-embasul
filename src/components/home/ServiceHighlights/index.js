import PictureAndText from '@/components/common/PictureAndText';
import styles from './ServiceHighlights.module.scss';
import Title from '@/components/common/Title';
import Img from '@/components/common/Img';
import Button from '@/components/common/Button';
import Arrow from 'public/images/icons/arrow-short.svg';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ServiceHighlights({ content }) {
  const router = useRouter();

  useEffect(() => {
    if (matchMedia('(max-width: 992px)').matches) return;
    const click = e => router.push(e.currentTarget.dataset.href);
    const sections = document.querySelectorAll(`.${styles.section} > div`);

    sections.forEach(el => el.addEventListener('click', click));

    return () => sections.forEach(el => el.removeEventListener('click', click));
  }, []);

  return (
    <div className={styles.section}>
      {
        content.map((item, index) => (
          <PictureAndText key={item.id} flipped={index % 2 === 0 ? true : false} height="540px" data-href={item.link.url}>
            <Img {...item.image} style={{ height: '540px' }} />
            <div className={styles.textContent}>
              <Title content={item.headline} />
              <p>{item.text}</p>
              <Button link RightIcon={Arrow} className="link-wrapper" href={item.link.url}>{item.link.text}</Button>
            </div>
          </PictureAndText>
        ))
      }
    </div>
  )
}
