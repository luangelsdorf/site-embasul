import Button from '@/components/common/Button';
import styles from './CodeOfConduct.module.scss';
import DownloadIcon from 'public/images/icons/download.svg';

export default function CodeOfConduct({ content }) {
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
          <div className="col-12 col-lg-4">
            <div className={styles.ethicalManual}>
              <p className=" heading-h3-size">{content.ethicalManual}</p>
              <Button RightIcon={DownloadIcon} className="btn-secondary" href={content.downloadLink.url}>{content.downloadLink.text}</Button>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className={styles.ethicalValues}>
              <p>{content.ethicalValues}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
