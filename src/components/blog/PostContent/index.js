import styles from './PostContent.module.scss';

export default function PostContent({ html }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: html ?? '' }} />
        </div>
      </div>
    </div>
  );
}
