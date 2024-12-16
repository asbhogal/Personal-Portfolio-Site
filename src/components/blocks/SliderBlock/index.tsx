'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Page } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import '@splidejs/react-splide/css';

type SliderBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'slider-block' }>;

interface Props {
  items: SliderBlock;
}

export const SliderBlock = ({ items }: Props) => {
  const [direction, setDirection] = useState<'ltr' | 'rtl' | 'ttb' | 'btt'>('ttb');
  const [wheel, setWheel] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDirection('ltr');
        setWheel(false);
      } else {
        setDirection('ttb');
        setWheel(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Splide
      key={wheel}
      tag="div"
      options={{
        arrows: false,
        autoplay: true,
        direction,
        height: '100dvh',
        paginationDirection: direction,
        type: 'loop',
        waitForTransition: true,
        wheel,
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
              src={typeof item.image === 'string' ? item.image : `${item.image?.url}`}
              alt={typeof item.image === 'string' ? '' : item.image?.altText ?? ''}
              width={676}
              height={900}
            />
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};
