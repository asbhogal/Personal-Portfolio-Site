'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Media, Project } from '@/payload-types';
import Image from 'next/image';
import type { JSX } from 'react';
import React from 'react';
import styles from './styles.module.scss';
import '@splidejs/react-splide/css';
import { Subheading } from '../../typography';

interface Props {
  images: Project['showcase'];
}

const isMedia = (image: unknown): image is Media => typeof image === 'object' && image !== null && 'url' in image && 'altText' in image;

export const ProjectShowcaseBlock = ({ images }: Props): JSX.Element => (
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
      gap: '10px',
      perPage: 3,
      type: 'loop',
    }}
    >
      {images?.map((showcase) => (
        showcase.images?.map((image) => {
          if (isMedia(image.image)) {
            const mediaImage = image.image;
            return (
              <SplideSlide
                className={styles.splideSlide}
                key={image.id}
              >
                <Image
                  className={styles.image}
                  aria-label={mediaImage.altText}
                  src={`${mediaImage.url}`}
                  alt={mediaImage.altText}
                  width={676}
                  height={900}
                />
              </SplideSlide>
            );
          }
          return null;
        })
      ))}
    </Splide>
  </div>
);
