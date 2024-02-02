import styles from './Banner.module.scss';
import Button from '@/components/common/Button';
import Play from 'public/images/icons/play.svg';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';

export default function Banner({ content }) {

  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <video src="/video.mp4" autoPlay muted loop controls={false} />
            <div className={styles.textContent}>
              <h1 className="period display-1">{content.title}</h1>
              <p>{content.text}</p>
            </div>
            <div className={styles.buttons}>
              <LightGallery download={false} mode="lg-fade" plugins={[lgVideo]}>
                <button className="btn-primary" data-src={`${content.link1.url}`}>
                  <Play style={{marginRight: '8px'}} />
                  <span>{content.link1.text}</span>
                </button>
              </LightGallery>
              <Button className="btn-secondary white" href={content.link2.url}>{content.link2.text}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
