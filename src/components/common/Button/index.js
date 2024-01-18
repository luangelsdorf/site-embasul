import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import styles from './Button.module.scss';

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

  const router = useRouter();
  let prefix = '';
  if (router.query.referrer) prefix = '/' + router.query.referrer;


  const Children = () => (
    <>
      {LeftIcon && <LeftIcon />}
      {
        children && <span>{children}</span>
      }
      {RightIcon && <RightIcon />}
    </>
  );

  const baseProps = {
    className: `${styles.btn} ${link ? '' : 'btn-primary'}${className ? ' ' + className : ''}`,
  };

  if (btnElement) {
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