import Image from 'next/image';
import Button from '../Button';
import styles from './CallToAction.module.scss';
import cta from 'public/images/cta.png';
import ctaAlt from 'public/images/cta-alt.png';
import { getSizesString } from '@/utils/images';
import Play from 'public/images/icons/play.svg';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';

export default function CallToAction({ content, contact, long = false }) {
  return (
    <div className={`${styles.section} ${long ? styles.long : ''}`}>
      <div className="container" style={{ position: 'relative' }}>
        <Image quality={100} src={contact ? ctaAlt : cta} alt="" fill sizes={getSizesString('col-12 col-sm-12')} />
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className={styles.content}>
              <div>
                {
                  content.text.split('\n\n').map((item, i) => (
                    i === 0 ? <h2 key={i}>{item}</h2> : <p key={i}>{item}</p>
                  ))
                }
              </div>
              {contact ? (
                <LightGallery download={false} mode="lg-fade" plugins={[lgVideo]}>
                  <Button LeftIcon={Play} id="video" className="btn-primary" data-src={`${content.linkUrl}`}>{content.linkText}</Button>
                </LightGallery>
              ) : (
                <Button className="btn-secondary black" href={content.linkUrl}>{content.linkText}</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
