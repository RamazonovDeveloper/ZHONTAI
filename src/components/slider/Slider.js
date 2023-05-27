import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import AOS from "aos";
import "aos/dist/aos.css";

import { Pagination, Autoplay } from "swiper";

import main1 from '../../assets/mainImageNewHuge.jpg'
import main2 from '../../assets/main2.png'
import main3 from '../../assets/main3.jpg'
import main4 from '../../assets/main4.png'
import main5 from '../../assets/main5.png'
import main6 from '../../assets/main6.png'
// import main7 from '../../assets/main7.png'
// import main8 from '../../assets/main8.png'

import './slider.css'

import { SliderTexts } from '../../languageData/MainSlider';

export default function Slider({lang}) {

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
            <div className='absolute my_slider_text w-full text-center pt-5 pb-12 text-white main_card_shadow px-2'>
              {/* <h2><span className='md:text-[50px] text-[40px]'>A Global Leader in Solar</span></h2> */}
              <p><span className='md:text-[40px] text-[30px] leading-[45px]'>{SliderTexts[lang].slide1}</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main2} className='absolute h-[100vh] object-cover' alt="" />
            <div className='absolute my_slider_text w-full text-center pt-5 pb-12 text-white main_card_shadow px-2'>
              <p><span className='md:text-[30px] text-[25px] md:leading-10 leading-4'>{SliderTexts[lang].slide2}</span></p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main3} className='absolute h-[100vh] object-cover' alt="" />
            <div className='absolute my_slider_text w-full text-center pt-5 pb-24 text-white main_card_shadow px-2'>
              <h2><span className='md:text-[50px] text-[40px]'>{SliderTexts[lang].slide3}</span></h2>
              {/* <p><span className='md:text-[40px] text-[30px] leading-10'>Наша цель - Обеспечение круглогодичной постоянной Автономной Солнечной электроэнергией солнечными станциями — для дома, офиса, загородного хозяйства, промышленного объекта, и многих других. Приобретая весь комплект, потребитель получает оптимально подобранные режимы работы её элементов и самое главное гарантию и надежность !</span></p> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main4} className='absolute h-[100vh] object-cover' alt="" />
            <div className='absolute my_slider_text w-full text-center pt-5 pb-12 text-white main_card_shadow px-2'>
              <p><span className='md:text-[30px] text-[25px] md:leading-10 leading-4'>{SliderTexts[lang].slide4}</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main5} className='absolute h-[100vh] object-cover' alt="" />
            <div className='absolute my_slider_text w-full text-center pt-5 pb-20 text-white main_card_shadow px-2'>
              <p><span className='md:text-[40px] text-[30px] leading-10'>{SliderTexts[lang].slide5}</span></p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className='relative w-full h-[100vh]'>
            <img src={main2} className='absolute h-[100vh] object-cover' alt="" />
            <div className='absolute my_slider_text w-full text-center h-[40%] text-white main_card_shadow px-2'>
              <p><span className='md:text-[40px] text-[30px]'>Наша цель - Обеспечение круглогодичной постоянной Автономной Солнечной электроэнергией солнечными станциями — для дома, офиса, загородного хозяйства, промышленного объекта, и многих других. Приобретая весь комплект, потребитель получает оптимально подобранные режимы работы её элементов и самое главное гарантию и надежность !</span></p>
            </div>
          </div>
        </SwiperSlide> */}
        
        
          {/* <SwiperSlide><img src={ferrariImg} alt="" /></SwiperSlide>
          <SwiperSlide><img src={ferrariImg2} alt="" /></SwiperSlide> */}
      </Swiper>
    </div>

        

  )
}
