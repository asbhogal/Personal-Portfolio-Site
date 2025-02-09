import { constructClassName } from '@/utils/constructClassName';
import type { JSX } from 'react';
import React from 'react';
import styles from './styles.module.scss';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: 'primary' | 'secondary';
  children: React.ReactNode
  href: string;
}

export const Link = ({ children, href, type = 'primary', ...rest }: Props): JSX.Element => (
  <a
    href={href}
    className={constructClassName([
      styles[type],
    ])}
    {...rest}
  >
    {children}
  </a>
);
