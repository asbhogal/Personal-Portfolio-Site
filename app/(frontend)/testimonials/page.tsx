import { TestimonialsContent } from '@/components/sections/Testimonials';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'Testimonials from clients',
  title: 'Testimonials | Aman Singh Bhogal',
};

export default function Page() {
  return (
    <React.Fragment>
      <TestimonialsContent />
    </React.Fragment>
  );
}
