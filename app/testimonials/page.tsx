import type { Metadata } from "next";
import TestimonialsContent from "@/components/TestimonialsContent";

export const metadata: Metadata = {
  title: "Testimonials | Aman Singh Bhogal",
  description: "Testimonials from clients",
};

export default function Page() {
  return <TestimonialsContent />;
}
