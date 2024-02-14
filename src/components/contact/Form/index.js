import { useContext } from 'react';
import styles from './Form.module.scss';
import { LayoutContext } from '@/utils/contexts';
import Button from '@/components/common/Button';
import Arrow from 'public/images/icons/arrow-short.svg';
import ArrowLong from 'public/images/icons/arrow-long.svg';
import { useForm } from 'react-hook-form';
import { toFormatted } from '@/utils/helpers';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

export default function Form({ content, resume }) {
  const { footer } = useContext(LayoutContext);
  const { register, handleSubmit } = useForm();

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result)
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function onSubmit(data, e) {
    e.target.parentElement.classList.add(styles.loading);

    if (data.resume) {
      data.resume.filename = data.resume[0].name;
      data.resume.type = data.resume[0].type;
      const content = await readFile(data.resume[0]);
      data.resume.fileContents = content.split(',')[1];
    }

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

  function onError(e) {
    console.error(e);
  }

  return (
    <div className={styles.section}>
      <Reveal triggerOnce keyframes={slideUp} duration={500} className="container">
        <div className="row justify-content-center">
          {
            !resume && (
              <div className="col-12 col-lg-6" style={{ backgroundColor: 'var(--neutral--200)' }}>
                <div className={styles.textContent}>
                  <header>
                    <p className="overline">{content.headline.overline}</p>
                    <h1 className="display-2">{content.headline.title}</h1>
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
            )
          }
          <div className={resume ? 'col-12 col-md-8 col-xxl-6' : 'col-12 col-lg-6'} style={{ backgroundColor: 'var(--secondary--color-1)' }}>
            <div className={`${styles.form}`}>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
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
                  <input {...register('phone', { required: true })} className="input light w-input" placeholder="Telefone" type="text" id="phone" />
                </div>
                {resume ? (
                  <div onClick={e => e.currentTarget.lastChild.click()}>
                    <label htmlFor="resumeFile" className="hidden">Currículo</label>
                    <input
                      style={{ pointerEvents: 'none' }}
                      onFocus={e => {
                        e.preventDefault();
                        e.currentTarget.nextElementSibling.click();
                        e.currentTarget.blur();
                      }}
                      className="input light w-input"
                      placeholder="Anexar Currículo"
                      type="text"
                      id="resume" />
                    <input
                      {...register('resume', {
                        required: true,
                        onChange: e => {
                          if (e.target.files[0]) e.target.previousElementSibling.value = e.target.files[0].name;
                        }
                      })}
                      style={{ display: 'none' }}
                      className="input light w-input"
                      placeholder="Anexar Currículo"
                      type="file"
                      accept=".pdf, .doc, .docx, .json"
                      id="resumeFile" />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="company" className="hidden">Empresa</label>
                    <input {...register('company', { required: !resume })} className="input light w-input" placeholder="Empresa" type="text" id="company" />
                  </div>
                )}
                <div>
                  <label htmlFor="message" className="hidden">Mensagem</label>
                  <textarea {...register('message', { required: true })} className="text-area light w-input" placeholder="Mensagem" id="message" />
                </div>
                <Button style={{ cursor: 'pointer' }} RightIcon={ArrowLong} className="btn-primary bg-white-hover" btnElement type="submit">{content.sendBtnLabel}</Button>
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
