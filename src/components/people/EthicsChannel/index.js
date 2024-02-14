import Button from '@/components/common/Button';
import styles from './EthicsChannel.module.scss';
import WhatsApp from 'public/images/icons/whatsapp-fill.svg';
import Phone from 'public/images/icons/phone-fill.svg';
import Globe from 'public/images/icons/globe.svg';
import { toFormatted } from '@/utils/helpers';
import Reveal, { Fade } from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function EthicsChannel({ content }) {

  const icons = [
    WhatsApp,
    Globe,
    Phone,
  ]

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} cascade damping={0.3} className="col-12 col-lg-6">
            <div>
              <h2 className="display-1">{content.title}</h2>
            </div>
            <div>
              <p>{toFormatted(content.text)}</p>
            </div>
          </Reveal>
        </div>

        <div className="row">
          <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} cascade damping={0.1} className="col-12 col-lg-4">
            {
              content.items.map((item, i) => (
                <div key={item.id}>
                  <article>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <Button LeftIcon={icons[i]} className="small" href={item.linkUrl}>{item.linkText}</Button>
                  </article>
                </div>
              ))
            }
          </Reveal>
        </div>

        <div className="row justify-content-center">
          <Fade triggerOnce duration={500} fraction={0.5} className="col-12 col-lg-10">
            <div className={styles.note}>
              <p>
                <span>*</span>
                {content.note}
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
