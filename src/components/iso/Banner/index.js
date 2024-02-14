import Img from '@/components/common/Img';
import styles from './Banner.module.scss';
import { getSizesString } from '@/utils/images';
import seal from 'public/images/image 35.png';
import Image from 'next/image';
import { toFormatted } from '@/utils/helpers';
import Reveal from 'react-awesome-reveal';
import { animateBanner, slideUp } from '@/utils/animation';

export default function Banner({ content }) {
  return (
    <div className={styles.section}>
      <Img style={{ opacity: 0 }} onLoad={animateBanner} {...content.icon} fill sizes={getSizesString('col-12 col-lg-10')} alt="" />
      <div className="container">
        <div className="row justify-content-center">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} className="col-12 col-lg-7">
            <div>
              <header>
                <p className="overline">{content.subtitle}</p>
                <h1 className="display-1">{content.title}</h1>
              </header>
              <p>{toFormatted(content.text)}</p>
            </div>
          </Reveal>
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={200} className="col-12 col-lg-4 d-none d-lg-block">
            <div className={styles.image}>
              <Image src={seal} alt="" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
