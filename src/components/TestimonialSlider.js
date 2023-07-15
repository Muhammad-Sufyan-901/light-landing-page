import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function TestimonialSlider({ data }) {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      loop={true}
      grabCursor={true}>
      {data.map(({ message, image, name, email }, index) => (
        <SwiperSlide key={index} className="rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2a1428] to-[#331a35]">
          <p className="mb-8 min-h-[100px] text-[15px]">{message}</p>
          <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
            <div className="w-14">
              <img src={image} alt="Testimonial Avatar" className="mb-3 md:mb-0" />
            </div>
            <div>
              <div className="font-medium text-base">{name}</div>
              <div className="font-medium text-rose-600">{email}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialSlider;
