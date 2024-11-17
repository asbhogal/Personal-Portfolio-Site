'use client';

import FadeIn from '@/utils/animations';
import React from 'react';
import { TestimonialsCard } from '../TestimonialsCard';

export const TestimonialsContent = () => (
  <React.Fragment>
    <FadeIn
      as="section"
      className="TestimonialsCover"
    >
      <FadeIn
        as="h1"
        className="TestimonialsPageTitle"
      >
        testimonials
      </FadeIn>
    </FadeIn>
    <FadeIn
      as="section"
      className="TestimonialsSection"
    >
      <TestimonialsCard />
    </FadeIn>
  </React.Fragment>
);
