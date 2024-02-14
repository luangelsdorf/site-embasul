import Img from '@/components/common/Img';
import styles from './Details.module.scss';
import Title from '@/components/common/Title';
import { getSizesString } from '@/utils/images';
import { toFormatted } from '@/utils/helpers';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function Details({ content }) {

  const sizes = [
    getSizesString('col-12 col-md-6'),
    "(max-width: 768px) 75vw, 25vw"
  ]

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-5 gy-lg-0">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} className="col-12 col-lg-6">
            <div className={styles.collage}>
              {content.collage.map((image, i) => <Img sizes={sizes[i]} key={image.id} {...image.image} alt="" />)}
            </div>
          </Reveal>
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={300} className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.textContent}>
              <Title content={content.headline} />
              <p>{toFormatted(content.text)}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
