import React from 'react'

import img1 from "../assets/partnersSectionImg.jpg"

import './companies.css'
import Partners from './Partners'

function Companies() {
  return (
    <div className='pt-[100px]'>
      <div className='container mb-[70px]'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-5'>
          <div>
            <h2 className='font-thin text-[20px]'>Lorem ipsum</h2>
            <h3 className='font-semibold text-[30px] my-2'>Lorem ipsum dolor sit.</h3>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et possimus dolorum sequi sapiente, repudiandae illum?Lorem ipsum dolor sit amet.</p>
            <p className='text-gray-600 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, beatae!</p>
          </div>
          <div>
            <img className='rounded-xl' src={img1} alt="Our Partners Image" />
          </div>
        </div>
      </div>
      <div className='partners text-white '>
        <div className='partners_layout h-full py-8 '>
          <div className="container text-center">
            <h2 className='text-[28px] mb-12'>Our partners Around the World</h2>
            <div className='grid md:grid-cols-3 gap-6 grid-cols-1'>
              <div className=''>
                <h2 className='text-[30px] font-semibold'>Lorem, ipsum.</h2>
                <p>Lorem, ipsum dolor. (Lorem ipsum dolor sit amet.) Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tenetur?</p>
              </div>
              <div>
                <h2 className='text-[30px] font-semibold'>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sed cupiditate natus nam vel omnis voluptate ex accusamus ad a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius suscipit blanditiis ab, nostrum accusantium rem pariatur minima possimus voluptatem.</p>
              </div>
              <div>
                <h2 className='text-[30px] font-semibold'>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quisquam ad dolorum modi? Impedit adipisci aliquam enim optio similique itaque esse. Unde voluptas ullam mollitia quae ea iusto deserunt voluptatem?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Partners/>

    </div>  
  )
}

export default Companies
