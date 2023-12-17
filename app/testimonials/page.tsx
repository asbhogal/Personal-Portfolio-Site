"use client";

import { motion as m } from "framer-motion";
import TestimonialsCard from "@/components/TestimonialsCard";
import type { Metadata } from "next";
import { FadeIn } from "@/utils/animations";

const metadata: Metadata = {
  title: "Testimonials | Aman Singh Bhogal",
  description: "Testimonials from clients",
};

export default function Page() {
  return (
    <>
      <main className="MainContainer">
        <FadeIn as="section" className="TestimonialsCover">
          <FadeIn as="h1" className="TestimonialsPageTitle">
            testimonials
          </FadeIn>
        </FadeIn>
        {/* <m.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="TestimonialsCover"
        >
          <m.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="TestimonialsPageTitle"
          >
            testimonials
          </m.h1>
        </m.section> */}
        <m.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="TestimonialsSection"
        >
          <TestimonialsCard />
        </m.section>
      </main>
    </>
  );
}
