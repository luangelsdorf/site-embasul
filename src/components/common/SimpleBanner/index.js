import Reveal from 'react-awesome-reveal';
import styles from './SimpleBanner.module.scss';
import { slideUp } from '@/utils/animation';

export default function SimpleBanner({ children, height = 600, marginTop = 80 }) {
  return (
    <>
      <div className={styles.section}>
        <Reveal triggerOnce keyframes={slideUp} duration={500} fraction={0.5} cascade damping={0.5}>
          {children}
        </Reveal>
      </div>

      <style jsx>{`
        .${styles.section} {
          height: ${height}px;
        }

        .${styles.section} > div {
          margin-top: ${marginTop}px;
        }
      `}</style>
    </>
  )
}
