import styles from './Banner.module.scss';
import Button from '@/components/common/Button';
import Play from 'public/images/icons/play.svg';
import { toFormatted } from '@/utils/helpers';
import { apiURL } from '@/utils/env';
import Img from '@/components/common/Img';
import { getSizesString } from '@/utils/images';
import { animateBanner, slideUp } from '@/utils/animation';
import Reveal from 'react-awesome-reveal';

export default function Banner({ content }) {

  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-xl-6">
            {content.cover.data.attributes.mime.includes('video') && (
              <video onLoadedData={animateBanner} src={apiURL + content.cover.data.attributes.url} autoPlay muted loop controls={false} />
            )}
            {content.cover.data.attributes.mime.includes('image') && (
              <Img style={{ opacity: 0 }} onLoad={animateBanner} fill sizes={getSizesString('col-12 col-lg-12')} {...content.cover} />
            )}
            <Reveal triggerOnce keyframes={slideUp} duration={500} delay={300} cascade damping={0.2}>
              <div className={styles.textContent}>
                <h1 className="period display-1">{content.title}</h1>
                <p>{toFormatted(content.text)}</p>
              </div>
              <div className={styles.buttons}>
                <Button LeftIcon={Play} id="video" className="btn-primary" href={content.link1.url}>{content.link1.text}</Button>
                <Button className="btn-secondary white" href={content.link2.url}>{content.link2.text}</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
