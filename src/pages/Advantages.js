import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

import {about} from '../languageData/AdvantagesLang'

import adv_img1 from '../assets/adv_image_1.png'
import adv_img2 from '../assets/adv_image_2.png'
import adv_img3 from '../assets/adv_image_3.png'
import adv_img4 from '../assets/adv_image_4.png'
import adv_img5 from '../assets/adv_image_5.png'
import adv_img6 from '../assets/adv_accumlator.png'

import { FiChevronsRight, FiChevronsLeft, FiChevronsUp, FiChevronsDown } from 'react-icons/fi'

export default function Advantages({lang}) {

    
    AOS.init();
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    //   }, []);

  return (
    <div className='container'>
        {/* <div className='pt-28'>
            <h1 className='text-4xl text-green-500 mb-3'>ON-GRID tizimi tarmoqli quyosh stansiyalarining afzalliklari:</h1>
            <ul className='list-disc pl-10'>
                <li> Tekin elektr quvvati.</li>
                <li> O‘zingizning quyosh elektr stantsiyangizni o‘rnatganingizdan so‘ng, siz endi elektr to‘lovlarini yoki uning bir qismini to‘lamaysiz. Bundan tashqari, ortiqcha elektr energiyasini davlatga sotishingiz mumkin.</li>
                <li> Atrof-muhit uchun xavfsiz .</li>
                <li> Barqaror, ishonchli va mustaqil elektr energiyasi ta’minoti manbasi.</li>
            </ul>
            <div className='py-5'>
                <div className='flex justify-between items-center'>
                    <div  data-aos="fade-right" className='relative w-fit'>
                        <img src={adv_img1} alt="" />
                        <FiChevronsRight size={"50px"} className='text-green-500 absolute top-[40%] -right-14'/>
                    </div>
                    <div data-aos="fade-right" className='relative w-fit'>
                        <img src={adv_img2} alt="" />
                        <FiChevronsRight size={"50px"} className='text-green-500 absolute top-[40%] -right-14'/>
                    </div>
                    <div data-aos="fade-right" className='relative w-fit'>
                        <img src={adv_img3} alt="" />   
                        <FiChevronsRight size={"50px"} className='text-green-500 absolute top-[40%] -right-20'/>
                        <FiChevronsLeft size={"50px"} className='text-red-500 absolute top-[55%] -right-20'/>
                    </div>
                    <img data-aos="fade-left" src={adv_img4} alt="" />
                </div>
                <div className='ml-28 relative' data-aos="fade-up">
                    <FiChevronsUp size={"50px"} className='text-red-500 absolute -top-[10%] left-[30%]'/>
                    <FiChevronsDown size={"50px"} className='text-green-500 absolute -top-[10%] left-[25%]'/>
                    <img src={adv_img5} alt="" />
                </div>
            </div>
        </div>   */}
        
        <div className='pt-28'>
            <h1 className='text-4xl text-green-500 mb-3'>{about[lang].adv1_title}</h1>
            <ul className='grid md:grid-cols-4 gap-2 my-8 sm:grid-cols-2 grid-cols-1'>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-4 flex justify-center items-center p-4'>{about[lang].adv1_text1}</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center py-4'>{about[lang].adv1_text2}</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center sm:mt-6 mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text3}</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text4}</li>
            </ul>
            <div className='py-5'>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-5 sm:gap-0'>
                    <div  data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full '>
                        <img src={adv_img1} className='w-[70%] lg:w-full' alt="" />
                        <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 md:-right-10 -right-8 lg:text-[50px] text-[40px]'/>
                        <p className='uppercase text-green-500 absolute md:top-[95%] lg:top-[90%] font-semibold text-[20px] top-[100%]'>{about[lang].text_solar}</p>
                    </div>
                    {/* INVERTOR IMAGE */}
                    <div data-aos="fade-right" className='relative w-[80%] flex items-center justify-center h-full pl-5 lg:pl-0'>
                        <img src={adv_img2} className='w-[70%] lg:w-full' alt="" />
                        <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 -right-6 lg:text-[50px] text-[40px]'/>
                        <p className='uppercase text-green-500 absolute md:top-[70%] font-semibold text-[20px] top-[80%]'>{about[lang].text_invertor}</p>
                    </div>
                    <div data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full'>
                        <img src={adv_img3} className='w-[70%] lg:w-full' alt="" />    
                        <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-20 -right-10 lg:text-[50px] text-[40px]'/>
                        <FiChevronsLeft className=' text-red-500 absolute top-[55%] lg:-right-20 -right-10 lg:text-[50px] text-[40px]'/>
                        <p className='uppercase text-green-500 absolute top-[80%] font-semibold text-[20px]'>{about[lang].text_counter}</p>
                    </div>
                    {/* ELECTRIC STANSION */}
                    <div className='relative'>
                        <img data-aos="fade-left" className='flex items-center justify-center w-[70%] lg:w-full' src={adv_img4} alt="" />
                        <p className='uppercase text-green-500 absolute top-[100%] lg:left-[50%] left-[20%] font-semibold text-[20px]'>{about[lang].text_stansion}</p>
                    </div>
                </div>
                {/* HOUSE IMAGE */}
                <div className='lg:ml-28 relative ml-10 w-[70%] mt-10' data-aos="fade-up">
                    <FiChevronsUp className='text-red-500 absolute -top-[20%] left-[40%] lg:text-[50px] text-[40px]'/>
                    <FiChevronsDown className='text-green-500 absolute -top-[20%] left-[25%] lg:text-[50px] text-[40px]'/>
                    <img src={adv_img5} alt="" />
                    <p className='uppercase text-green-500 absolute md:top-[95%] left-[20%] font-semibold text-[20px] top-[100%]'>{about[lang].text_consumer}</p>
                </div>
            </div>
        </div>
        <div className='pt-28 md:pb-20 pb-10'>
            <h1 className='text-4xl text-green-500 mb-3'>{about[lang].adv1_title}</h1>
            <ul className='grid md:grid-cols-4 gap-2 my-8 sm:grid-cols-2 grid-cols-1'>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-4 flex justify-center items-center p-4'>{about[lang].adv1_text1}</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center py-4'>{about[lang].adv1_text2}</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center sm:mt-6 mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text3}</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text4}</li>
            </ul>
            <div className='py-5'>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-5 sm:gap-0'>
                    <div  data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full '>
                        <img src={adv_img1} className='w-[70%] lg:w-full' alt="" />
                        <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 md:-right-10 -right-8 lg:text-[50px] text-[40px]'/>
                        <p className='uppercase text-green-500 absolute md:top-[100%] lg:top-[110%] font-semibold text-[20px] top-[100%]'>{about[lang].text_solar}</p>
                    </div>
                    {/* INVERTOR IMAGE */}
                    <div data-aos="fade-right" className='relative w-[80%] flex items-center justify-center h-full pl-5 md:pl-0'>
                        <img src={adv_img2} className='w-[70%] lg:w-full' alt="" />
                        <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 -right-6 lg:text-[50px] text-[40px]'/>
                        <p className='uppercase text-green-500 absolute  md:top-[80%] lg:top-[90%] font-semibold text-[20px] top-[80%]'>{about[lang].text_invertor}</p>
                    </div>
                    {/* ACCUMULATOR IMAGE */}
                    <div data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full mt-8 md:pl-10 lg:pl-16'>
                        <img src={adv_img6} className='w-[85%] ' alt="" />    
                        <p className='uppercase text-green-500 absolute top-[90%] font-semibold text-[20px]'>{about[lang].text_counter}</p>
                    </div>
                </div>
                {/* HOUSE IMAGE */}
                <div className='lg:ml-28 relative ml-10 w-[70%] md:mt-18 mt-24' data-aos="fade-up">
                    <FiChevronsUp className='text-red-500 absolute sm:-top-[20%] -top-[35%] left-[40%] lg:text-[50px] text-[40px]'/>
                    <FiChevronsDown className='text-green-500 absolute sm:-top-[20%] -top-[35%] left-[25%] lg:text-[50px] text-[40px]'/>
                    <img src={adv_img5} alt="" />
                    <p className='uppercase text-green-500 absolute md:top-[95%] left-[20%] font-semibold text-[20px] top-[100%]'>{about[lang].text_consumer}</p>
                </div>
            </div>
        </div>  
    </div>
  )
}
