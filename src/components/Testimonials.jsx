import Footer from "./Footer";
import Header from "./Header";
import "../scss/index.scss";

import { motion as m } from "framer-motion";
import { useEffect } from "react";

import TestimonialsCard from "./TestimonialsCard";
import ScrollToTop from "./ScrollToTop";

const Testimonials = () => {
  useEffect(() => {
    document.title = "Testimonials | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="TestimonialsCover"
      >
        <h1 className="TestimonialsPageTitle">testimonials</h1>
      </m.section>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="TestimonialsSection"
      >
        <TestimonialsCard />
      </m.section>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Testimonials;
