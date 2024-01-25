import Img from '@/components/common/Img';
import styles from './Highlights.module.scss';
import Title from '@/components/common/Title';

export default function Highlights({ content }) {
  console.log(content);
  return (
    <div className={styles.section}>
      <div className="container">
        {content.map((item) => (
          <div className="row justify-content-between" key={item.id}>
            <div className="col-12 col-lg-6">
              <div className={styles.image}>
                <Img {...item.icon} />
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className={styles.textContent}>
                <Title content={{ title: item.title, overline: item.subtitle }} />
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
