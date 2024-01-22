import styles from './Title.module.scss';

export default function Title({ content, align = 'start', spacing = 24, variant, children }) {
  const { title, overline } = content;

  return (
    <header className={`${styles.title} ${styles[variant] ?? ''} ${styles[align] ?? ''}`} style={{ gap: `${spacing}px` }}>
      {
        children ? (
          children
        ) : (
          <>
            {overline && <p>{overline}</p>}
            <h2>{title}</h2>
          </>
        )
      }
    </header>
  )
}