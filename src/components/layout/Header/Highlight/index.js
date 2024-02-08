import Link from 'next/link';
import styles from './Highlight.module.scss';
import Image from 'next/image';
import { getSizesString } from '@/utils/images';
import Arrow from 'public/images/icons/arrow-diagonal.svg';
import { apiURL } from '@/utils/env';

export default function Highlight({ url, cover, title, ...other }) {
  return (
    <Link href={url} className={`${styles.highlight} wrapper`} {...other}>
      <Image fill sizes={getSizesString('col-12 col-md-3')} alt="" src={apiURL + cover.data.attributes.url} />
      <p role="link">
        <span>{title}</span>
        <Arrow style={{display: 'inline'}} />
      </p>
    </Link>
  )
}
