import Title from '@/components/common/Title';
import styles from './Sustainability.module.scss';
import Button from '@/components/common/Button';
import Img from '@/components/common/Img';
import { getSizesString } from '@/utils/images';
import Arrow from 'public/images/icons/arrow-long.svg';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function Sustainability({ content }) {
  return (
    <div className={styles.section}>
      <Img {...content.cover} fill sizes={getSizesString('col-10 col-lg-12')} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5}>
              <div className={styles.textContent}>
                <Title content={content.headline} align="center" />
                <Button RightIcon={Arrow} href={content.link.url}>{content.link.text}</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
