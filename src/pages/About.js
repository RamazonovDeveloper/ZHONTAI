import React from 'react'

import img1 from "../assets/img.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/about_big_img.png"
import './about.css'

import {about} from "../languageData/AboutLang"

function About({lang}) {

  return (
    <div className='overflow-x-hidden'>
        <div className='about_1_section h-[100vh]'>
            <div className='h-[100vh] about_1_section_bac text-white md:text-4xl flex items-end text-2xl'>
                <div data-aos="fade-up" className='about_1_section_bac_item text-center py-6 px-4'>
                    {about[lang].slide1}
                    {/* “ZHON TAI SOLAR PANEL” MChJ kompaniyasi O‘zbekiston Respublikasidagi birinchi 
                    korxonalardan biri hisoblanadi. Quyosh panellari (modullari) ishlab chiqaruvchi dunyodagi 
                    uchta yirik ishlab chiqaruvchilardan biri bo'lgan Xitoy fotoelektr kompaniyasining rasmiy vakili
                    1997 yilda tashkil etilgan, bosh qarorgohi Changzhou shahrida joylashgan, tashkil etilganidan 
                    beri fotoelektrik stansiyalar sanoatida faoliyat yuritadi. */}
                </div>
            </div>
        </div>
        <div className='my-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div  data-aos="fade-right" className='h-100% items-center justify-center py-12 lg:py-0 hidden lg:flex'>
                    <div className='w-[80%]'>
                        <p>{about[lang].slide2_text1}</p>
                        <p className='mt-2'>{about[lang].slide2_text2}</p>
                    </div>
                </div>
                <img  data-aos="fade-left" className='w-full' src={img2} alt="Solar panel image" />
                <div className='h-100% flex items-center justify-center py-12 lg:py-0 lg:hidden'>
                    <div className='w-[80%]'>
                        <p>{about[lang].slide2_text1}</p>
                        <p className='mt-2'>{about[lang].slide2_text2}</p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 grid-flow-row-dense'>
                <img data-aos="fade-right" className='w-full' src={img1} alt="Solar panel image" />
                <div data-aos="fade-left" className='h-100% flex items-center justify-center py-12 lg:py-0'>
                    <div className='w-[80%]'>
                        <h2 className='font-bold text-[20px]'>{about[lang].slide3_title}</h2>
                        <ul className='list-disc'>
                            <li>{about[lang].slide3_li_1}</li>
                            <li>{about[lang].slide3_li_2}</li>
                            <li>{about[lang].slide3_li_3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='about_capacity h-[85vh] flex items-end'>
            <div data-aos="fade-up" className='w-full about_capacity_item py-14 px-5'>
                <p className='text-3xl font-medium'>{about[lang].slide4_text}</p>
            </div>
        </div>

        <div className='my-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div data-aos="fade-right" className='h-100% flex items-center justify-center py-12 lg:py-0'>
                    <div className='w-[80%]'>
                        <p>{about[lang].slide5_text1}</p>
                        <p className='mt-2'>{about[lang].slide5_text2}</p>
                    </div>
                </div>
                <img data-aos="fade-left" className='w-full' src={img3} alt="Solar panel image" />
            </div>
            {/* <div className='grid grid-cols-2'>
                <img className='w-full' src={img1} alt="" />
                <div className='h-100% flex items-center justify-center'>
                    <div className='w-[80%]'>
                        <h2 className='font-bold text-[20px]'>Bizning metall konstruktsiyamizning o'ziga xosligi</h2>
                        <ul className='list-disc'>
                            <li>Umumiy konstruksiyaning yengilligi (alyuminiy profil, o'rnatiladigan obyektning sirt maydoniga strukturaning og'irligini kamaytiradi).</li>
                            <li>Bo'yashga (har yili emal bilan) hojat yo'q .</li>
                            <li>Korroziyaga chidamli.</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>

    </div>
  )
}

export default About
