"use client";

import TestimonialsCard from "@/components/sections/TestimonialsCard";
import FadeIn from "@/utils/animations";

export default function TestimonialsContent() {
  return (
    <>
      <FadeIn as="section" className="TestimonialsCover">
        <FadeIn as="h1" className="TestimonialsPageTitle">
          testimonials
        </FadeIn>
      </FadeIn>
      <FadeIn as="section" className="TestimonialsSection">
        <TestimonialsCard />
      </FadeIn>
    </>
  );
}
