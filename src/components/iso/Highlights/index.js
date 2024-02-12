import PictureAndText from '@/components/common/PictureAndText';
import styles from './Highlights.module.scss';
import Img from '@/components/common/Img';
import { getSizesString } from '@/utils/images';
import { toFormatted } from '@/utils/helpers';

export default function Highlights({ content }) {
  return (
    <div className={styles.section}>
      <div className={styles.highlights}>
        {content.map((item, index) => (
          <PictureAndText key={item.id} flipped={index % 2 === 1 ? true : false} contained height="540px">
            <Img {...item.image} sizes={getSizesString('col-12 col-lg-6')} style={{ height: '540px' }} />
            <div className={styles.textContent}>
              <p className="overline">ISO9001</p>
              <h2 className="display-2">{item.title}</h2>
              <p>{toFormatted(item.text)}</p>
            </div>
          </PictureAndText>
        ))}
      </div>
    </div>
  )
}
