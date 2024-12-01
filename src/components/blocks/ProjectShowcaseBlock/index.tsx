'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Media } from '@/payload-types';
import Image from 'next/image';
import styles from './styles.module.scss';
import '@splidejs/react-splide/css';

interface Props {
  images: Media[];
}
export const ProjectShowcaseBlock = ({ images }: Props) => (
  <Splide options={{
    autoplay: true,
  }}
  >
    {images?.map((image) => (
      <SplideSlide
        className={styles.splideSlide}
        key={image.id}
      >
        <Image
          className={styles.image}
          aria-label={image.text ?? ''}
          src={image.url ?? ''}
          alt={image.altText ?? ''}
          width={676}
          height={900}
        />
      </SplideSlide>
    ))}
  </Splide>
);
