import styles from './Highlights.module.scss';
import Button from '@/components/common/Button';
import Img from '@/components/common/Img';
import PictureAndText from '@/components/common/PictureAndText';
import Title from '@/components/common/Title';
import { getSizesString } from '@/utils/images';
import { useRouter } from 'next/router';
import Arrow from 'public/images/icons/arrow-short.svg';
import { useEffect } from 'react';

export default function Highlights({ content }) {
  const router = useRouter();

  useEffect(() => {
    const click = e => window.open(e.currentTarget.dataset.href);
    const images = document.querySelectorAll(`.${styles.section} > div img`);

    images.forEach(el => el.addEventListener('click', click));

    return () => images.forEach(el => el.removeEventListener('click', click));
  }, []);

  const ids = [
    'fsc',
    'origem-sustentavel',
    'pegada-neutra',
    'cts',
  ]

  return (
    <div className={styles.section}>
      {
        content.map((item, index) => (
          <PictureAndText key={item.id} flipped={index % 2 === 0 ? true : false} height="800px">
            <div className={styles.imgWrapper} id={ids[index]}>
              <Img {...item.image} fill sizes={getSizesString('col-12 col-lg-6')} data-href={item.link.url} />
            </div>
            <div className="mb-5 mb-lg-5">
              <Title content={item.headline} />
              <p className="mb-4">{item.text}</p>
              <Button nativeLink link target="_blank" RightIcon={Arrow} className="link-wrapper" href={item.link.url}>{item.link.text}</Button>
            </div>
          </PictureAndText>
        ))
      }
    </div>
  )
}
