'use client';

import FadeIn from '@/utils/animations';

const AboutCover = () => (
  <FadeIn
    as="section"
    className="AboutCover"
  >
    <FadeIn
      as="h1"
      className="PageHeaderTitle"
    >
      About
    </FadeIn>
  </FadeIn>
);

export default AboutCover;
