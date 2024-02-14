import Img from '@/components/common/Img';
import styles from './Benefits.module.scss';
import Title from '@/components/common/Title';
import { toFormatted } from '@/utils/helpers';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function Benefits({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} className="col-12 col-lg-6">
            <div className={styles.production}>
              <Title content={content.headline} />
              <p>{toFormatted(content.text)}</p>
              <Img {...content.image2} />
            </div>
          </Reveal>
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={300} className="col-12 col-lg-6">
            <div className={styles.quality}>
              <Img {...content.image1} />
              <div>
                <h2>{content.title}</h2>
                <p>{toFormatted(content.text2)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
