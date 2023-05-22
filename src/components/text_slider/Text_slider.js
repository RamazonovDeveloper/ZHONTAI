import React, { useEffect } from 'react'
import { gsap } from 'gsap';

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from "swiper";

import text_img1 from '../../assets/text_slider_img_1.jpg'
import text_img2 from '../../assets/text_slider_img_2.jpg'
import text_img3 from '../../assets/text_slider_img_3.jpg'

import { HiArrowLongRight } from 'react-icons/hi2'

import './text_slider.css'

export default function Text_slider() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

return (
    <div className='my_text_slider w-full lg:h-[80vh] h-[70vh]'>
        <div className='max-w-[1200px] mx-auto my-auto'>
        <Swiper
            className=''
            pagination={{
            clickable:true
            }}
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation]}
        >
            <SwiperSlide className='h-full'>
                <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
                    <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
                        <div className=' md:w-[300px] md:mx-auto my-auto'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>Residential Solutions</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>Save on your electricity bills, reduce your carbon footprint and increase the value of your home.</p>
                            <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='w-full h-full'>
                        <div className='mx-auto lg:w-[80%] md:w-[90%]'>
                            <img className='' src={text_img1} alt="Ferrari image" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
                    <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
                        <div className=' md:w-[300px] md:mx-auto my-auto'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>Utility-Scale Solutions</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='w-full h-full'>
                        <div className='mx-auto lg:w-[80%]'>
                            <img className='' src={text_img2} alt="Ferrari image" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
                    <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
                        <div className=' md:w-[300px] md:mx-auto my-auto'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>Lorem Ipsum is dummy text</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='w-full h-full'>
                        <div className='mx-auto lg:w-[80%]'>
                            <img className='' src={text_img3} alt="Ferrari image" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/* <SwiperSlide className='h-full'>
                <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset md:mt-[120px] '>
                    <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
                        <div className=' md:w-[300px] md:mx-auto my-auto'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>Lorem Ipsum is dummy text</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='w-full'>
                        <div className='mx-auto w-[80%]'>
                            <img className='' src={ferrariImg2} alt="Ferrari image" />
                        </div>
                    </div>
                </div>
            </SwiperSlide> */}
        </Swiper>
        </div>
    </div>
  )
}
