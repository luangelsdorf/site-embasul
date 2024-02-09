import styles from './Banner.module.scss';
import { useContext } from 'react';
import { LayoutContext } from '@/utils/contexts';

export default function Banner() {
  /* const data = useContext(LayoutContext); */

  return (
    <div className={styles.section}>
      <iframe src={`https://maps.google.com/maps?q=${'embasul comércio de embalagens'}&z=15&ie=UTF8&output=embed`} frameBorder="0" />
    </div>
  )
}
