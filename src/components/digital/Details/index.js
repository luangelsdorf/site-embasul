import Img from '@/components/common/Img';
import styles from './Details.module.scss';
import Title from '@/components/common/Title';
import { getSizesString } from '@/utils/images';

export default function Details({ content }) {

  const sizes = [
    getSizesString('col-12 col-md-6'),
    "(max-width: 768px) 75vw, 25vw"
  ]

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-5 gy-lg-0">
          <div className="col-12 col-lg-6">
            <div className={styles.collage}>
              {content.collage.map((image, i) => <Img sizes={sizes[i]} key={image.id} {...image.image} alt="" />)}
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.textContent}>
              <Title content={content.headline} />
              <p>{content.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
