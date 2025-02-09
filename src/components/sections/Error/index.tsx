import type { JSX } from 'react';
import React from 'react';
import { FadeIn } from '../../globals';
import styles from './styles.module.scss';

export const Error = (): JSX.Element => (
  <FadeIn
    className={styles.errorPage}
  >
    <FadeIn>
      404
    </FadeIn>
    <FadeIn
      className={styles.errorPageContainer}
    >
      <FadeIn>The page you&apos;re looking for does not exist</FadeIn>
      <FadeIn
        className={styles.text}
      >
        Click
        <FadeIn>
          here
        </FadeIn>
        {' '}
        to return home
      </FadeIn>

    </FadeIn>
  </FadeIn>
);
