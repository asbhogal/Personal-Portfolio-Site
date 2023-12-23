import type { Metadata } from "next";
import TestimonialsContent from "@/components/sections/TestimonialsContent";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Testimonials | Aman Singh Bhogal",
  description: "Testimonials from clients",
};

export default function Page() {
  return (
    <>
      {/*  <TestimonialsContent /> */}
      <CTA />
    </>
  );
}
