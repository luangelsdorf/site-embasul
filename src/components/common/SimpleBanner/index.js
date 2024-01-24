import styles from './SimpleBanner.module.scss';

export default function SimpleBanner({ children, height = 600, marginTop = 80 }) {
  return (
    <>
      <div className={styles.section}>
        <div>{children}</div>
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
