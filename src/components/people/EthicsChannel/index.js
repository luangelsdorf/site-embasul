import Button from '@/components/common/Button';
import styles from './EthicsChannel.module.scss';
import WhatsApp from 'public/images/icons/whatsapp-fill.svg';
import Phone from 'public/images/icons/phone-fill.svg';
import Globe from 'public/images/icons/globe.svg';

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
          <div className="col-12 col-lg-6">
            <h2 className="display-1">{content.title}</h2>
          </div>
          <div className="col-12 col-lg-6">
            <p>{content.text}</p>
          </div>
        </div>

        <div className="row">
          {
            content.items.map((item, i) => (
              <div key={item.id} className="col-12 col-lg-4">
                <article>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Button LeftIcon={icons[i]} className="small" href={item.linkUrl}>{item.linkText}</Button>
                </article>
              </div>
            ))
          }
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className={styles.note}>
              <p>
                <span>*</span>
                {content.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
