import Title from '@/components/common/Title';
import styles from './Certificates.module.scss';
import Img from '@/components/common/Img';
import { toFormatted } from '@/utils/helpers';

export default function Certificates({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-12 col-lg-6">
            <Title content={content.headline} />
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <p>{toFormatted(content.text)}</p>
          </div>
        </div>
        <div className="row">
          {
            content.certificates.map(cert => (
              <div key={cert.id} className="col-12 col-lg-4">
                <Img {...cert.image} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
