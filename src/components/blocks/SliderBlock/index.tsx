'use client';

/* @ts-expect-error missing declaration files */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Page } from '@/payload-types';
import Image from 'next/image';
import styles from './styles.module.scss';
import '@splidejs/react-splide/css';

type SliderBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'slider-block' }>;


interface Props {
  items: SliderBlock;
}

export const SliderBlock = ({ items }: Props) => (
  <Splide options={{
    autoplay: true,
  }}
  >
    {items.cards?.map((item) => (
      <SplideSlide
        className={styles.splideSlide}
        key={item.id}
      >
        <Image
          className={styles.image}
          aria-label={item.title ?? ''}
          src={typeof item.image === 'string' ? item.image : item.image?.url ?? ''}
          alt={typeof item.image === 'string' ? '' : item.image?.altText ?? ''}
          width={676}
          height={900}
        />
      </SplideSlide>
    ))}
  </Splide>
);
