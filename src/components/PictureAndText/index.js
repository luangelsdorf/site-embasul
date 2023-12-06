import styles from './PictureAndText.module.scss';

export default function PictureAndText({ title, flipped, children }) {
  let [first, ...rest] = children;
  return (
    <div className={`${styles.section}${flipped ? ' ' + styles.flipped : ''}`}>
      <div>
        <div className={`row justify-content-${flipped ? 'end' : 'start'}`}>
          <div className="col-12 col-lg-6">
            <div className={styles.first}>
              {first}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`row justify-content-${flipped ? 'start' : 'end'}`}>
          <div className="col-12 col-lg-5">
            <div className={styles.last}>
              <h2>
                {
                  title.split('\\n').map((line, index) => (
                    <span key={index}>
                      <span>{line}</span>
                      <br />
                    </span>
                  ))
                }
              </h2>
              <p>
                {rest}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}