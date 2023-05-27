import React, { useEffect } from 'react'

import './about.css'
import './products.css'

import factoryImg1 from '../assets/factoryImg1.png'
import factoryImg2 from '../assets/factoryImg2.png'
import factoryImg3 from '../assets/factoryImg3.png'
import factoryImg4 from '../assets/factoryImg4.png'

import bankImg1 from '../assets/bankImg1.png'
import bankImg2 from '../assets/bankImg2.png'
import bankImg3 from '../assets/bankImg3.png'
import bankImg4 from '../assets/bankImg4.png'

import maktabImg1 from '../assets/maktabImg1.png'
import maktabImg2 from '../assets/maktabImg2.png'
import maktabImg3 from '../assets/maktabImg3.png'
import maktabImg4 from '../assets/maktabImg4.png'

import meat1 from "../assets/meat1.png"
import meat2 from "../assets/meat2.png"
import meat3 from "../assets/meat3.png"
import meat4 from "../assets/meat4.png"
import meat5 from "../assets/meat5.png"

import machine1 from '../assets/machine1.png'
import machine2 from '../assets/machine2.png'
import machine3 from '../assets/machine3.png'

import AOS from "aos";
import "aos/dist/aos.css";

import { example } from "../languageData/ExampleLang"
import Text_slider from '../components/text_slider/Text_slider'

export default function Products({lang}) {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='pt-6'>

        <Text_slider lang={lang}/>

        <h1 className='text-center mt-8 text-[50px]'>Maxsulotlarning qo'llanilish soxasi</h1>

        <div className='container my-9'>
            <h2 className='text-[50px] text-blue-800 text-center'>100-3000 kVt</h2>
            <h2 className='text-[50px] text-blue-800 text-center'>Barcha turdagi zavodlar uchun</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={factoryImg1} alt="" />
                </div>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={factoryImg2} alt="" />
                </div>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={factoryImg3} alt="" />
                </div>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={factoryImg4} alt="" />
                </div>
            </div>
        </div>

        <div className='container my-9'>
            <h2 className='text-[50px] text-blue-800 text-center'>3-20 kVt</h2>
            {/* <h2 className='text-[50px] text-blue-800 text-center'>Barcha turdagi zavodlar uchun</h2> */}
            <ul className='grid md:grid-cols-4 gap-2 my-8 sm:grid-cols-2 grid-cols-1'>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-4 flex justify-center items-center p-4'>Yonilg'i quyish shaxobchasi</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center py-4'>Supermarketlar</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center sm:mt-6 mt-2 flex justify-center items-center p-4'>Axoli yashash xonadonlari</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-2 flex justify-center items-center p-4'>Restoranlar</li>
            </ul>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={bankImg1} alt="" />
                </div>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={bankImg2} alt="" />
                </div>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={bankImg3} alt="" />
                </div>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={bankImg4} alt="" />
                </div>
            </div>
        </div>

        <div className='container my-9'>
            <h2 className='text-[50px] text-blue-800 text-center'>25-70 kVt</h2>
            <ul className='grid md:grid-cols-4 gap-2 my-8 sm:grid-cols-2 grid-cols-1'>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-4 flex justify-center items-center p-4'>Kinotetr</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center py-4'>Ishlab chiqarish sexlari</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center sm:mt-6 mt-2 flex justify-center items-center p-4'>Maktablar</li>
                <li data-aos="fade-up" className='bg-gray-300 rounded-md text-center mt-2 flex justify-center items-center p-4'>Kasalxonalar</li>
            </ul>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={maktabImg1} alt="" />
                </div>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={maktabImg2} alt="" />
                </div>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={maktabImg3} alt="" />
                </div>
                <div className='products_usage_item h-[270px] overflow-hidden'>
                    <div className='products_usage_item_shadow_in_products'></div>
                    <img className='w-[100%] object-contain' src={maktabImg4} alt="" />
                </div>
            </div>
        </div>

        <div className='meat_title_wrapper w-full h-[50vh]'>
            <div className='w-full meat_title_wrapper_filter h-full flex items-center'>
                <div className="container">
                    <h1 className='text-[40px] font-semibold text-white'>{example[lang].meat_title}</h1>
                </div>
            </div>
        </div>


      <div className='container my-[70px]'>
        <div>
            <div className='grid md:grid-cols-3 justify-center sm:grid-cols-2 grid-cols-1 gap-4'>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={meat1} alt="Meat Machine Image" />
                    <p>Go‘sht qiymalagich - 14.5 kv</p>
                </div>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={meat3} alt="Meat Machine Image" />
                    <p>Defoster (go‘sht muzlatish uskunasi) - 0.6 kVt</p>
                </div>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={meat2} alt="Meat Machine Image" />
                    <p>Farsharalashtirgich - 4.5 kVt</p>
                </div>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={meat4} alt="Meat Machine Image" />
                    <p>Shprits uskunasi (kolbasa qadoqlagich) -4.5 kVt</p>
                </div>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={meat5} alt="Meat Machine Image" />
                    <p>Issiqlik kamerasi - 6.5 kVt</p>
                </div>
            </div>  
        </div>
      </div>

        <div className='machine_title_wrapper w-full h-[60vh] flex items-center'>
            <div className='px-3 py-14 w-full h-full machine_title_wrapper_filter flex items-center'>
                <div className="container">
                    <h1 className='text-[40px] font-semibold text-black'>{example[lang].machine_title}</h1>
                </div>
            </div>
        </div>

        <div className='container my-[70px]'>
        <div>
            <div className='grid md:grid-cols-3 justify-center sm:grid-cols-2 grid-cols-1 gap-4'>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={machine2} alt="Machine Image" />
                    <p>Tikuv mashinasi -60 vatt</p>
                </div>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={machine1} alt="Machine Image" />
                    <p>Dazmollash mashinasi 1,5 kVt</p>
                </div>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={machine3} alt="Machine Image" />
                    <p>To'qimachilik printeri - 7 kVt</p>
                </div>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={meat4} alt="Machine Image" />
                    <p>Shprits uskunasi (kolbasa qadoqlagich) -4.5 kVt</p>
                </div>
                <div className='flex flex-col justify-between items-center namuna_item rounded-xl'>
                    <img className='w-4/5' src={meat5} alt="Machine Image" />
                    <p>Issiqlik kamerasi - 6.5 kVt</p>
                </div>
            </div>  
        </div>
      </div>

    </div>
  )
}
