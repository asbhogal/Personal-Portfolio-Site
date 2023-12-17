"use client";

import { motion as m } from "framer-motion";
import TestimonialsCard from "@/components/TestimonialsCard";

export default function Page() {
  return (
    <>
      <main className="MainContainer">
        <m.section
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
        </m.section>
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
