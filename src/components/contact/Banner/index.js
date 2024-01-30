import Image from 'next/image';
import styles from './Banner.module.scss';
import banner from 'public/images/banners/maps.png';
import Form from 'public/images/Form.svg';

export default function Banner({ content }) {
  return (
    <div className={styles.section}>
      <Image src={banner} alt="" />
      <div className="container">
        <Form />
      </div>
    </div>
  )
}
