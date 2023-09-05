import Footer from "../components/Footer";
import Header from "../components/Header";
import "../scss/index.scss";

import { motion as m } from "framer-motion";
import { useEffect } from "react";

import TestimonialsCard from "../components/TestimonialsCard";
import ScrollToTop from "../components/ScrollToTop";

const Testimonials = () => {
  useEffect(() => {
    document.title = "Testimonials | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <main className="MainContainer">
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
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Testimonials;
