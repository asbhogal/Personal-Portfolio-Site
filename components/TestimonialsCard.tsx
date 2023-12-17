import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

type TestimonialsType = {
  id: number;
  img: string;
  imgAlt: string;
  description: string;
  name: string;
  title: string;
};

export default function TestimonialsCard() {
  const { data, error } = useSWR("/api/testimonials", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  return (
    <div>
      {data.testimonials.map((testimonial: TestimonialsType) => (
        <div className="TestimonialCard" key={testimonial.id}>
          <img
            className="TestimonialImage"
            src={`/images/TestimonialImg-${testimonial.img}`}
            alt={testimonial.imgAlt}
          ></img>
          <p className="TestimonialQuote">{testimonial.description}</p>
          <div className="HorizontalDivider"></div>
          <p className="TestimonialName">{testimonial.name}</p>
          <p className="TestimonialTitle">{testimonial.title}</p>
        </div>
      ))}
    </div>
  );
}
