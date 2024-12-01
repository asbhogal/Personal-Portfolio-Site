'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Page } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import '@splidejs/react-splide/css';

type SliderBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'slider-block' }>;

interface Props {
  items: SliderBlock;
}

export const SliderBlock = ({ items }: Props) => (
  <Splide
    tag="div"
    options={{
      arrows: false,
      autoplay: true,
      direction: 'ttb',
      height: '100dvh',
      paginationDirection: 'ttb',
      type: 'loop',
      waitForTransition: true,
      wheel: true,
    }}
  >
    {items.cards?.map((item) => (
      <SplideSlide
        tag="div"
        className={styles.splideSlide}
        key={item.id}
      >
        <Link
          title={item.title ?? ''}
          href={`/work/${item.link}`}
        >
          <Image
            className={styles.image}
            aria-label={item.title ?? ''}
            src={typeof item.image === 'string' ? item.image : item.image?.url ?? ''}
            alt={typeof item.image === 'string' ? '' : item.image?.altText ?? ''}
            width={676}
            height={900}
          />
        </Link>
      </SplideSlide>
    ))}
  </Splide>
);
