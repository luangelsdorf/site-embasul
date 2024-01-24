import Img from '@/components/common/Img';
import styles from './Future.module.scss';
import PictureAndText from '@/components/common/PictureAndText';

export default function Future({ content }) {

  return (
    <div className={styles.section}>
      <PictureAndText>
        <Img {...content.image} />
        <div className={styles.textContent}>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
      </PictureAndText>
    </div>
  )
}
