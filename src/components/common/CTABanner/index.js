import Button from '../Button';
import Img from '../Img';
import styles from './CTABanner.module.scss';
import Icon from 'public/images/icons/digital-printing.svg';
import Arrow from 'public/images/icons/arrow-short.svg';

export default function CTABanner({ content }) {
  return (
    <div className={styles.section}>
      <Img fill {...content.cover} alt="" sizes="col-12 col-lg-10" />
      <div className="container">
        <div className="row">
          <div className="col-12l col-lg-5">
            <div className={styles.mainContent}>
              <h1 className="display-1">{content.title}</h1>
              <p>{content.text}</p>
            </div>
          </div>
          <div className="col-12l col-lg-6 offset-lg-1">
            <div className={styles.cta}>
              <h2 className="text-300">{content.ctaTitle}</h2>
              <p>{content.ctaText}</p>
              <div className={styles.contactButton}>
                <div>
                  <Icon />
                </div>
                <div>
                  <span>{content.shortText}</span>
                  <Button link RightIcon={Arrow} href={content.link.url}>{content.link.text}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}