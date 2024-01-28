import Image from 'next/image';
import Button from '../Button';
import styles from './CallToAction.module.scss';
import cta from 'public/images/cta.png';
import { getSizesString } from '@/utils/images';

export default function CallToAction({ content, long = false }) {
  return (
    <div className={`${styles.section} ${long ? styles.long : ''}`}>
      <div className="container" style={{ position: 'relative' }}>
        <Image quality={100} src={cta} alt="" fill sizes={getSizesString('col-12 col-sm-12')} />
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
              <Button className="btn-secondary black" href={content.linkUrl}>{content.linkText}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
