import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import {MdExpandMore} from 'react-icons/md';
import React from 'react'

import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa"

import logo from '../../assets/07.png'

import './footer.css'

import { footer } from '../../languageData/FooterLang';

export default function Footer({lang}) {
  return (
    <div className='footer'>
        <div className='footer_overlay'>

            <div className='container text-white'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-10'>
                    <div>
                        <a href="/"><img className='w-4/5 mb-5 max-w-[300px]' src={logo} alt="" /></a>
                        <p className='text-[#fffa]'>{footer[lang].sec_1_title}</p>
                    </div>
                    <div>
                        <h3 className='text-[30px] font-semibold mb-[30px] mt-[20px] lg:mt-0'>
                            {footer[lang].sec_2_title}
                        </h3>
                        <div className='grid grid-cols-2'>
                            <div className='flex flex-col'>
                                <a href="">{footer[lang].link_1}</a>
                                <a href="">{footer[lang].link_2}</a>
                            </div>
                            <div className='flex flex-col'>
                                <a href="">{footer[lang].link_3}</a>
                                <a href="">{footer[lang].link_4}</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[30px] font-semibold mb-[30px] mt-[20px] lg:mt-0'>{footer[lang].sec_3_title}</h3>
                        <p className='text-[#fffa]'>{footer[lang].sec_3_text}</p>
                        <div className='flex mt-5'>
                            <a className='network' href="#">
                                <FaFacebookF className='text-white'/>
                            </a>
                            <a className='network' href="#">
                                <FaTelegramPlane className='text-white'/>
                            </a>
                            <a className='network' href="#">
                                <FaInstagram className='text-white'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* bg-[#181818] text-white */}
        {/* <div className=' lg:flex justify-evenly py-6 hidden'>
            <ul className='flex flex-col text-center '>
                <li className="py-[20px]">
                    <a className='font-semibold' href="#">Auto</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Line Up</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Car Configurator</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Personolization</a>
                </li>
            </ul> 
            <ul className='flex flex-col text-center'>
                <li className="py-[20px]">
                    <a className='font-semibold' href="#">Auto</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Line Up</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Car Configurator</a>
                </li>
            </ul>
            <ul className='flex flex-col text-center'>
                <li className="py-[20px]">
                    <a className='font-semibold' href="#">Scuderia Ferrari</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Line Up</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Car Configurator</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Personolization</a>
                </li>
            </ul>
            <ul className='flex flex-col text-center'>
                <li className="py-[20px]">
                    <a className='font-semibold' href="#">Auto</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Line Up</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Car Configurator</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Personolization</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Partners</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">TechInfo</a>
                </li>
            </ul>
            <ul className='flex flex-col text-center'>
                <li className="py-[20px]">
                    <a className='font-semibold' href="#">Auto</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Line Up</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Ferrari Car Configurator</a>
                </li>
                <li className="py-[10px]">
                    <a href="#">Personolization</a>
                </li>
            </ul>
        
        </div>
        <div className='lg:hidden w-[40%]'>
            <Accordion 
            sx={{
                boxShadow: "none",
                border:"none",
                marginBottom:"10px"
            }}
            style={{ boxShadow: "none", border: "none" }}
            >
                <AccordionSummary
                expandIcon={<MdExpandMore className='text-white' />}
                sx={{
                    backgroundColor: "#181818",
                    color:"#fff",
                    boxShadow: "none",
                    border:"none"
                }}
                style={{ boxShadow: "none", border: "none" }}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <p className='font-semibold'>Auto</p>
                </AccordionSummary>
                <AccordionDetails
                sx={{
                    backgroundColor: "#181818",
                    color:"#fff",
                    boxShadow: "none",
                    border:"none"
                }}
                style={{ boxShadow: "none", border: "none" }}
                >
                    <ul className='flex flex-col'>
                        <li className="py-[5px]">
                            <a href="#">Ferrari Line Up</a>
                        </li>
                        <li className="py-[5px]">
                            <a href="#">Ferrari Car Configurator</a>
                        </li>
                        <li className="py-[5px]">
                            <a href="#">Personolization</a>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion 
            sx={{
                marginBottom:"10px",
                boxShadow: "none",
                border:"none"
            }}
            >
                <AccordionSummary
                expandIcon={<MdExpandMore className='text-white' />}
                sx={{
                    backgroundColor: "#181818",
                    color:"#fff",
                    boxShadow: "none",
                    border:"none"
                }}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <p className='font-semibold'>Auto</p>
                </AccordionSummary>
                <AccordionDetails
                sx={{
                    backgroundColor: "#181818",
                    color:"#fff",
                    boxShadow: "none",
                    border:"none"
                }}
                >
                    <ul className='flex flex-col'>
                        <li className="py-[5px]">
                            <a href="#">Ferrari Line Up</a>
                        </li>
                        <li className="py-[5px]">
                            <a href="#">Ferrari Car Configurator</a>
                        </li>
                        <li className="py-[5px]">
                            <a href="#">Personolization</a>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div> */}
    </div>
    
  )
}
