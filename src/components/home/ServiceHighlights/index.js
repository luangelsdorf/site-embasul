import PictureAndText from '@/components/common/PictureAndText';
import styles from './ServiceHighlights.module.scss';
import Title from '@/components/common/Title';
import Img from '@/components/common/Img';
import Button from '@/components/common/Button';
import Arrow from 'public/images/icons/arrow-short.svg';

export default function ServiceHighlights({ content }) {
  console.log(content);
  return (
    <div className={styles.section}>
      {
        content.map((item, index) => (
          <PictureAndText key={item.id} flipped={index % 2 === 0 ? true : false} height="540px">
            <Img {...item.image} />
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
