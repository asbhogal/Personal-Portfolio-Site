'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import { FadeIn } from '../FadeIn';

interface Props {
  title: string;
}

export const Heading = ({ title }: Props) => (
  <FadeIn
    className={styles.homePageSection}
  >
    <Image
      src="/images/Home/PageTitle.svg"
      alt="The name 'Aman Singh Bhogal' in large, elegant typeface"
      width={2560}
      height={600}
      priority
      className={styles.homePageImage}
    />
    <FadeIn
      className="sr-only"
    >
      {title}
    </FadeIn>
  </FadeIn>
);
