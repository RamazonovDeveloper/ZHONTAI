import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import AOS from "aos";
import "aos/dist/aos.css";

import { Pagination, Autoplay, Navigation } from "swiper";

import main1 from '../../assets/main1.png'
import main2 from '../../assets/main2.png'
import main3 from '../../assets/main3.jpg'
import main4 from '../../assets/main4.png'
import main5 from '../../assets/main5.png'
import main6 from '../../assets/main6.png'
import main7 from '../../assets/main7.png'
import main8 from '../../assets/main8.png'

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
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        > 
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main1} className='absolute h-[100vh] object-cover' alt="" />
            {/*  className='slider_an_text' */}
            <div className='absolute my_slider_text w-full text-center h-[40%] text-white main_card_shadow px-2'>
              <h2><span className='md:text-[50px] text-[40px]'>A Global Leader in Solar</span></h2>
              <p><span className='md:text-[40px] text-[30px]'>Industry-leading products and customer service worldwide, with a demonstrated commitment to sustainability. </span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main2} className='absolute h-[100vh] object-cover' alt="" />
            {/*  className='slider_an_text' */}
            <div className='absolute my_slider_text w-full text-center h-[40%] text-white main_card_shadow px-2'>
              <h2><span className='md:text-[50px] text-[40px]'>A Responsible Corporate Customer</span></h2>
              <p><span className='md:text-[40px] text-[30px]'>Industry products and customer service worldwide, with a demonstrated commitment to sustainability. </span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main3} className='absolute h-[100vh] object-cover' alt="" />
            {/*  className='slider_an_text' */}
            <div className='absolute my_slider_text w-full text-center h-[40%] text-white main_card_shadow px-2'>
              <h2><span className='md:text-[50px] text-[40px]'>A Global Leader in Solar</span></h2>
              <p><span className='md:text-[40px] text-[30px]'>Industry-leading products and customer service worldwide, with a demonstrated commitment to sustainability. </span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main4} className='absolute h-[100vh] object-cover' alt="" />
            {/*  className='slider_an_text' */}
            <div className='absolute my_slider_text w-full text-center h-[40%] text-white main_card_shadow px-2'>
              <h2><span className='md:text-[50px] text-[40px]'>A Global Leader in Solar</span></h2>
              <p><span className='md:text-[40px] text-[30px]'>Industry-leading products and customer service worldwide, with a demonstrated commitment to sustainability. </span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main5} className='absolute h-[100vh] object-cover' alt="" />
            {/*  className='slider_an_text' */}
            <div className='absolute my_slider_text w-full text-center h-[40%] text-white main_card_shadow px-2'>
              <h2><span className='md:text-[50px] text-[40px]'>A Global Leader in Solar</span></h2>
              <p><span className='md:text-[40px] text-[30px]'>Industry-leading products and customer service worldwide, with a demonstrated commitment to sustainability. </span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main6} className='absolute h-[100vh] object-cover' alt="" />
            {/*  className='slider_an_text' */}
            <div className='absolute my_slider_text w-full text-center h-[40%] text-white main_card_shadow px-2'>
              <h2><span className='md:text-[50px] text-[40px]'>A Global Leader in Solar</span></h2>
              <p><span className='md:text-[40px] text-[30px]'>Industry-leading products and customer service worldwide, with a demonstrated commitment to sustainability. </span></p>
            </div>
          </div>
        </SwiperSlide>
        
          {/* <SwiperSlide><img src={ferrariImg} alt="" /></SwiperSlide>
          <SwiperSlide><img src={ferrariImg2} alt="" /></SwiperSlide> */}
      </Swiper>
    </div>

        

  )
}
