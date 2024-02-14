import Button from '@/components/common/Button';
import styles from './CodeOfConduct.module.scss';
import DownloadIcon from 'public/images/icons/download.svg';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function CodeOfConduct({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center gy-4 gy-lg-0">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} className="col-12">
            <header>
              <p className="overline">{content.headline.overline}</p>
              <h2 className="display-1">{content.headline.title}</h2>
            </header>
          </Reveal>
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={200} className="col-12 col-lg-4">
            <div className={styles.ethicalManual}>
              <p className=" heading-h3-size">{content.ethicalManual}</p>
              <Button RightIcon={DownloadIcon} className="btn-secondary d-none d-lg-inline-flex" href={content.downloadLink.url}>{content.downloadLink.text}</Button>
            </div>
          </Reveal>
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={300} className="col-12 col-lg-5">
            <div className={styles.ethicalValues}>
              <p>{content.ethicalValues}</p>
              <Button style={{ marginTop: '32px' }} RightIcon={DownloadIcon} className="btn-secondary d-inline-flex d-lg-none" href={content.downloadLink.url}>{content.downloadLink.text}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
