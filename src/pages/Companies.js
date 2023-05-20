import React from 'react'

import img1 from "../assets/about_2.png"

import './companies.css'

function Companies() {
  return (
    <div className='pt-[100px]'>
      <div className='container mb-[70px]'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-5'>
          <div>
            <h2 className='font-thin text-[20px]'>BIZ HAQIMIZDA</h2>
            <h3 className='font-semibold text-[30px] my-2'>Ko'p yillik o’qitish tajribasi</h3>
            <p className='text-gray-600'>Bizning ko'p yillik o’qitish tajribamiz sizga bilim va tajribangizni oshirish uchun eng yaxshi imkoniyat taqdim etadi. Biz xalqaro ACCA dasturi ko’ra ta’lim beramiz. Bizning biznes maktabimiz Toshkentning markazida qulay joylashgan bo'lib, sinf xonalari interfaol qurilmalar bilan jihozlangan va 12 tagacha talabalarni sig'dira oladi.</p>
            <p className='text-gray-600 mt-3'>IBS biznes maktabi 2012-yilda tashkil etilgan va 2013-yilda O'zbekistondagi Davlat Test Markazida xususiy o'quv muassasasi sifatida ro'yxatdan o'tgan.</p>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className='partners text-white '>
        <div className='partners_layout h-full py-8 '>
          <div className="container text-center">
            <h2 className='text-[28px] mb-12'>Bizning xalqaro hamkorlarimiz</h2>
            <div className='grid grid-cols-3 gap-6'>
              <div className='text-center'>
                <h2 className='text-[30px] font-semibold w-4/5'>ACCA, Buyuk Britaniya</h2>
                <p>Buyuk Britaniya, ACCA (Sertifikatlangan diplomli buxgalterlar assotsiatsiyasi)da akkreditatsiyadan o'tgan va O'zbekistondagi yagona "OLTIN" maqomiga ega bo'lgan tashkilotmiz</p>
              </div>
              <div>
                <h2 className='text-[30px] font-semibold'>LSBF, O'zbekistonda ACCA</h2>
                <p>LSBF (London biznes va moliya maktabi) Buyuk Britaniyaning O'zbekistonda ACCA o'quv materiallarini eksklyuziv yetkazib beruvchisi.</p>
              </div>
              <div>
                <h2 className='text-[30px] font-semibold'>Oksford Bruks universiteti</h2>
                <p>Oksford Bruks universiteti, Buyuk Britaniya.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Companies
