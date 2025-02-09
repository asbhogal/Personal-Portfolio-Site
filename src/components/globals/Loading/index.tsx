import React from 'react';
import type { JSX } from 'react';
import { Logo } from '../../graphics';
import styles from './styles.module.scss';

export default function Loading(): JSX.Element {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  );
}
