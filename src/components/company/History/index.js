import Title from '@/components/common/Title';
import styles from './History.module.scss';
import { useEffect } from 'react';

export default function History({ content }) {

  useEffect(() => {
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
        } else {
          entry.target.classList.remove(styles.active);
        }
      });
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '-45% 0px -45% 0px' });
    const targets = document.querySelectorAll(`.${styles.timeline} .row`);
    targets.forEach(target => observer.observe(target));

    return () => targets.forEach(target => observer.unobserve(target));
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <p className="overline">{content.headline.overline}</p>
              <h2 className="heading-h1-size">{content.headline.title}</h2>
            </header>
          </div>
        </div>
        <div className={styles.timeline}>
          {
            content.timelineItems.map(item => (
              <div className="row" key={item.id}>
                <div className="col-12 col-lg-3">
                  <h3 className="heading-h2-size">{item.title}</h3>
                </div>
                <div className="col-12 col-lg-3" style={{ textAlign: 'center' }}>
                  <time>{item.time}</time>
                </div>
                <div className="col-12 col-lg-5">
                  <div className={styles.details}>
                    <h4>{item.subheading}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
