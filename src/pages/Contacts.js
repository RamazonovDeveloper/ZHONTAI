import React from 'react'

import './contact.css'

import { MdLocationPin, MdEmail, MdPhoneInTalk } from "react-icons/md"
// import { FiPhoneCall } from "react-icons/fi"
// import { TfiEmail } from "react-icons/tfi"

import { contacts } from '../languageData/Contacts'


export default function Contacts({lang}) {
  return (
    <div>
        <div className='contact_title w-full h-[50vh]'>
            <div className='contact_title_item flex h-full items-center justify-center '>
                <h1 className='text-[40px] text-white font-semibold'>{contacts[lang].contacts_title}</h1>
            </div>
        </div>

        <div className='container mt-[70px]'>
            <div className='text-center mb-[70px]'>
                <h2 className='contact_aloqa relative text-[44px] capitalize'>{contacts[lang].contacts_short}</h2>
            </div>

            <div className='grid lg:grid-cols-3 gap-5 grid-cols-1'>
                <div className='contact_cards py-[15px] px-[15px] flex items-center'>
                    <MdLocationPin className='text-[40px] text-color_blue mr-4'/>
                    <div>
                        <h3 className='text-[20px] font-semibold'>{contacts[lang].adress}</h3>
                        <p className=''>{contacts[lang].adress_text}</p>
                    </div>
                </div>
                <div className='contact_cards py-[15px] px-[15px] flex items-center'>
                    <MdPhoneInTalk className='text-[40px] text-color_blue mr-4'/>
                    <div>
                        <h3 className='text-[20px] font-semibold'>{contacts[lang].tel}</h3>
                        <a href='tel:+998918998888' className=''>+998 (91)-899-88-88</a>
                    </div>
                </div>
                <div className='contact_cards py-[15px] px-[15px] flex items-center'>
                    <MdEmail className='text-[40px] text-color_blue mr-4'/>
                    <div>
                        <h3 className='text-[20px] font-semibold'>{contacts[lang].message}</h3>
                        <a href='mailto:info@zhontaisolar.com'>info@zhontaisolar.com</a>
                    </div>
                </div>
            </div>
            
            <div className='my-[70px] grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='flex flex-col'>
                    <input className='contact_form_input' type="text" placeholder={contacts[lang].form_name}/>
                    <input className='contact_form_input' type="tel" placeholder={contacts[lang].form_email}/>
                    <textarea className='contact_form_area' name="" id="" placeholder={contacts[lang].form_text} cols="0" rows="50"></textarea>
                    <button className='contant_form_btn'>{contacts[lang].form_btn}</button>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7132.327894403744!2d69.23353692432698!3d41.270245984856246!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE2JzExLjIiTiA2OcKwMTQnMTAuMSJF!5e0!3m2!1sru!2s!4v1685010750131!5m2!1sru!2s" style={{border:"0"}} width={"100%"} height={"350px"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>


    </div>
  )
}
