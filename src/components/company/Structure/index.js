import Image from 'next/image';
import styles from './Structure.module.scss';
import map from 'public/images/Map.png';
import PictureAndText from '@/components/common/PictureAndText';
import Img from '@/components/common/Img';
import { getSizesString } from '@/utils/images';
import CallToAction from '@/components/common/CallToAction';

export default function Structure({ content }) {

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-between align-items-center" style={{ marginBottom: '24px' }}>
          <div className="col-12 col-lg-5">
            <header>
              <p className="overline">{content.headline.overline}</p>
              <h1 className="overline">{content.headline.title}</h1>
            </header>
          </div>
          <div className="col-12 col-lg-6">
            <p>{content.text}</p>
          </div>
        </div>

        <Image src={map} alt="" priority />

        <div className="row">
          {
            content.statistics.map(stat => (
              <div key={stat.id} className="col-12 col-lg-4">
                <article className={styles.stat}>
                  <h2>
                    <div className="heading-h1-size">{stat.value.split(/(\d+)/).map((el, i) => <span key={i}>{el}</span>)}</div>
                    <div className="heading-h3-size">{stat.title}</div>
                  </h2>
                  <p>{stat.text}</p>
                </article>
              </div>
            ))
          }
        </div>

        <div className={styles.highlights}>
          {content.highlights.map((item, index) => (
            <PictureAndText key={item.id} flipped={index % 2 === 0 ? true : false} contained height="540px">
              <Img {...item.image} sizes={getSizesString('col-12 col-lg-6')} />
              <div className={styles.textContent}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
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
