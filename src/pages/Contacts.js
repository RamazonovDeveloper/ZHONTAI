import React from 'react'

import './contact.css'

import { MdLocationPin, MdEmail, MdPhoneInTalk } from "react-icons/md"
// import { FiPhoneCall } from "react-icons/fi"
// import { TfiEmail } from "react-icons/tfi"


export default function Contacts() {
  return (
    <div>
        <div className='contact_title w-full h-[50vh]'>
            <div className='contact_title_item flex h-full items-center justify-center '>
                <h1 className='text-[40px] text-white font-semibold'>Contact us</h1>
            </div>
        </div>

        <div className='container mt-[70px]'>
            <div className='text-center mb-[70px]'>
                <h2 className='contact_aloqa relative text-[44px]'>Aloqa</h2>
            </div>

            <div className='grid lg:grid-cols-3 gap-5 grid-cols-1'>
                <div className='contact_cards py-[15px] px-[15px] flex items-center'>
                    <MdLocationPin className='text-[40px] text-color_blue mr-4'/>
                    <div>
                        <h3 className='text-[20px] font-semibold'>Manzil</h3>
                        <p className=''>O'zbekiston, Toshkent sh., A.Temur</p>
                    </div>
                </div>
                <div className='contact_cards py-[15px] px-[15px] flex items-center'>
                    <MdPhoneInTalk className='text-[40px] text-color_blue mr-4'/>
                    <div>
                        <h3 className='text-[20px] font-semibold'>Bizga qo'ng'iroq qiling</h3>
                        <p className=''>+998 (97) 170-09-41</p>
                    </div>
                </div>
                <div className='contact_cards py-[15px] px-[15px] flex items-center'>
                    <MdEmail className='text-[40px] text-color_blue mr-4'/>
                    <div>
                        <h3 className='text-[20px] font-semibold'>Pochta orqali yuboring</h3>
                        <p className=''>tashkent.uz</p>
                    </div>
                </div>
            </div>
            
            <div className='my-[70px] grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='flex flex-col'>
                    <input className='contact_form_input' type="text" placeholder='FIO'/>
                    <input className='contact_form_input' type="email" placeholder='Email'/>
                    <textarea className='contact_form_area' name="" id="" placeholder='Nimani muxokama qilmoqchisiz ?' cols="0" rows="50"></textarea>
                    <button className='contant_form_btn'>Biz bilan bog'lanish</button>
                </div>
                <div>
                <iframe className='w-full h-full min-h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.783810252743!2d69.27246007530604!3d41.33531419922477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b454cf51035%3A0xc1f97becd64cf681!2z0JzQtdGH0LXRgtGMINCc0LjQvdC-0YA!5e0!3m2!1sru!2s!4v1684567038800!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>


    </div>
  )
}
