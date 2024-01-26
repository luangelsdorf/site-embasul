import styles from './Highlights.module.scss';
import Button from '@/components/common/Button';
import Img from '@/components/common/Img';
import PictureAndText from '@/components/common/PictureAndText';
import Title from '@/components/common/Title';
import Arrow from 'public/images/icons/arrow-short.svg';

export default function Highlights({ content }) {
  return (
    <div className={styles.section}>
      {
        content.map((item, index) => (
          <PictureAndText key={item.id} flipped={index % 2 === 0 ? true : false} height="800px">
            <Img {...item.image} />
            <div>
              <Title content={item.headline} />
              <p className="mb-4">{item.text}</p>
              <Button link RightIcon={Arrow} className="link-wrapper" href={item.link.url}>{item.link.text}</Button>
            </div>
          </PictureAndText>
        ))
      }
    </div>
  )
}
