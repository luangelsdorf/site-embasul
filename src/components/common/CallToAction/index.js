import Image from 'next/image';
import Button from '../Button';
import styles from './CallToAction.module.scss';
import cta from 'public/images/cta.png';
import pattern from 'public/images/pattern.svg';
import ctaAlt from 'public/images/cta-alt.png';
import { getSizesString } from '@/utils/images';
import Play from 'public/images/icons/play.svg';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function CallToAction({ content, contact, long = false }) {
  return (
    <div className={`${styles.section} ${long ? styles.long : ''}`}>
      <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5}>
        <div className="container" style={{ position: 'relative', backgroundColor: 'var(--accent--primary-1)' }}>
          {!contact && <Image src="/images/pattern.svg" alt="" fill />}
          <Image quality={100} src={contact ? ctaAlt : cta} alt="" fill sizes={getSizesString('col-12 col-sm-12')} />
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className={styles.content}>
                <div>
                  {
                    content.text.split('\n\n').map((item, i) => (
                      i === 0 ? <h2 className="display-2" key={i}>{item}</h2> : <p key={i}>{item}</p>
                    ))
                  }
                </div>
                {contact ? (
                  <Button LeftIcon={Play} id="video" className="btn-primary" href={content.linkUrl}>{content.linkText}</Button>
                ) : (
                  <Button className="btn-secondary black" href={content.linkUrl}>{content.linkText}</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
