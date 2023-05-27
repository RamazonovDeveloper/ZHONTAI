import React from 'react'

import card1   from '../../assets/cardNewImg3.png'
import card2   from '../../assets/cardNewImg1.png'
import card3   from '../../assets/cardNewImg2.png'
import card4   from '../../assets/cardImg3.jpg'

import './cards.css'
import { gsap } from 'gsap'

import { cardsLang } from '../../languageData/CardsLangData'

export default function Cards({lang}) {
  
  // gsap.to(".my_card_text", { duration: 1, opacity: 1, y: -40})

  // gsap.to(".my_card_img", { duration: 4, opacity: 1})
  // gsap.to(".my_card_img2", { duration: 4, opacity: 1})

  // gsap.to(".single_card_title_span", {duration: 5, opacity: 1, y:-30})
  
  let tl = gsap.timeline()
  
  tl.to(".my_card_img", { left:'0%', duration: .8, opacity: 1}) 

  tl.to(".my_card_img2", { left:'0%', duration: 1.6, opacity: 1})

  return (
    // <div className='lg-mt-[50px]'>
    //   <div className='md-h-80vh w-[100%] grid grid-cols-1 md:grid-cols-2'>
    //     <img src={card2} alt="" />

    //   </div>
    // </div>
    <div className='w-[100%] overflow-hidden lg:mt-[50px]'>
      <div className='md:h-[80vh] grid md:grid-cols-2 sm:grid-cols-1 sm:h-[100vh] h-[80vh]'>

        <div className='h-full relative my_card_image overflow-hidden'>
          <img data-aos="fade-right" className='card_item_img absolute z-0' src={card1} alt="" />
          <div className='absolute z-10 w-[100%] text-white bottom-0 left-0 md:text-[40px] text-[30px] cards_shadow py-4 px-3 flex items-center justify-center'>
            <p data-aos="fade-up">{cardsLang[lang].slide1}</p>
          </div>
        </div>

        <div className='h-full relative my_card_image overflow-hidden'>
          <img data-aos="fade-right" className='card_item_img absolute z-0' src={card2} alt="" />
          <div className='absolute z-10 w-[100%] text-white bottom-0 left-0 md:text-[40px] text-[30px] cards_shadow py-4 px-3 flex items-center'>
            <p data-aos="fade-up">{cardsLang[lang].slide2}</p>
          </div>
        </div>
      </div>

      <div className='md:h-[80vh] bg-slate-500 grid md:grid-cols-2 sm:grid-cols-1 sm:h-[100vh] h-[80vh]'>

      <div className='h-full relative my_card_image overflow-hidden'>
        <img data-aos="fade-right" className='card_item_img absolute z-0' src={card3} alt="" />
        <div className='absolute z-10 w-[100%] text-white bottom-0 left-0 md:text-[40px] text-[30px] cards_shadow py-4 px-3 flex items-center justify-center'>
          <p data-aos="fade-up">{cardsLang[lang].slide3}</p>
        </div>
      </div>

      <div className='h-full relative my_card_image overflow-hidden'>
        <img data-aos="fade-right" className='card_item_img absolute z-0' src={card4} alt="" />
        <div className='absolute z-10 w-[100%] text-white bottom-0 left-0 md:text-[40px] text-[30px] cards_shadow py-4 px-3 flex items-center justify-center'>
          <p data-aos="fade-up">{cardsLang[lang].slide4}</p>
        </div>
      </div>

      </div>
    </div>
  )
}
