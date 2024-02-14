import Img from '@/components/common/Img';
import styles from './Details.module.scss';
import { getSizesString } from '@/utils/images';
import { toFormatted } from '@/utils/helpers';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function Details({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-5 gy-lg-0">
          <div className="col-12 col-lg-6">
            <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5}>
              <div className={styles.collage}>
                {
                  content.collage.map(image => (
                    <Img sizes={getSizesString('col-12 col-md-6 col-lg-3')} key={image.id} {...image.image} />
                  ))
                }
              </div>
            </Reveal>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={300}>
              <div className={styles.textContent}>
                <h2>{content.title}</h2>
                <p>
                  {
                    content.text.split('\n\n').map((item, i) => (
                      <span key={i}>{toFormatted(item)}</span>
                    ))
                  }
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
