import styles from './Highlight.module.scss';
import Image from 'next/image';
import { getSizesString } from '@/utils/images';
import Play from 'public/images/icons/play.svg';
import { apiURL } from '@/utils/env';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';

export default function Highlight({ url, cover, title }) {
  return (
    <LightGallery download={false} mode="lg-fade" plugins={[lgVideo]}>
      <a className={`${styles.highlight} wrapper`} href={url} data-src={url}>
        {cover?.data?.attributes?.url && (
          <Image fill sizes={getSizesString('col-12 col-md-3')} alt="" src={apiURL + cover.data.attributes.url} />
        )}
        <span className={styles.playBadge} aria-hidden>
          <Play />
        </span>
        <p role="link">
          <span>{title}</span>
        </p>
      </a>
    </LightGallery>
  );
}
