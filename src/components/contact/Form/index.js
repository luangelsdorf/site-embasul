import { useContext } from 'react';
import styles from './Form.module.scss';
import { LayoutContext } from '@/utils/contexts';
import Button from '@/components/common/Button';
import Arrow from 'public/images/icons/arrow-short.svg';
import ArrowLong from 'public/images/icons/arrow-long.svg';

export default function Form({ content }) {
  const { footer } = useContext(LayoutContext);
  
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
              <p>{content.text}</p>
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
              <Button RightIcon={Arrow} link href={content.button.url}>{content.button.text}</Button>
            </div>
          </div>
          <div className="col-12 col-lg-6" style={{ backgroundColor: 'var(--secondary--color-1)' }}>
            <div className={styles.form}>
              <form onSubmit={e => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="hidden">Nome</label>
                  <input className="input light w-input" placeholder="Nome" type="text" id="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="hidden">E-mail</label>
                  <input className="input light w-input" placeholder="E-mail" type="email" id="email" required />
                </div>
                <div>
                  <label htmlFor="phone" className="hidden">Telefone</label>
                  <input className="input light w-input" placeholder="Telefone" type="tel" id="phone" required />
                </div>
                <div>
                  <label htmlFor="company" className="hidden">Empresa</label>
                  <input className="input light w-input" placeholder="Empresa" type="text" id="company" required />
                </div>
                <div>
                  <label htmlFor="message" className="hidden">Mensagem</label>
                  <textarea className="text-area light w-input" placeholder="Mensagem" id="message" required />
                </div>
                <Button RightIcon={ArrowLong} className="btn-primary bg-white-hover" type="submit">{content.sendBtnLabel}</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
