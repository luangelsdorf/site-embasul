import Button from '../Button';
import Img from '../Img';
import styles from './CTABanner.module.scss';
import Icon from 'public/images/icons/digital-printing.svg';
import Mail from 'public/images/icons/mail.svg';
import Arrow from 'public/images/icons/arrow-short.svg';
import { toFormatted } from '@/utils/helpers';
import { animateBanner, slideRight, slideUp } from '@/utils/animation';
import Reveal from 'react-awesome-reveal';

export default function CTABanner({ people, content }) {
  return (
    <div className={styles.section}>
      <Img style={{ opacity: 0 }} onLoad={animateBanner} fill {...content.cover} alt="" sizes="col-12 col-lg-10" />
      <div className="container">
        <div className="row">
          <div className="col-12l col-lg-5">
            <div className={styles.mainContent}>
              <Reveal triggerOnce keyframes={slideUp} duration={500} delay={400} cascade damping={0.4}>
                <h1 className="display-1">{content.title}</h1>
                <p>{toFormatted(content.text)}</p>
              </Reveal>
            </div>
          </div>
          <div className="col-12l col-lg-6 offset-lg-1">
            <Reveal triggerOnce keyframes={slideUp} duration={500} delay={800}>
              <div className={styles.cta}>
                <Reveal triggerOnce keyframes={slideRight} duration={500} delay={800} cascade damping={0.4}>
                  <h2 className="text-300 no-period">{content.ctaTitle}</h2>
                  <p>{content.ctaText}</p>
                  <div className={styles.contactButton} onClick={e => e.currentTarget.querySelector('a').click()}>
                    <div>
                      {people ? <Mail /> : <Icon />}
                    </div>
                    <div>
                      <span>{content.shortText}</span>
                      <Button link RightIcon={Arrow} href={content.link.url}>{content.link.text}</Button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
