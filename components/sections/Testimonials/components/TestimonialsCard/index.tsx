'use client';

import { fetcher } from '@/utils/fetcher';
import { TestimonialsType } from '@/utils/types';
import useSWR from 'swr';
import '@splidejs/react-splide/css';
import { splideOptions } from '@/utils/options';
// @ts-expect-error - suppress type checking for missing types
import { Splide, SplideSlide } from '@splidejs/react-splide';
import FadeIn from '@/utils/animations';

export const TestimonialsCard = () => {
  const { data, error } = useSWR('/api/testimonials', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Splide
      aria-label="testimonials"
      options={splideOptions}
    >
      {data.testimonials.map((testimonial: TestimonialsType) => (
        <SplideSlide
          className="TestimonialCard"
          key={testimonial.id}
        >
          <FadeIn>
            <FadeIn
              as="img"
              className="TestimonialImage"
              src={`/images/${testimonial.img}`}
              alt={testimonial.imgAlt}
            />
            <FadeIn
              as="p"
              className="TestimonialQuote"
            >
              {testimonial.description}
            </FadeIn>
            <FadeIn
              as="div"
              className="HorizontalDivider"
            />
            <FadeIn
              as="p"
              className="TestimonialName"
            >
              {testimonial.name}
            </FadeIn>
            <FadeIn
              as="p"
              className="TestimonialTitle"
            >
              {testimonial.title}
            </FadeIn>
          </FadeIn>
        </SplideSlide>
      ))}
    </Splide>
  );
};
