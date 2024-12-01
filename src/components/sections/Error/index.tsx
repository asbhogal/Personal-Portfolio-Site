'use client';

import FadeIn from '@/utils/animations';
import styles from './styles.module.scss';

export const Error = () => (
  <FadeIn
    as="section"
    className={styles.errorPage}
  >
    <FadeIn
      as="h1"
    >
      404
    </FadeIn>
    <FadeIn
      as="div"
      className={styles.errorPageContainer}
    >
      <FadeIn as="h2">The page you&apos;re looking for does not exist</FadeIn>
      <FadeIn
        className={styles.text}
        as="p"
      >
        Click
        <FadeIn
          as="a"
          href="/"
        >
          here
        </FadeIn>
        {' '}
        to return home
      </FadeIn>

    </FadeIn>
  </FadeIn>
);
