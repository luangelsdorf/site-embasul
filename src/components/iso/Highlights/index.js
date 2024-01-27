import PictureAndText from '@/components/common/PictureAndText';
import styles from './Highlights.module.scss';
import Img from '@/components/common/Img';
import { getSizesString } from '@/utils/images';

export default function Highlights({ content }) {
  return (
    <div className={styles.section}>
      <div className={styles.highlights}>
        {content.map((item, index) => (
          <PictureAndText key={item.id} flipped={index % 2 === 1 ? true : false} contained height="540px">
            <Img {...item.image} sizes={getSizesString('col-12 col-lg-6')} />
            <div className={styles.textContent}>
              <p className="overline">ISO9001</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </PictureAndText>
        ))}
      </div>
    </div>
  )
}
