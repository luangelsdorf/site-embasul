import { useRouter } from 'next/router';
import Form from '../Form';
import styles from './ResumeForm.module.scss';
import X from 'public/images/icons/x.svg';
import { useEffect } from 'react';

export default function ResumeForm({ content }) {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' ? router.back() : null;
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className={styles.wrapper}>
      <button id="close" onClick={handleClick}>
        <X />
      </button>

      <Form resume content={content} />
    </div>
  )
}
