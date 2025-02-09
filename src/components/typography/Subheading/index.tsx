import type { JSX } from 'react';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  subheading: string;
}

export const Subheading = ({ subheading }: Props): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.separator} />
    <h2 className={styles.subheading}>
      {subheading}
    </h2>
    <div className={styles.separator} />
  </div>
);
