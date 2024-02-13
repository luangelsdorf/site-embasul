import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Button.module.scss';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';

export default function Button({
  children,
  link = false,
  type = 'button',
  floating = false,
  btnElement = false,
  divElement = false,
  nativeLink = false,
  href = '#',
  className,
  LeftIcon,
  RightIcon,
  ...otherProps
}) {

  const [videoUrl, setVideoUrl] = useState('');
  const router = useRouter();
  let prefix = '';
  if (router.query.referrer) prefix = '/' + router.query.referrer;


  const Children = () => (
    <>
      {LeftIcon && <LeftIcon />}
      {children && <span>{children}</span>}
      {RightIcon && <RightIcon />}
    </>
  );

  const baseProps = {
    className: `${styles.btn} ${link ? '' : 'btn-primary'}${className ? ' ' + className : ''}`,
  };

  useEffect(() => {
    if (href.startsWith('$')) {
      setVideoUrl(href.split('$').at(-1));
    }
  }, []);

  if (href.startsWith('$')) {
    return (
      <LightGallery closeOnTap={false} showCloseIcon={true} download={false} speed={500} mobileSettings={{ showCloseIcon: true, controls: false }} plugins={[lgVideo]}>
        <button {...baseProps} type={type} {...otherProps} data-src={videoUrl}>
          <Children />
        </button>
      </LightGallery>
    )
  }

  else if (btnElement) {
    return (
      <button {...baseProps} type={type} {...otherProps}>
        <Children />
      </button>
    )
  }

  else if (divElement) {
    return (
      <div {...baseProps} role="link" {...otherProps}>
        <Children />
      </div>
    )
  }

  else if (nativeLink) {
    return (
      <a {...baseProps} href={href} {...otherProps}>
        <Children />
      </a>
    )
  }

  else {
    prefix + href
    return (
      <Link scroll={true} {...baseProps} href={prefix + href} {...otherProps}>
        <Children />
      </Link>
    )
  }
}