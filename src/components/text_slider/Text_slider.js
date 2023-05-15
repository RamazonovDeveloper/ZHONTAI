import React, { useEffect } from 'react'
import { gsap } from 'gsap';

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from "swiper";

import ferrariImg from '../../assets/697316.jpeg'
import ferrariImg2 from '../../assets/758296.jpg'

import './text_slider.css'

export default function Text_slider() {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
//   let tl = gsap.timeline()
  
//   tl.to(".my_text_card_img", { right: "0%", duration: .8, opacity: 1}) 

//   tl.to(".my_text_card_texts", { top: "0%", duration: .8, opacity: 1}) 

// my_animation

// const childSplit = new SplitText(".my_animation", {
//     type: "lines",
//     linesClass: "split-child"
// });
// const parentSplit = new SplitText(".my_animation", {
// // type: "lines",
// linesClass: "split-parent"
// });

// gsap.from(childSplit.lines, {
// duration: 1.5,
// yPercent: 100,
// ease: "power4",
// stagger: 0.1
// });

  return (
    <div className='w-full h-[100vh]'>
        <div className='max-w-[1200px] mx-auto my-auto'>
        <Swiper
            className=''
            pagination={{
            clickable:true
            }}
            navigation={true}
            
            modules={[Pagination, Navigation]}
        >
            <SwiperSlide className='h-full'>
            <div className='mySwiper grid h-3/5 grid-cols-2'>
                <div className=' h-full flex items-center justify-center '>
                    <div  className='text-start relative w-[300px]'>
                        <p data-aos="fade-up" className='my_text_card_texts text-[40px]'>Lorem Ipsum is dummy text</p>
                        <p data-aos="fade-left" className='relative my_animation'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div> 
                <div  data-aos="fade-right" className='w-[80%] mx-auto relative'>
                    <img className='my_text_card_img absolute' src={ferrariImg} alt="" />
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
            <div className='mySwiper grid h-3/5 grid-cols-2'>
                <div className=' h-full flex items-center justify-center '>
                    <div  className='text-start relative w-[300px]'>
                        <p data-aos="fade-up" className='my_text_card_texts text-[40px]'>Lorem Ipsum is dummy text</p>
                        <p data-aos="fade-left" className='relative my_animation'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div> 
                <div  data-aos="fade-right" className='w-[80%] mx-auto relative'>
                    <img className='my_text_card_img absolute' src={ferrariImg2} alt="" />
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
            <div className='mySwiper grid h-3/5 grid-cols-2'>
                <div className=' h-full flex items-center justify-center '>
                    <div  className='text-start relative w-[300px]'>
                        <p data-aos="fade-up" className='my_text_card_texts text-[40px]'>Lorem Ipsum is dummy text</p>
                        <p data-aos="fade-left" className='relative my_animation'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div> 
                <div  data-aos="fade-right" className='w-[80%] mx-auto relative'>
                    <img className='my_text_card_img absolute' src={ferrariImg} alt="" />
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}
