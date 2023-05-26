import React from 'react'
import { Navigation, Autoplay } from 'swiper';

import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import './partners.css'

import partners1 from '../assets/solis.png'
import partners2 from '../assets/trina.png'
// import partners3 from '../assets/partners7.png'
// import partners4 from '../assets/partners8.png'
// import partners5 from '../assets/partners3.png'



export default function Partners() {

  let lang = localStorage.getItem("lang")

  console.log(lang);

  return (
    <div className='container partners_section  pt-[120px] pb-7'>
      <h1 className='text-[40px] text-center'>
        {
          lang == "uz" ?
          "Bizning hamkorlarimiz"
          :
          "Наши партнеры"
        }
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={partners1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners2} alt="" /></SwiperSlide>
        {/* <SwiperSlide><img src={partners3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partners4} alt="" /></SwiperSlide> */}

        {/* <SwiperSlide>IPOTEKA BANK</SwiperSlide>
        <SwiperSlide>ANOR BANK</SwiperSlide>
        <SwiperSlide>TBC BANK</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide> */}
      </Swiper>
    </div>
  )
}
