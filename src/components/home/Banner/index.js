import styles from './Banner.module.scss';
import Button from '@/components/common/Button';
import Play from 'public/images/icons/play.svg';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import { toFormatted } from '@/utils/helpers';
import { apiURL } from '@/utils/env';
import Img from '@/components/common/Img';
import { getSizesString } from '@/utils/images';

export default function Banner({ content }) {

  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-xl-6">
            {content.cover.data.attributes.mime.includes('video') && <video src={apiURL + content.cover.data.attributes.url} autoPlay muted loop controls={false} />}
            {content.cover.data.attributes.mime.includes('image') && <Img fill sizes={getSizesString('col-12 col-lg-12')} {...content.cover} />}
            <div className={styles.textContent}>
              <h1 className="period display-1">{content.title}</h1>
              <p>{toFormatted(content.text)}</p>
            </div>
            <div className={styles.buttons}>
              <Button LeftIcon={Play} id="video" className="btn-primary" href={content.link1.url}>{content.link1.text}</Button>
              <Button className="btn-secondary white" href={content.link2.url}>{content.link2.text}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
