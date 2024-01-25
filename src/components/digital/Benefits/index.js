import Img from '@/components/common/Img';
import styles from './Benefits.module.scss';
import Title from '@/components/common/Title';

export default function Benefits({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.production}>
              <Title content={content.headline} />
              <p>{content.text}</p>
              <Img {...content.image2} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.quality}>
              <Img {...content.image1} />
              <div>
                <h2>{content.title}</h2>
                <p>{content.text2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
