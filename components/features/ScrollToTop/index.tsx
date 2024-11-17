'use client';

import { motion as m } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ScrollToTop;
