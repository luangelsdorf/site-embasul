import Img from '@/components/common/Img';
import styles from './Highlights.module.scss';
import Title from '@/components/common/Title';
import { toFormatted } from '@/utils/helpers';

export default function Highlights({ content, design }) {
  return (
    <div className={`${styles.section} ${design ? styles.design : ''}`}>
      <div className="container">
        {
          content.map((item, i) => (
            <div className="row justify-content-between gy-5 gy-lg-5" key={item.id}>
              <div className="col-12 col-lg-6">
                <div className={styles.image}>
                  <Img {...item.icon} />
                  {(
                    i === 0 && design) && (
                      <div className={styles.tag}>
                        <div><span>+</span>30</div>
                        <div>Anos de Experiência</div>
                      </div>
                    )}
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className={styles.textContent}>
                  <Title content={{ title: item.title, overline: item.subtitle }} />
                  <p>{toFormatted(item.text)}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
