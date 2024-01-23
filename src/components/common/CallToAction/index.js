import Image from 'next/image';
import Button from '../Button';
import styles from './CallToAction.module.scss';
import cta from 'public/images/cta.png';
import { getSizesString } from '@/utils/images';

export default function CallToAction({ content }) {
  return (
    <div className={styles.section}>
      <Image src={cta} fill sizes={getSizesString('col-12 col-sm-12')} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className={styles.content}>
              <h2>{content.text}</h2>
              <Button className="btn-secondary black small" href={content.linkUrl}>{content.linkText}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
