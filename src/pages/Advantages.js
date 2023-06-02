import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

import {about} from '../languageData/AdvantagesLang'

import kons1 from '../assets/kons1.jpg'
import kons2 from '../assets/kons2.jpg'
import kons3 from '../assets/kons5.jpg'

import img1 from "../assets/img.png"
import img2 from "../assets/new_img.jpg"
import adv_img1 from '../assets/adv_image_1.png'
import adv_img2 from '../assets/adv_image_2.png'
import adv_img3 from '../assets/adv_image_3.png'
import adv_img4 from '../assets/adv_image_4.png'
import adv_img5 from '../assets/adv_image_5.png'
import adv_img6 from '../assets/adv_accumlator.png'

import { FiChevronsRight, FiChevronsLeft, FiChevronsUp, FiChevronsDown } from 'react-icons/fi'

export default function Advantages({lang}) {

    
    AOS.init();

  return (
    <div className='pt-28'>
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

        {/* <div className="container">
            <h1 className='md:text-[40px] font-semibold sm:text-2xl text-xl mb-10'>{about[lang].last_adv_title}</h1>
        </div> */}

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <img data-aos="fade-left" className='w-full' src={img1} alt="Solar panel image" />
            <div data-aos="fade-right" className='h-100% flex items-center justify-center py-12 lg:py-0'>
                <div className='w-[80%]'>
                    <h1 className='md:text-[40px] font-semibold sm:text-2xl text-xl mb-10'>{about[lang].last_adv_title}</h1>
                    {/* <h2 className='font-bold text-[20px]'>{about[lang].slide3_title}</h2> */}
                    <ul className='list-disc'>
                        <li>{about[lang].slide3_li_1}</li>
                        <li>{about[lang].slide3_li_2}</li>
                        <li>{about[lang].slide3_li_3}</li>
                        <li>{about[lang].slide3_li_4}</li>
                        <li>{about[lang].slide3_li_5}</li>
                        <li>{about[lang].slide3_li_6}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='md:grid md:grid-cols-2 grid-cols-1'>
            <img data-aos="fade-right" className='w-full flex' src={kons2} alt="Solar panel image" />
            {/* <div data-aos="fade-right" className='h-100% flex items-center justify-center py-12 lg:py-0'>
                <div className='w-[80%]'>
                    <h2 className='font-bold text-[20px]'>{about[lang].slide3_title}</h2>
                    <ul className='list-disc'>
                        <li>{about[lang].slide3_li_3}</li>
                        <li>{about[lang].slide3_li_4}</li>
                    </ul>
                </div>
            </div> */}
            <img data-aos="fade-right" className='w-full' src={img2} alt="Solar panel image" />
        </div>

        {/* <div className='grid md:grid-cols-2 grid-cols-1 grid-flow-row-dense'>
            <img data-aos="fade-right" className='w-full' src={kons3} alt="Solar panel image" />
            <div data-aos="fade-right" className='h-100% flex items-center justify-center py-12 lg:py-0'>
                <div className='w-[80%]'>
                    <h2 className='font-bold text-[20px]'>{about[lang].slide3_title}</h2>
                    <ul className='list-disc'>
                        <li>{about[lang].slide3_li_5}</li>
                        <li>{about[lang].slide3_li_6}</li>
                    </ul>
                </div>
            </div>
        </div> */}
        
        {/* ADVANTAGES 1 */}
        <div className=''>
            <div className='container pt-14 pb-10'>
                <h1 className='md:text-4xl sm:text-2xl text-xl text-green-500 mb-3'>{about[lang].adv1_title}</h1>
                <ul className='grid md:grid-cols-4 gap-2 my-8 sm:grid-cols-2 grid-cols-1'>
                    <li data-aos="fade-up" className='text-base bg-gray-300 rounded-md text-center mt-4 flex justify-center items-center p-4'>{about[lang].adv1_text1}</li>
                    <li data-aos="fade-up" className='text-base bg-gray-300 rounded-md text-center py-4'>{about[lang].adv1_text2}</li>
                    <li data-aos="fade-up" className='text-base bg-gray-300 rounded-md text-center sm:mt-6 mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text3}</li>
                    <li data-aos="fade-up" className='text-base bg-gray-300 rounded-md text-center mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text4}</li>
                </ul>
                <div className='py-5'>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-5 sm:gap-0'>
                        <div  data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full '>
                            <img src={adv_img1} className='w-[70%] lg:w-full' alt="Solar Panel Image" />
                            <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 md:-right-10 -right-8 lg:text-[50px] text-[40px]'/>
                            <p className='uppercase text-green-500 absolute md:top-[95%] lg:top-[90%] font-semibold text-[20px] top-[100%]'>{about[lang].text_solar}</p>
                        </div>
                        {/* INVERTOR IMAGE */}
                        <div data-aos="fade-right" className='relative w-[80%] flex items-center justify-center h-full pl-5 lg:pl-0'>
                            <img src={adv_img2} className='w-[70%] lg:w-full' alt="Invertor Image" />
                            <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 -right-6 lg:text-[50px] text-[40px]'/>
                            <p className='uppercase text-green-500 absolute md:top-[70%] font-semibold text-[20px] top-[80%]'>{about[lang].text_invertor}</p>
                        </div>
                        <div data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full mt-6 md:mt-0'>
                            <img src={adv_img3} className='w-[70%] lg:w-full' alt="Counter Image" />    
                            <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-20 -right-10 lg:text-[50px] text-[40px]'/>
                            <FiChevronsLeft className=' text-red-500 absolute top-[55%] lg:-right-20 -right-10 lg:text-[50px] text-[40px]'/>
                            <p className='uppercase text-green-500 absolute top-[80%] font-semibold text-[20px]'>{about[lang].text_counter}</p>
                        </div>
                        {/* ELECTRIC STANSION */}
                        <div className='relative'>
                            <img data-aos="fade-right" className='flex items-center justify-center w-[70%] lg:w-full' src={adv_img4} alt="Electric Stansion Image" />
                            <p className='uppercase text-green-500 absolute top-[100%] lg:left-[50%] left-[20%] font-semibold text-[20px]'>{about[lang].text_stansion}</p>
                        </div>
                    </div>
                    {/* HOUSE IMAGE */}
                    <div className='lg:ml-28 relative ml-10 w-[70%] mt-10' data-aos="fade-up">
                        <FiChevronsUp className='text-red-500 absolute -top-[20%] left-[40%] lg:text-[50px] text-[40px]'/>
                        <FiChevronsDown className='text-green-500 absolute -top-[20%] left-[25%] lg:text-[50px] text-[40px]'/>
                        <img src={adv_img5} alt="House Image" />
                        <p className='uppercase text-green-500 absolute md:top-[95%] left-[20%] font-semibold text-[20px] top-[100%]'>{about[lang].text_consumer}</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* ADVANTAGES 2 */}
        <div className='container md:pt-28 pt-10 md:pb-20 pb-12'>
            <h1 className='text-4xl text-green-500 mb-3'>{about[lang].adv2_title}</h1>
            <ul className='grid md:grid-cols-4 gap-2 my-8 sm:grid-cols-2 grid-cols-1'>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-4 flex justify-center items-center p-4'>{about[lang].adv1_text1}</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center py-4'>{about[lang].adv1_text2}</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center sm:mt-6 mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text3}</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text4}</li>
            </ul>
            <div className='py-5'>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-5 sm:gap-0'>
                    <div  data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full '>
                        <img src={adv_img1} className='w-[70%] lg:w-full' alt="Solar panel image" />
                        <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 md:-right-10 -right-8 lg:text-[50px] text-[40px]'/>
                        <p className='uppercase text-green-500 absolute md:top-[100%] lg:top-[110%] font-semibold text-[20px] top-[100%]'>{about[lang].text_solar}</p>
                    </div>
                    {/* INVERTOR IMAGE */}
                    <div data-aos="fade-right" className='relative w-[80%] flex items-center justify-center h-full pl-5 md:pl-0'>
                        <img src={adv_img2} className='w-[70%] lg:w-full' alt="Invertor Image" />
                        <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 -right-6 lg:text-[50px] text-[40px]'/>
                        <p className='uppercase text-green-500 absolute  md:top-[80%] lg:top-[90%] font-semibold text-[20px] top-[80%]'>{about[lang].text_invertor}</p>
                    </div>
                    {/* ACCUMULATOR IMAGE */}
                    <div data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full mt-10 md:pl-10 lg:pl-16'>
                        <img src={adv_img6} className='w-[85%] ' alt="Accumulator Image" />    
                        <p className='uppercase text-green-500 absolute top-[90%] font-semibold text-[20px]'>{about[lang].text_accumlator}</p>
                    </div>
                </div>
                {/* HOUSE IMAGE */}
                <div className='lg:ml-28 relative ml-10 w-[70%] md:mt-18 mt-24' data-aos="fade-up">
                    <FiChevronsUp className='text-red-500 absolute sm:-top-[20%] -top-[35%] left-[40%] lg:text-[50px] text-[40px]'/>
                    <FiChevronsDown className='text-green-500 absolute sm:-top-[20%] -top-[35%] left-[25%] lg:text-[50px] text-[40px]'/>
                    <img src={adv_img5} alt="House Image" />
                    <p className='uppercase text-green-500 absolute md:top-[95%] left-[20%] font-semibold text-[20px] top-[100%]'>{about[lang].text_consumer}</p>
                </div>
            </div>
        </div> 

        
        {/* ADVANTAGES 3 */}
        <div className='container md:pt-28 pt-10 md:pb-20 pb-12'>
          <h1 className='text-4xl text-green-500 mb-3'>{about[lang].adv3_title}</h1>
          <ul className='grid md:grid-cols-4 gap-2 my-8 sm:grid-cols-2 grid-cols-1'>
            <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-4 flex justify-center items-center p-4'>{about[lang].adv1_text1}</li>
            <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center py-4'>{about[lang].adv1_text2}</li>
            <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center sm:mt-6 mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text3}</li>
            <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-2 flex justify-center items-center p-4'>{about[lang].adv1_text4}</li>
          </ul>
          <div className='py-5'>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-5 sm:gap-0'>
              <div  data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full '>
                <img src={adv_img1} className='w-[70%] lg:w-full' alt="Solar Panel Image" />
                <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 md:-right-10 -right-8 lg:text-[50px] text-[40px]'/>
                <p className='uppercase text-green-500 absolute md:top-[95%] lg:top-[90%] font-semibold text-[20px] top-[100%]'>{about[lang].text_solar}</p>
              </div>
              {/* INVERTOR IMAGE */}
              <div data-aos="fade-right" className='relative w-[80%] flex items-center justify-center h-full pl-5 lg:pl-0'>
                <img src={adv_img2} className='w-[70%] lg:w-full' alt="Invertor Image" />
                <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-14 -right-6 lg:text-[50px] text-[40px]'/>
                <p className='uppercase text-green-500 absolute md:top-[70%] font-semibold text-[20px] top-[80%]'>{about[lang].text_invertor}</p>
              </div>

              <div data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full mt-6 md:mt-0'>
                <img src={adv_img3} className='w-[70%] lg:w-full' alt="Counter Image" />    
                <FiChevronsRight className='text-green-500 absolute top-[40%] lg:-right-20 -right-10 lg:text-[50px] text-[40px]'/>
                <FiChevronsLeft className=' text-red-500 absolute top-[55%] lg:-right-20 -right-10 lg:text-[50px] text-[40px]'/>
                <p className='uppercase text-green-500 absolute top-[80%] font-semibold text-[20px]'>{about[lang].text_counter}</p>
              </div>
              {/* ELECTRIC STANSION */}
              <div className='relative'>
                <img data-aos="fade-right" className='flex items-center justify-center w-[70%] lg:w-full' src={adv_img4} alt="Electric Stansion Image" />
                <p className='uppercase text-green-500 absolute top-[100%] lg:left-[50%] left-[20%] font-semibold text-[20px]'>{about[lang].text_stansion}</p>
              </div>
            
            </div>

            <div className='md:flex grid md:grid-cols-2 pt-12 md:pt-0 grid-cols-1'>
              {/* ACCUMULATOR IMAGE */}
              <div data-aos="fade-right" className='relative w-fit flex items-center justify-center h-full md:mt-8 md:pl-10 lg:pl-16'>
                <FiChevronsUp className='text-red-500 absolute -top-[40%] md:-top-[0%] left-[50%] lg:text-[50px] text-[40px]'/>
                <FiChevronsDown className='text-green-500 absolute -top-[40%] md:-top-[0%] left-[30%] lg:text-[50px] text-[40px]'/>
                <img src={adv_img6} className='w-[85%] md:mt-12' alt="Accumulator Image" />    
                <p className='uppercase text-green-500 absolute top-[100%] font-semibold text-[20px]'>{about[lang].text_accumlator}</p>
              </div>
              {/* HOUSE IMAGE */}
              <div className='lg:ml-28 relative sm:ml-10 sm:w-[70%] w-[100%] mt-10 pt-4 md:pt-0' data-aos="fade-up">
                <FiChevronsDown className='text-red-500 absolute md:-top-[20%] -top-[10%] left-[40%] lg:text-[50px] text-[40px]'/>
                <FiChevronsDown className='text-green-500 absolute md:-top-[20%] -top-[10%] left-[30%] lg:text-[50px] text-[40px]'/>
                <img src={adv_img5} alt="House Image" />
                <p className='uppercase text-green-500 absolute md:top-[95%] left-[20%] font-semibold text-[20px] top-[100%]'>{about[lang].text_consumer}</p>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}
