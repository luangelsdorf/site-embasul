import Link from 'next/link';
import styles from './Highlight.module.scss';
import Image from 'next/image';
import { getSizesString } from '@/utils/images';
import Arrow from 'public/images/icons/arrow-diagonal.svg';
import { apiURL } from '@/utils/env';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';

export default function Highlight({ url, cover, title, ...other }) {

  const Card = (props) => (
    <Link className={`${styles.highlight} wrapper`} {...props} {...other}>
      <Image fill sizes={getSizesString('col-12 col-md-3')} alt="" src={apiURL + cover.data.attributes.url} />
      <p role="link">
        <span>{title}</span>
        <Arrow style={{ display: 'inline' }} />
      </p>
    </Link>
  );

  if (url.startsWith('$')) {
    const videoURL = url.split('$').at(-1);
    return (
      <LightGallery download={false} mode="lg-fade" plugins={[lgVideo]}>
        <Card href={videoURL} data-src={videoURL} />
      </LightGallery>
    )
  }

  else {
    return <Card href={url} />
  }
}
