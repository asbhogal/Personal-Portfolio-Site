import testimonialData from "../js/testimonialData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Thumbs, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsCard = () => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode, Pagination, Thumbs, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}
      autoplay={true}
      loop={true}
      freeMode={true}
      breakpoints={{
        1440: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        744: {
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 1,
        },
      }}
    >
      {testimonialData.map((data) => (
        <SwiperSlide className="TestimonialCard" key={data.id}>
          <div>
            <img
              className="TestimonialImage"
              src={require(`/src/assets/images/TestimonialImg-${data.img}`)}
            ></img>
            <p className="TestimonialQuote">{data.description}</p>
            <div className="HorizontalDivider"></div>
            <p className="TestimonialName">{data.name}</p>
            <p className="TestimonialTitle">{data.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsCard;
