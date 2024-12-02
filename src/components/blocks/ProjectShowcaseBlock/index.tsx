'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Media, Project } from '@/payload-types';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import '@splidejs/react-splide/css';
import { Subheading } from '../../typography';

interface Props {
  images: Project['showcase'];
}
export const ProjectShowcaseBlock = ({ images }: Props) => (
  <div className={styles.container}>
    <Subheading subheading="showcase" />
    <Splide options={{
      arrows: false,
      autoplay: true,
      breakpoints: {
        1024: {
          perPage: 1,
        },
      },
      gap: '1rem',
      perPage: 3,
      type: 'loop',
    }}
    >
      {images?.map((showcase) => (
        showcase.images?.map((image) => {
          const mediaImage = image.image as Media;
          return (
            <SplideSlide
              className={styles.splideSlide}
              key={image.id}
            >
              <Image
                className={styles.image}
                aria-label={mediaImage.altText ?? ''}
                src={`/images/media/${mediaImage.filename}`}
                alt={mediaImage.altText ?? ''}
                width={676}
                height={900}
              />
            </SplideSlide>
          );
        })
      ))}
    </Splide>
  </div>
);
