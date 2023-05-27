import React from 'react'

import img1 from "../assets/partnersSectionImg.jpg"

import './companies.css'
import Partners from './Partners'

import { companiesLanguageData } from '../languageData/CompaniesLang'

function Companies({lang}) {
  return (
    <div className='pt-[100px]'>
      <div className='container mb-[70px]'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-5'>
          <div>
            {/* <h2 className='font-thin text-[20px]'>Lorem ipsum</h2> */}
            <h3 className='font-semibold text-[30px] my-2'>{companiesLanguageData[lang].section_1_title}</h3>
            <p className='text-gray-600'>{companiesLanguageData[lang].section_1_text}</p>
            {/* <p className='text-gray-600 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, beatae!</p> */}
          </div>
          <div>
            <img className='rounded-xl' src={img1} alt="Our Partners Image" />
          </div>
        </div>
      </div>
      <div className='partners text-white '>
        <div className='partners_layout h-full py-8 '>
          <div className="container text-center">
            <h2 className='text-[28px] mb-12'>{companiesLanguageData[lang].section_2_title}</h2>
            <div className='grid md:grid-cols-2 gap-6 grid-cols-1'>
              <div className=''>
                <h2 className='text-[35px] font-semibold'>ZEN</h2>
                <p className='text-[20px]'>{companiesLanguageData[lang].section_2_item_1}</p>
              </div>
              <div>
                <h2 className='text-[35px] font-semibold'>Teng-Rash</h2>
                <p className='text-[20px]'>{companiesLanguageData[lang].section_2_item_2}</p>
              </div>
              {/* <div>
                <h2 className='text-[30px] font-semibold'>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quisquam ad dolorum modi? Impedit adipisci aliquam enim optio similique itaque esse. Unde voluptas ullam mollitia quae ea iusto deserunt voluptatem?</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Partners/>

    </div>  
  )
}

export default Companies
