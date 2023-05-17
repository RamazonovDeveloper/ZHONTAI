import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import {MdExpandMore} from 'react-icons/md';
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#181818] text-white'>
        <div className=' lg:flex justify-evenly py-6 hidden'>
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
        <div className='lg:hidden w-[50%]'>
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
        </div>
    </div>
    
  )
}
