import React from 'react'
import { Navigation, Autoplay } from 'swiper';

import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import './partners.css'

export default function Partners() {
  return (
    <div className='container partners_section lg:h-[70vh] md:h-1/2  pt-[120px] pb-7'>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>TURONBANK</SwiperSlide>
        <SwiperSlide>IPOTEKA BANK</SwiperSlide>
        <SwiperSlide>ANOR BANK</SwiperSlide>
        <SwiperSlide>TBC BANK</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </div>
  )
}
