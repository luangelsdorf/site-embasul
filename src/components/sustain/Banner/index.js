import Img from '@/components/common/Img';
import styles from './Banner.module.scss';
import { getSizesString } from '@/utils/images';

export default function Banner({ content }) {
  
  return (
    <div className={styles.section}>
      <Img {...content.icon} fill sizes={getSizesString('col-12 col-lg-10')} alt="" />
      <div className={styles.textContent}>
        <h1 className="display-1">{content.text}</h1>
      </div>
    </div>
  )
}
