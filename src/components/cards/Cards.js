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

  const handleClick = () => {
    console.log("Image has been clicked");
  }

  return (
    <div className='w-[100%] overflow-hidden'>
      <div className='md:h-[100vh] bg-slate-500 grid grid-cols-2 h-[50vh]'>
        <div className='h-full bg-slate-800 relative my_card_image'>
          <img data-aos="fade-right" className='absolute h-full object-cover z-10' src={ferrariImg} onClick={() => handleClick()} alt="" />
          <div className='absolute z-20 text-white top-[76%] text-center md:text-[40px] text-[20px] h-1/4 w-full cards_shadow  flex items-center justify-center'>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className='h-full bg-slate-800 relative my_card_image'>
          <img data-aos="fade-left" className='absolute h-full object-cover z-10' src={ferrariImg2} alt="" onClick={() => handleClick()}/>
          <div className='absolute z-20 top-[76%] text-white text-center md:text-[40px] text-[20px] h-1/4 w-full cards_shadow flex items-center justify-center'>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
