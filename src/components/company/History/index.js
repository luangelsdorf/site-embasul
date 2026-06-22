import styles from './History.module.scss';
import { useEffect, useRef } from 'react';
import Future from '../Future';

export default function History({ content }) {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    function callback(entries) {
      entries.forEach(entry => {
        entry.target.classList.toggle(styles.active, entry.isIntersecting);
      });
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '-45% 0px -45% 0px' });
    const targets = timeline.querySelectorAll(':scope > .row');
    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, [content]);

  useEffect(() => {
    function setLineHeight() {
      const timeline = timelineRef.current;
      const line = lineRef.current;
      if (!timeline || !line) return;
      const rows = timeline.querySelectorAll(':scope > .row');
      if (!rows.length) return;
      const lastRow = rows[rows.length - 1];
      line.style.height = `${timeline.clientHeight - lastRow.clientHeight}px`;
    }

    setLineHeight();
    const timer = setTimeout(setLineHeight, 300);
    window.addEventListener('resize', setLineHeight);
    window.addEventListener('load', setLineHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', setLineHeight);
      window.removeEventListener('load', setLineHeight);
    };
  }, [content]);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <p className="overline">{content.headline.overline}</p>
              <h2 className="display-1">{content.headline.title}</h2>
            </header>
          </div>
        </div>

        <div className={styles.timeline} ref={timelineRef}>
          {
            content.timelineItems.map((item, i) => (
              <div className="row" key={item.id}>
                <div className="col-6 col-md-3">
                  <h3 className="heading-h2-size">{item.title}</h3>
                </div>
                <div className="col-6 col-md-3" style={{ textAlign: 'center', position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <time>{item.time}</time>
                  {i === 0 && <span className={styles.line} ref={lineRef} />}
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

      <div className={styles.future}>
        <Future content={content.future} />
      </div>
    </div>
  )
}
