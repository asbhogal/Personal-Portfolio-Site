import type { JSX } from 'react';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

export const VisuallyHidden = ({ children }: Props): JSX.Element => (
  <div className={styles.visuallyHidden}>
    {children}
  </div>
);
