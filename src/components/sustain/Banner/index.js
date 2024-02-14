import Img from '@/components/common/Img';
import styles from './Banner.module.scss';
import { getSizesString } from '@/utils/images';
import { toFormatted } from '@/utils/helpers';
import { animateBanner, slideUp } from '@/utils/animation';
import Reveal from 'react-awesome-reveal';

export default function Banner({ content }) {

  return (
    <div className={styles.section}>
      <Img style={{ opacity: 0 }} onLoad={animateBanner} {...content.icon} fill sizes={getSizesString('col-12 col-lg-10')} alt="" />
      <div className={styles.textContent}>
        <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5}>
          <h1 className="display-1">{toFormatted(content.text)}</h1>
        </Reveal>
      </div>
    </div>
  )
}
