import { fetcher } from "@/utils/fetcher";
import { TestimonialsType } from "@/utils/types";
import useSWR from "swr";
import "@splidejs/react-splide/css";
import { splideOptions } from "@/utils/options";
// @ts-ignore - suppress type checking for missing types
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function TestimonialsCard() {
  const { data, error } = useSWR("/api/testimonials", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Splide aria-label="testimonials" options={splideOptions}>
      {data.testimonials.map((testimonial: TestimonialsType) => (
        <SplideSlide className="TestimonialCard" key={testimonial.id}>
          <div>
            <img
              className="TestimonialImage"
              src={`/images/${testimonial.img}`}
              alt={testimonial.imgAlt}
            ></img>
            <p className="TestimonialQuote">{testimonial.description}</p>
            <div className="HorizontalDivider"></div>
            <p className="TestimonialName">{testimonial.name}</p>
            <p className="TestimonialTitle">{testimonial.title}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
