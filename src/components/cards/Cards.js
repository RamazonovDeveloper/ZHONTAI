import React from 'react'

import ferrariImg  from '../../assets/697316.jpeg'
import ferrariImg2 from '../../assets/758296.jpg'

import './cards.css'
import { gsap } from 'gsap'

export default function Cards() {
  
  // gsap.to(".my_card_text", { duration: 1, opacity: 1, y: -40})

  // gsap.to(".my_card_img", { duration: 4, opacity: 1})
  // gsap.to(".my_card_img2", { duration: 4, opacity: 1})

  // gsap.to(".single_card_title_span", {duration: 5, opacity: 1, y:-30})
  
  let tl = gsap.timeline()
  
  tl.to(".my_card_img", { left:'0%', duration: .8, opacity: 1}) 

  tl.to(".my_card_img2", { left:'0%', duration: 1.6, opacity: 1})

  return (
    <div className='w-[100%] overflow-hidden'>
      <div className='h-[100vh] bg-slate-500 grid grid-cols-2 '>
        <div className='h-full bg-slate-800 relative'>
          <img data-aos="fade-right" className='absolute h-full object-cover' src={ferrariImg} alt="" />
          <div className='absolute text-white top-[70%] text-center text-[40px] w-full cards_shadow'>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className='h-full bg-slate-800 relative'>
          <img data-aos="fade-left" className='absolute h-full object-cover z-0' src={ferrariImg2} alt="" />
          <div className='absolute top-[70%] text-white text-center text-[40px] w-full cards_shadow'>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        </div>
    </div>
  )
}
