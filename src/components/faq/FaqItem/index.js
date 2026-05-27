import styles from './FaqItem.module.scss';

export default function FaqItem({ question, answer }) {
  return (
    <details className={styles.item}>
      <summary className={styles.question}>
        <span>{question}</span>
        <span className={styles.icon} aria-hidden>
          <span />
          <span />
        </span>
      </summary>
      <div className={styles.answer} dangerouslySetInnerHTML={{ __html: answer ?? '' }} />
    </details>
  );
}
