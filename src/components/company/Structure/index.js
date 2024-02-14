import Image from 'next/image';
import styles from './Structure.module.scss';
import map from 'public/images/Map.png';
import PictureAndText from '@/components/common/PictureAndText';
import Img from '@/components/common/Img';
import { getSizesString } from '@/utils/images';
import CallToAction from '@/components/common/CallToAction';
import { toFormatted } from '@/utils/helpers';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function Structure({ content }) {

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-between align-items-end" style={{ marginBottom: '96px' }}>
          <div className="col-12 col-lg-5">
            <header>
              <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} cascade damping={0.3}>
                <p className="overline">{content.headline.overline}</p>
                <h1 className="display-1">{content.headline.title}</h1>
              </Reveal>
            </header>
          </div>
          <div className="col-12 col-lg-7">
            <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} delay={300}>
              <p>{toFormatted(content.text)}</p>
            </Reveal>
          </div>
        </div>

        <div className="row">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} className="col-12 col-lg-4" cascade damping={0.5}>
            {
              content.statistics.map(stat => (
                <div key={stat.id}>
                  <article className={styles.stat}>
                    <h2 className="no-period">
                      <div className="heading-h1-size">{stat.value.split(/(\d+)/).map((el, i) => <span key={i}>{el}</span>)}</div>
                      <div className="heading-h3-size">{stat.title}</div>
                    </h2>
                    <p>{stat.text}</p>
                  </article>
                </div>
              ))
            }
          </Reveal>
        </div>

        <div className={styles.highlights}>
          {content.highlights.map((item, index) => (
            <PictureAndText id={item.title} key={item.id} flipped={index % 2 === 0 ? true : false} contained height="540px">
              <Img {...item.image} sizes={getSizesString('col-12 col-lg-6')} style={{ height: '540px' }} />
              <div className={styles.textContent}>
                <h2 className="display-2 no-period">{item.title}</h2>
                <p>{toFormatted(item.text)}</p>
              </div>
            </PictureAndText>
          ))}
        </div>

        <div className={styles.cta}>
          <CallToAction content={content.cta} />
        </div>
      </div>
    </div>
  )
}
