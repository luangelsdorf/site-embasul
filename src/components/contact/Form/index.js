import { useContext } from 'react';
import styles from './Form.module.scss';
import { LayoutContext } from '@/utils/contexts';
import Button from '@/components/common/Button';
import Arrow from 'public/images/icons/arrow-short.svg';
import ArrowLong from 'public/images/icons/arrow-long.svg';
import { useForm } from 'react-hook-form';
import { toFormatted } from '@/utils/helpers';

export default function Form({ content }) {
  const { footer } = useContext(LayoutContext);
  const { register, handleSubmit } = useForm();

  function onSubmit(data, e) {
    e.target.parentElement.classList.add(styles.loading);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          e.target.parentElement.classList.add(styles.loaded);
        }
      })
      .catch(error => console.error(error));
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6" style={{ backgroundColor: 'var(--neutral--200)' }}>
            <div className={styles.textContent}>
              <header>
                <p className="overline">{content.headline.overline}</p>
                <h1 className="heading-h2-size">{content.headline.title}</h1>
              </header>
              <p>{toFormatted(content.text)}</p>
              <address>
                <div className={styles.contact}>
                  <div>
                    <span className="d-block">Email</span>
                    <a href={`mailto:${footer.email}`}>{footer.email}</a>
                  </div>
                  <div>
                    <span className="d-block">Telefone</span>
                    <a href={`tel:${footer.phone}`}>{footer.phone}</a>
                  </div>
                </div>
                <div className={styles.addr}>
                  <span className="d-block">Endereço</span>
                  <p>{footer.address}</p>
                </div>
              </address>
              <Button RightIcon={Arrow} link href={content.button.url} target="_blank">{content.button.text}</Button>
            </div>
          </div>
          <div className="col-12 col-lg-6" style={{ backgroundColor: 'var(--secondary--color-1)' }}>
            <div className={`${styles.form}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className="hidden">Nome</label>
                  <input {...register('name', { required: true })} className="input light w-input" placeholder="Nome" type="text" id="name" />
                </div>
                <div>
                  <label htmlFor="email" className="hidden">E-mail</label>
                  <input {...register('email', { required: true })} className="input light w-input" placeholder="E-mail" type="email" id="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="hidden">Telefone</label>
                  <input {...register('phone', { required: true })} className="input light w-input" placeholder="Telefone" type="tel" id="phone" />
                </div>
                <div>
                  <label htmlFor="company" className="hidden">Empresa</label>
                  <input {...register('company', { required: true })} className="input light w-input" placeholder="Empresa" type="text" id="company" />
                </div>
                <div>
                  <label htmlFor="message" className="hidden">Mensagem</label>
                  <textarea {...register('message', { required: true })} className="text-area light w-input" placeholder="Mensagem" id="message" />
                </div>
                <Button style={{ cursor: 'pointer' }} RightIcon={ArrowLong} className="btn-primary bg-white-hover" btnElement type="submit">{content.sendBtnLabel}</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
