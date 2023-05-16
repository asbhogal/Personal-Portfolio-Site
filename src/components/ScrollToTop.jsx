import { motion as m } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <m.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
