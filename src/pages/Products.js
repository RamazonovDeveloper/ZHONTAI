import React, { useEffect } from 'react'

import './about.css'

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

export default function Products({lang}) {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className=''>
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
