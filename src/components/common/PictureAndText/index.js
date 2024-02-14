import Reveal, { Fade } from 'react-awesome-reveal';
import styles from './PictureAndText.module.scss';
import { scaleDown, slideUp } from '@/utils/animation';

export default function PictureAndText({ title, flipped, contained, height = 'auto', children, ...other }) {
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
      <div className={`${styles.section}${contained ? ' ' + styles.contained : ''}`} style={{ height: height }} {...other}>
        <div className={contained ? 'container' : undefined}>
          <div className={`row flex-nowrap justify-content-${flipped ? 'end' : 'start'}`}>
            <Fade triggerOnce duration={300} fraction={0.5} className="col-12 col-lg-6 p-0">
              <div className={`${styles.first} first`}>
                {first}
              </div>
            </Fade>
          </div>
        </div>
        <div className="container">
          <div className={`row flex-nowrap justify-content-${flipped ? 'start' : 'end'}`}>
            <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} className="col-12 col-lg-5 p-0 d-flex justify-content-center">
              <div className={styles.last}>
                {rest}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  )
}