import React from 'react'

import img1 from "../assets/img.png"
import img2 from "../assets/img2.png"

function About() {
  return (
    // <div className='text-center'>
    //   <h1 className='text-8xl'>This is a About component section</h1>
    // </div>
    <div className='px-10 pt-20 py-7'>
        <div className='grid grid-cols-2'>
            <div className='h-100% flex items-center justify-center'>
                <p className='w-[80%]'>ZHON TAI SOLAR PANEL Co., Ltd o'z mijozlariga ularning ehtiyojlarini eng yaxshi tarzda qondirish uchun mahsulotlarni yetkazib beradi va xizmatlarni taqdim etadi. Mahsulotlarimiz va xizmatlarimiz sifati bizning xodimlarimizga bog'liq.</p>
            </div>
            <img className='w-full' src={img1} alt="" />
        </div>
        <div className='grid grid-cols-2'>
            <img className='w-full' src={img2} alt="" />
            <div className='h-100% flex items-center justify-center'>
                <p className='w-[80%]'>ZHON TAI SOLAR PANEL Co., Ltd o'z mijozlariga ularning ehtiyojlarini eng yaxshi tarzda qondirish uchun mahsulotlarni yetkazib beradi va xizmatlarni taqdim etadi. Mahsulotlarimiz va xizmatlarimiz sifati bizning xodimlarimizga bog'liq.</p>
            </div>
        </div>
    </div>
  )
}

export default About
