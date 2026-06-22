import { useContext, useRef, useState } from 'react';
import { AsYouType, isValidPhoneNumber } from 'libphonenumber-js';
import styles from './Form.module.scss';
import { LayoutContext } from '@/utils/contexts';
import Button from '@/components/common/Button';
import Arrow from 'public/images/icons/arrow-short.svg';
import { useRouter } from 'next/router';
import { t } from '@/utils/translations';
import ArrowLong from 'public/images/icons/arrow-long.svg';
import { useForm } from 'react-hook-form';
import { toFormatted } from '@/utils/helpers';
import Reveal from 'react-awesome-reveal';
import { slideUp } from '@/utils/animation';

// País padrão para números nacionais (digitados sem o prefixo internacional).
// Quando o usuário começa com "+", o AsYouType detecta o país automaticamente
// e aplica a formatação correspondente.
const DEFAULT_PHONE_COUNTRY = 'BR';

function formatPhone(value) {
  return new AsYouType(DEFAULT_PHONE_COUNTRY).input(value || '');
}

export default function Form({ content, resume, showInfo = true }) {
  const { footer } = useContext(LayoutContext);
  const router = useRouter();
  const { locale } = router;
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const lastPhone = useRef('');

  const email = content?.hrEmail || footer.email;
  const phone = content?.hrPhone || footer.phone;

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
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    if (data.resume && data.resume[0]) {
      data.resume.filename = data.resume[0].name;
      data.resume.type = data.resume[0].type;
      const fileContent = await readFile(data.resume[0]);
      data.resume.fileContents = fileContent.split(',')[1];
    } else {
      delete data.resume;
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
          setIsSuccess(true);
          reset();
          lastPhone.current = '';
          if (e && e.target && e.target.resumeFile) {
            e.target.resumeFile.value = '';
            const textInput = e.target.querySelector('#resume');
            if (textInput) textInput.value = '';
          }
        } else {
          setIsError(true);
        }
      })
      .catch(error => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => setIsSubmitting(false));
  }

  function onError(e) {
    console.error(e);
  }

  return (
    <div className={styles.section}>
      <Reveal triggerOnce keyframes={slideUp} duration={500} className="container">
        <div className="row justify-content-center">
          {showInfo && (
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
                      <span className="d-block">{t('contact.email', locale)}</span>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                    <div>
                      <span className="d-block">{t('contact.phone', locale)}</span>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                  </div>
                  <div className={styles.addr}>
                    <span className="d-block">{t('contact.address', locale)}</span>
                    <p>{footer.address}</p>
                  </div>
                </address>
                {content.button && (
                  <Button RightIcon={Arrow} link href={content.button.url} target="_blank">{content.button.text}</Button>
                )}
              </div>
            </div>
          )}
          <div className="col-12 col-lg-6" style={{ backgroundColor: 'var(--secondary--color-1)' }}>
            <div
              className={`${styles.form} ${isSubmitting ? styles.loading : ''}`}
              data-status={isSubmitting ? t('form.sending', locale) : ''}
            >
              {(isSuccess || isError) && (
                <div
                  className={`${styles.feedback} ${isError ? styles.feedbackError : ''}`}
                  role="status"
                  aria-live="assertive"
                >
                  <div className={styles.feedbackInner}>
                    <span className={styles.feedbackIcon} aria-hidden="true">{isSuccess ? '✓' : '!'}</span>
                    <p>{isSuccess ? t('form.success', locale) : t('form.error', locale)}</p>
                    <button
                      type="button"
                      className={styles.feedbackBtn}
                      onClick={() => { setIsSuccess(false); setIsError(false); }}
                    >
                      {isSuccess ? t('form.sendAnother', locale) : t('form.retry', locale)}
                    </button>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                  <label htmlFor="name" className="hidden">{t('form.name', locale)}</label>
                  <input {...register('name', { required: true })} className="input light w-input" placeholder={t('form.name', locale)} type="text" id="name" />
                </div>
                <div>
                  <label htmlFor="email" className="hidden">{t('form.email', locale)}</label>
                  <input {...register('email', { required: true })} className="input light w-input" placeholder={t('form.email', locale)} type="email" id="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="hidden">{t('form.phone', locale)}</label>
                  <input
                    {...register('phone', {
                      required: true,
                      validate: v => isValidPhoneNumber(v || '', DEFAULT_PHONE_COUNTRY),
                      onChange: e => {
                        const input = e.target.value;
                        const deleting = input.length < lastPhone.current.length;
                        const formatted = deleting ? input : formatPhone(input);
                        lastPhone.current = formatted;
                        e.target.value = formatted;
                      },
                    })}
                    className="input light w-input"
                    placeholder={t('form.phone', locale)}
                    type="tel"
                    inputMode="tel"
                    maxLength={25}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    id="phone" />
                  {errors.phone && <span className={styles.fieldError}>{t('form.phoneInvalid', locale)}</span>}
                </div>
                {resume ? (
                  <div onClick={e => e.currentTarget.lastChild.click()}>
                    <label htmlFor="resumeFile" className="hidden">{t('form.resume', locale)}</label>
                    <input
                      style={{ pointerEvents: 'none' }}
                      onFocus={e => {
                        e.preventDefault();
                        e.currentTarget.nextElementSibling.click();
                        e.currentTarget.blur();
                      }}
                      className="input light w-input"
                      placeholder={t('form.resumeOptional', locale)}
                      type="text"
                      id="resume" />
                    <input
                      {...register('resume', {
                        required: false,
                        onChange: e => {
                          if (e.target.files[0]) e.target.previousElementSibling.value = e.target.files[0].name;
                        }
                      })}
                      style={{ display: 'none' }}
                      className="input light w-input"
                      placeholder={t('form.resume', locale)}
                      type="file"
                      accept=".pdf, .doc, .docx, .json"
                      id="resumeFile" />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="company" className="hidden">{t('form.company', locale)}</label>
                    <input {...register('company', { required: !resume })} className="input light w-input" placeholder={t('form.company', locale)} type="text" id="company" />
                  </div>
                )}
                <div>
                  <label htmlFor="message" className="hidden">{t('form.message', locale)}</label>
                  <textarea {...register('message', { required: true })} className="text-area light w-input" placeholder={t('form.message', locale)} id="message" />
                </div>
                <Button style={{ cursor: 'pointer' }} RightIcon={ArrowLong} className="btn-primary bg-white-hover" btnElement type="submit">{content.sendBtnLabel}</Button>
                {content?.recipientEmail1 && <input type="hidden" value={content.recipientEmail1} {...register('recipients.0')} />}
                {content?.recipientEmail2 && <input type="hidden" value={content.recipientEmail2} {...register('recipients.1')} />}
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
