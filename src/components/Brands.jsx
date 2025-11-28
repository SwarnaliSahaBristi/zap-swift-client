import React from "react";
import "swiper/css";
import amazon from "../assets/brands/amazon.png";
import amazonVactor from "../assets/brands/amazon_vector.png";
import casio from "../assets/brands/casio.png";
import moonstar from "../assets/brands/moonstar.png";
import randstad from "../assets/brands/randstad.png";
import star from "../assets/brands/star.png";
import startPeople from "../assets/brands/start_people.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  amazon,
  amazonVactor,
  casio,
  moonstar,
  randstad,
  star,
  startPeople,
];

const Brands = () => {
  return (
    <div>
        <h3 className="text-2xl font-bold text-secondary text-center py-6">We've helped thousands of sales teams</h3>
      <Swiper
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
