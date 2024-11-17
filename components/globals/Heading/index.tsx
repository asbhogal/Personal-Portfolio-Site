'use client';

import FadeIn from '@/utils/animations';
import Image from 'next/image';

interface Props {
  title: string;
}

export const Heading = ({ title }: Props) => (
  <FadeIn
    as="section"
    className="HomePageSection"
  >
    <Image
      src="/images/Home/PageTitle.svg"
      alt="The name 'Aman Singh Bhogal' in large, elegant typeface"
      width={2560}
      height={600}
      priority
      className="HomePageImage"
    />
    <FadeIn
      as="h1"
      className="sr-only"
    >
      {title}
    </FadeIn>
  </FadeIn>
);
