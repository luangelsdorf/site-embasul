import styles from './Banner.module.scss';
import Button from '@/components/common/Button';
import Play from 'public/images/icons/play.svg';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import { toFormatted } from '@/utils/helpers';

export default function Banner({ content }) {

  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <video src="/video.mp4" autoPlay muted loop controls={false} />
            <div className={styles.textContent}>
              <h1 className="period display-1">{content.title}</h1>
              <p>{toFormatted(content.text)}</p>
            </div>
            <div className={styles.buttons}>
              <LightGallery download={false} mode="lg-fade" plugins={[lgVideo]}>
                <Button LeftIcon={Play} id="video" className="btn-primary" data-src={`${content.link1.url}`}>{content.link1.text}</Button>
              </LightGallery>
              <Button className="btn-secondary white" href={content.link2.url}>{content.link2.text}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
