import Title from '@/components/common/Title';
import styles from './Principles.module.scss';
import Img from '@/components/common/Img';
import { toFormatted } from '@/utils/helpers';

export default function Principles({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <header>
                <p className="overline">{content.headline.overline}</p>
                <h2 className="display-1">{content.headline.title}</h2>
              </header>
              <p>{toFormatted(content.text)}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className={styles.guidelines}>
              {
                content.guidelines.map(item => (
                  <article key={item.id}>
                    <header>
                      <Img {...item.icon} />
                      <h3>{item.title}</h3>
                    </header>
                    <p>{toFormatted(item.text)}</p>
                  </article>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
