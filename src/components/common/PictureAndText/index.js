import styles from './PictureAndText.module.scss';

export default function PictureAndText({ title, flipped, contained, height = 'auto', children }) {
  let [first, ...rest] = children;
  return (
    <>
      {/* <style>{`
        .${styles.section} {
          height: ${height};
        }

        @media (max-width: 992px) {
          .${styles.section} {
            height: auto;
          }
        }
      `}</style> */}
      <div className={`${styles.section}${contained ? ' ' + styles.contained : ''}`} style={{ height: height }}>
        <div className={contained ? 'container' : undefined}>
          <div className={`row flex-nowrap justify-content-${flipped ? 'end' : 'start'}`}>
            <div className="col-12 col-lg-6 p-0">
              <div className={`${styles.first} first`}>
                {first}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`row flex-nowrap justify-content-${flipped ? 'start' : 'end'}`}>
            <div className="col-12 col-lg-5 p-0 d-flex justify-content-center">
              <div className={styles.last}>
                {rest}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}