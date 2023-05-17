import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import AOS from "aos";
import "aos/dist/aos.css";

import { Pagination, Autoplay, Navigation } from "swiper";

import ferrariImg from '../../assets/697316.jpeg'
import ferrariImg2 from '../../assets/758296.jpg'
import car3 from '../../assets/car3.jpg'
import car4 from '../../assets/car5.jpg'

import './slider.css'
import { gsap } from 'gsap';

export default function Slider() {

  gsap.to(".my_slider_text", { duration: 1, opacity: 1, y: -40})
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='my_slider h-[100vh] top-0 left-0 -z-10 overflow-y-hidden'>
        <Swiper
        pagination={{
            clickable:true
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        > 
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={car4} className='absolute h-[100vh] object-cover' alt="" />
            {/*  className='slider_an_text' */}
            <div className='my_card_text absolute top-[85%] w-full text-center h-1/3 text-white main_card_shadow'>
              <h2><span className='md:text-[50px] text-[40px]'>Start your engine</span></h2>
              <p><span className='md:text-[40px] text-[30px]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={ferrariImg} className='absolute h-[100vh] object-cover' alt="" />
            {/*  className='slider_an_text' */}
            <div className='my_card_text absolute top-[85%] w-full text-center h-2/3 text-white main_card_shadow'>
              <h2><span className='text-[50px]'>Start your engine</span></h2>
              <p><span className='text-[40px]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={car3} className='absolute h-[100vh] object-cover' alt="" />
            {/*  className='slider_an_text' */}
            <div className='my_card_text absolute top-[85%] w-full text-center h-1/3 text-white main_card_shadow'>
              <h2><span className='text-[50px]'>Start your engine</span></h2>
              <p><span className='text-[40px]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</span></p>
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-full h-[100vh]'>
              <img src={ferrariImg2} className='absolute h-[100vh] object-cover' alt="" />
              {/*  className='slider_an_text' */}
              <div className='my_card_text absolute top-[85%] w-full text-center h-2/3 text-white main_card_shadow'>
                <h2><span className='text-[50px]'>Start your engine</span></h2>
                <p><span className='text-[40px]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</span></p>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide><img src={ferrariImg} alt="" /></SwiperSlide>
          <SwiperSlide><img src={ferrariImg2} alt="" /></SwiperSlide> */}
      </Swiper>
    </div>

        

  )
}
