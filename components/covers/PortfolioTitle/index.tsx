'use client';

import FadeIn from '@/utils/animations';

export default function PortfolioTitle() {
  return (
    <FadeIn
      as="section"
      className="ProjectsTitle"
    >
      <FadeIn as="h1">Portfolio</FadeIn>
    </FadeIn>
  );
}
