import Img from '@/components/common/Img';
import styles from './Banner.module.scss';
import { getSizesString } from '@/utils/images';
import seal from 'public/images/image 35.png';
import Image from 'next/image';

export default function Banner({ content }) {
  return (
    <div className={styles.section}>
      <Img {...content.icon} fill sizes={getSizesString('col-12 col-lg-10')} alt="" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <header>
              <p className="overline">{content.subtitle}</p>
              <h1 className="display-1">{content.title}</h1>
            </header>
            <p>{content.text}</p>
          </div>
          <div className="col-12 col-lg-4">
            <div className={styles.image}>
              <Image src={seal} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
