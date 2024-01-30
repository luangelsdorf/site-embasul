import Img from '@/components/common/Img';
import styles from './Banner.module.scss';
import { getSizesString } from '@/utils/images';
import Button from '@/components/common/Button';
import Play from 'public/images/icons/play.svg';

export default function Banner({ content }) {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            {/* <Img fill sizes={getSizesString('col-12 col-lg-12')} {...content.cover} /> */}
            <video src="/video.mp4" /* poster="/images/banners/home.png" */ autoPlay muted loop controls={false} />
            <div className={styles.textContent}>
              <h1 className="period display-1">{content.title}</h1>
              <p>{content.text}</p>
            </div>
            <div className={styles.buttons}>
              <Button LeftIcon={Play} href={content.link1.url}>{content.link1.text}</Button>
              <Button className="btn-secondary white" href={content.link2.url}>{content.link2.text}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
