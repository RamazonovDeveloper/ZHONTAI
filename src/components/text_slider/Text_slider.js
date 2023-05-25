import React, { useEffect } from 'react'
import { gsap } from 'gsap';

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from "swiper";

import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.png'
import product5 from '../../assets/product5.jpg'
import product6 from '../../assets/product6.jpg'
import product7 from '../../assets/product7.jpg'
import product8 from '../../assets/product8.png'

import { HiArrowLongRight } from 'react-icons/hi2'

import './text_slider.css'
import { Link } from 'react-router-dom';

import { text_slider } from '../../languageData/TextSliderLangData';

export default function Text_slider({lang}) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

return (
    <div className='my_products_slider'>
        <div className="container">
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
            modules={[Pagination, Navigation, Autoplay]}
        >
            {/* SLIDE 1 */}
            <SwiperSlide>
                <div className='grid grid-cols-2 h-full my_text_slider_slide'>
                    <div className='my-auto'>
                        <div className='md:pl-20 sm:pl-10  text-start'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GR3P(5-20)K</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>
                                {text_slider[lang].slide_1_text}
                            </p>
                            <Link to={"/products/S5-GR3P(5-20)K"} state={{productName:"S5-GR3P5K"}} className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img data-aos="fade-left" className='my_products_image' src={product1} alt="Product 1" />
                    </div>
                </div>
            </SwiperSlide>
            {/* SLIDE 2 */}
            <SwiperSlide>
                <div className='grid grid-cols-2 h-full my_text_slider_slide'>
                    <div className='my-auto'>
                        <div className='md:pl-20 sm:pl-10  text-start'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GR3P10K</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>{text_slider[lang].slide_2_text}</p>
                            <Link to={"/products/S5-GR3P10K"} state={{productName:"S5-GR3P10K"}} className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img data-aos="fade-left" className='my_products_image' src={product2} alt="Product 1" />
                    </div>
                </div>
            </SwiperSlide>
            {/* SLIDE 3 */}
            <SwiperSlide>
                <div className='grid grid-cols-2 h-full my_text_slider_slide'>
                    <div className='my-auto'>
                        <div className='md:pl-20 sm:pl-10 text-start my_text_slider_slide_texts'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GR3P20K</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>{text_slider[lang].slide_3_text}</p>
                            <Link to={"/products/S5-GR3P20K"} state={{productName:"S5-GR3P20K"}} className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img data-aos="fade-left" className='my_products_image' src={product3} alt="Product 1" />
                    </div>
                </div>
            </SwiperSlide>
            {/* SLIDE 4 */}
            <SwiperSlide>
                <div className='grid grid-cols-2 h-full my_text_slider_slide'>
                    <div className='my-auto'>
                        <div className='md:pl-20 sm:pl-10 text-start'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GC30K</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>{text_slider[lang].slide_4_text}</p>
                            <Link  to={"/products/S5-GC30K"} state={{productName:"S5-GC30K"}} className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img data-aos="fade-left" className='my_products_image' src={product4} alt="Product 1" />
                    </div>
                </div>
            </SwiperSlide>
            {/* SLIDE 5 */}
            <SwiperSlide>
                <div className='grid grid-cols-2 h-full my_text_slider_slide'>
                    <div className='my-auto'>
                        <div className='md:pl-20 sm:pl-10 text-start'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GC40K</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>{text_slider[lang].slide_5_text}</p>
                            <Link to={"/products/S5-GC40K"} state={{productName:"S5-GC40K"}} className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img data-aos="fade-left" className='my_products_image' src={product5} alt="Product 1" />
                    </div>
                </div>
            </SwiperSlide>

            {/* SLIDE 6 */}
            <SwiperSlide>
                <div className='grid grid-cols-2 h-full my_text_slider_slide'>
                    <div className='my-auto'>
                        <div className='md:pl-20 sm:pl-10 text-start'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GC50K</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>{text_slider[lang].slide_6_text}</p>
                            <Link to={"/products/S5-GC50K"} state={{productName:"S5-GC50K"}} className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img data-aos="fade-left" className='my_products_image' src={product6} alt="Product 1" />
                    </div>
                </div>
            </SwiperSlide>

            {/* SLIDE 7 */} 
            <SwiperSlide>
                <div className='grid grid-cols-2 h-full my_text_slider_slide'>
                    <div className='my-auto'>
                        <div className='md:pl-20 sm:pl-10 text-start'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>110K-5G</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>{text_slider[lang].slide_7_text}</p>
                            <Link to={"/products/110K-5G"} state={{productName:"110K-5G"}} className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img data-aos="fade-left" className='my_products_image' src={product7} alt="Product 1" />
                    </div>
                </div>
            </SwiperSlide>

            {/* SLIDE 8 */}
            <SwiperSlide>
                <div className='grid grid-cols-2 h-full my_text_slider_slide'>
                    <div className='my-auto'>
                        <div className='md:pl-20 sm:pl-10 text-start'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>Trina solar 560 model</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>{text_slider[lang].slide_8_text}</p>
                            <Link to={"/products/Trina_solar_560_model"} state={{productName:"Trina_solar_560_model"}} className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img data-aos="fade-left" className='my_products_image' src={product8} alt="Product 1" />
                    </div>
                </div>
            </SwiperSlide>

            {/* <SwiperSlide className='h-full'>
                <div className='flex flex-col h-full justify-between md:grid md:grid-cols-2 md:py-unset grid-cols-1'>
                    <div className='my-auto text-center relative md:pl-[30px] md:text-start flex items-center justify-center'>
                        <div className='md:w-[300px] md:mx-auto'>
                            <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GR3P(5-20)K</p>
                            <p data-aos="fade-left" className='relative md:mb-7 mb-3'>
                                GR3P(5-20)K three phase series string inverter are reliable preferred equipment for residential, small industrial and commercial pv power stations.Smaller size, higher efficiency, a variety of power models available for selection. Adopt two MPPT access, more flexible and efficient.
                            </p>
                            <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                                <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                                <HiArrowLongRight/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='w-full h-full'>
                        <div className='my-auto flex h-fit lg:w-[80%] md:w-[90%]'>
                            <img className='' src={product1} alt="Ferrari image" />
                        </div>
                    </div>
                </div>
            </SwiperSlide> */}
        </Swiper>
        </div>
    </div>
    // <div className='my_text_slider w-full lg:h-[80vh] h-[70vh]'>
    //     <div className='max-w-[1200px] mx-auto my-auto'>
    //     <Swiper
    //         className=''
    //         pagination={{
    //         clickable:true
    //         }}
    //         navigation={true}
    //         autoplay={{
    //             delay: 2500,
    //             disableOnInteraction: false,
    //         }}
    //         modules={[Pagination, Navigation]}
    //     >
                    //          SLIDE 1
    //         <SwiperSlide className='h-full'>
    //             <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1'>
    //                 <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
    //                     <div className=' md:w-[300px] md:mx-auto my-auto'>
    //                         <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GR3P(5-20)K</p>
    //                         {/* <p data-aos="fade-left" className='relative md:mb-7 mb-3'>400V: 5K/6K/8K/10K/12K/15K/17K/20K</p> */}
    //                         <p data-aos="fade-left" className='relative md:mb-7 mb-3'>
    //                             GR3P(5-20)K three phase series string inverter are reliable preferred equipment for residential, small industrial and commercial pv power stations.Smaller size, higher efficiency, a variety of power models available for selection. Adopt two MPPT access, more flexible and efficient.
    //                         </p>
    //                         <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
    //                             <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
    //                             <HiArrowLongRight/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div data-aos="fade-right" className='w-full h-full'>
    //                     <div className='mx-auto lg:w-[80%] md:w-[90%]'>
    //                         <img className='' src={product1} alt="Ferrari image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </SwiperSlide>
                // SLIDE 2
    //         <SwiperSlide className='h-full'>
    //             <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
    //                 <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
    //                     <div className=' md:w-[300px] md:mx-auto my-auto'>
    //                         <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GR3P10K</p>
    //                         <p data-aos="fade-left" className='relative md:mb-7 mb-3'>увеличенный максимальный ток от фотомодулей до 16 А на один  стринг, это позволяет устанавливать солнечные панели от 500 вт на один стринг</p>
    //                         <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
    //                             <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
    //                             <HiArrowLongRight/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div data-aos="fade-right" className='w-full h-full'>
    //                     <div className='mx-auto lg:w-[80%]'>
    //                         <img className='' src={product2} alt="Ferrari image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </SwiperSlide>
                // SLIDE 3
    //         <SwiperSlide className='h-full'>
    //             <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
    //                 <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
    //                     <div className=' md:w-[300px] md:mx-auto my-auto'>
    //                         <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GR3P20K</p>
    //                         <p data-aos="fade-left" className='relative md:mb-7 mb-3'>Сетевой инвертор SOLIS S5-GR3P20K является трехфазным инвертором. Он обладает максимальной мощностью 20 кВт и используется для преобразования постоянного тока, получаемого от солнечных панелей, в переменный ток с частотой 50 Гц или 60 Гц, который может быть использован для питания электрических устройств в доме или передан обратно в электрическую сеть.</p>
    //                         <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
    //                             <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
    //                             <HiArrowLongRight/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div data-aos="fade-right" className='w-full h-full'>
    //                     <div className='mx-auto lg:w-[80%]'>
    //                         <img className='' src={product3} alt="Ferrari image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </SwiperSlide>
                // SLIDE 4
    //         <SwiperSlide className='h-full'>
    //             <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
    //                 <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
    //                     <div className=' md:w-[300px] md:mx-auto my-auto'>
                            // <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GC30K</p>
                            // <p data-aos="fade-left" className='relative md:mb-7 mb-3'>Инвертор Solis S5-GC30K это новая модель линейки мощностью на 30 кВт.</p>
                            // <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
                            //     <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
                            //     <HiArrowLongRight/>
                            // </div>
    //                     </div>
    //                 </div>
    //                 <div data-aos="fade-right" className='w-full h-full'>
    //                     <div className='mx-auto lg:w-[80%]'>
    //                         <img className='' src={product4} alt="Ferrari image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </SwiperSlide>
                    // SLIDE 5
    //         <SwiperSlide className='h-full'>
    //             <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
    //                 <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
    //                     <div className=' md:w-[300px] md:mx-auto my-auto'>
    //                         <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GC40K</p>
    //                         <p data-aos="fade-left" className='relative md:mb-7 mb-3'>является инновационным и высокоэффективными инвертором который используется для фотоэлектрических станций для генерации электроэнергии, идеально подходят как для частных, так и промышленных солнечных электростанций.</p>
    //                         <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
    //                             <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
    //                             <HiArrowLongRight/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div data-aos="fade-right" className='w-full h-full'>
    //                     <div className='mx-auto lg:w-[80%]'>
    //                         <img className='' src={product5} alt="Ferrari image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </SwiperSlide>
                // SLIDE 6
    //         <SwiperSlide className='h-full'>
    //             <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
    //                 <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
    //                     <div className=' md:w-[300px] md:mx-auto my-auto'>
    //                         <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>S5-GC50K</p>
    //                         <p data-aos="fade-left" className='relative md:mb-7 mb-3'>является инновационным и высокоэффективными инвертором который используется для фотоэлектрических станций для генерации электроэнергии, идеально подходят как для частных, так и промышленных солнечных электростанций.</p>
    //                         <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
    //                             <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
    //                             <HiArrowLongRight/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div data-aos="fade-right" className='w-full h-full'>
    //                     <div className='mx-auto lg:w-[80%]'>
    //                         <img className='' src={product6} alt="Ferrari image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </SwiperSlide>
                // SLIDE 7
    //         <SwiperSlide className='h-full'>
    //             <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
    //                 <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
    //                     <div className=' md:w-[300px] md:mx-auto my-auto'>
    //                         <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>110K-5G</p>
    //                         <p data-aos="fade-left" className='relative md:mb-7 mb-3'>является инновационным и высокоэффективными инвертором который используется для фотоэлектрических станций для генерации электроэнергии, идеально подходят как для частных, так и промышленных солнечных электростанций.</p>
    //                         <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
    //                             <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
    //                             <HiArrowLongRight/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div data-aos="fade-right" className='w-full h-full'>
    //                     <div className='mx-auto lg:w-[80%]'>
    //                         <img className='' src={product7} alt="Ferrari image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </SwiperSlide>
                // SLIDE 8
    //         <SwiperSlide className='h-full'>
    //             <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset grid-cols-1 md:mt-[120px] '>
    //                 <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
    //                     <div className=' md:w-[300px] md:mx-auto my-auto'>
    //                         <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>Trina solar 560 model</p>
    //                         <p data-aos="fade-left" className='relative md:mb-7 mb-3'>является инновационным и высокоэффективными инвертором который используется для фотоэлектрических станций для генерации электроэнергии, идеально подходят как для частных, так и промышленных солнечных электростанций.</p>
    //                         <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
    //                             <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
    //                             <HiArrowLongRight/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div data-aos="fade-right" className='w-full h-full'>
    //                     <div className='mx-auto lg:w-[80%]'>
    //                         <img className='' src={product8} alt="Ferrari image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </SwiperSlide>
    //         {/* <SwiperSlide className='h-full'>
    //             <div className='flex flex-col justify-between py-8 md:grid md:grid-cols-2 md:py-unset md:mt-[120px] '>
    //                 <div className='text-center relative h-[40vh] md:pl-[30px] md:text-start flex items-center justify-center'>
    //                     <div className=' md:w-[300px] md:mx-auto my-auto'>
    //                         <p data-aos="fade-up" className='md:text-[40px] text-[30px]'>Lorem Ipsum is dummy text</p>
    //                         <p data-aos="fade-left" className='relative md:mb-7 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    //                         <div className='flex items-center w-fit mx-auto md:ml-0 md:mr-auto'>
    //                             <a data-aos="fade-right" className='text-sm underline flex mr-2' href="#">READ MORE</a>
    //                             <HiArrowLongRight/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div data-aos="fade-right" className='w-full'>
    //                     <div className='mx-auto w-[80%]'>
    //                         <img className='' src={ferrariImg2} alt="Ferrari image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </SwiperSlide> */}
    //     </Swiper>
    //     </div>
    // </div>
  )
}
