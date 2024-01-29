import Title from '@/components/common/Title';
import styles from './Policy.module.scss';
import Button from '@/components/common/Button';
import DownloadIcon from 'public/images/icons/download.svg';
import Img from '@/components/common/Img';

export default function Policy({ content }) {
  const colors = [
    '#2D9A47',
    '#EF412A',
    '#00ADD8',
    '#8F1838',
    '#F36E24',
    '#CD8B2A',
  ];
  
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <header>
              <p className="overline">{content.headline.overline}</p>
              <h2 className="display-1">{content.headline.title}</h2>
            </header>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.text}>
              <p>{content.text}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className={styles.download}>
              <p className="heading-h3-size">{content.cta}</p>
              <Button className="btn-secondary" LeftIcon={DownloadIcon} href={content.downloadLink.url}>{content.downloadLink.text}</Button>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <ul className={styles.items}>
              {
                content.items.map((item, i) => (
                  <li key={item.id} style={{backgroundColor: colors[i]}}>
                    <div className="heading-h3-size">{item.text}</div>
                    <Img {...item.icon} />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
