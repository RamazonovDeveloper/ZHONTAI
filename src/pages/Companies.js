import React from 'react'

import img1 from "../assets/img.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

function Companies() {
  return (
    <div className='px-10 pt-20'>
        <h1 className='text-8xl'>This is a companies section</h1>
        <div>
            <img className='w-full' src={img3} alt="" />
            <p>ZHON TAI SOLAR PANEL Co., Ltd o'z mijozlariga ularning ehtiyojlarini eng yaxshi tarzda qondirish uchun mahsulotlarni yetkazib beradi va xizmatlarni taqdim etadi. Mahsulotlarimiz va xizmatlarimiz sifati bizning xodimlarimizga bog'liq.</p>
        </div>
        <div>
            <img className='w-full' src={img2} alt="" />
            <p>ZHON TAI SOLAR PANEL Co., Ltd o'z mijozlariga ularning ehtiyojlarini eng yaxshi tarzda qondirish uchun mahsulotlarni yetkazib beradi va xizmatlarni taqdim etadi. Mahsulotlarimiz va xizmatlarimiz sifati bizning xodimlarimizga bog'liq.</p>
        </div>
    </div>
  )
}

export default Companies
