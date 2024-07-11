"use client";

import { motion as m } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <m.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // @ts-expect-error type mismatch with latest rc version
          onClick={scrollToTop}
          className="ScrollToTop"
        >
          &#8593;
        </m.button>
      )}
    </>
  );
};

export default ScrollToTop;
