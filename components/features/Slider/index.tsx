'use client';

import { Media } from '@/payload-types';
import Image from 'next/image';
// @ts-expect-error - temporarily added to ignore missing declarations file
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  sliderContent: Media
}

export const Slider = ({ sliderContent }: Props) => {
  // look into why dynamically changing wheel prop doesn't work in splide
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [wheel, setWheel] = useState(true);

  useEffect(() => {
    const handleWheel = () => {
      if (window.innerWidth < 768) {
        setWheel(false);
      } else {
        setWheel(true);
      }
    };

    window.addEventListener('resize', handleWheel);

    return () => {
      window.removeEventListener('resize', handleWheel);
    };
  }, []);

  return (
    <Splide
      aria-label="A carousel of portfolio mockups"
      options={{
        arrows: false,
        autoplay: true,
        direction: 'ttb',
        height: '100dvh',
        paginationDirection: 'ttb',
        speed: 500,
        type: 'loop',
        waitForTransition: true,
      }}
    >
      {/* @ts-expect-error resolve content mismatch */}
      {sliderContent?.map((slide) => (
        <SplideSlide
          className={styles.slide}
          key={slide.id}
        >
          <Image
            className={styles.sliderImage}
            src={`http://localhost:3000${slide.image.url}`}
            alt={slide.image.altText}
            width={slide.image.width}
            height={slide.image.height}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
