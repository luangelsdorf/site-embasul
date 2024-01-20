import Link from 'next/link';
import styles from './Highlight.module.scss';
import Image from 'next/image';
import { getSizesString } from '@/utils/images';
import Arrow from 'public/images/icons/arrow-diagonal.svg';

export default function Highlight({ coverUrl, text, href }) {
  return (
    <Link href={href} className={`${styles.highlight} wrapper`}>
      <Image fill sizes={getSizesString('col-12 col-md-3')} alt="" src={coverUrl} />
      <p role="link">
        <span>{text}</span>
        <Arrow />
      </p>
    </Link>
  )
}
