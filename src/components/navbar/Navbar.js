import React, { useEffect, useState } from 'react'

import logo from '../../assets/07.png'

import {IoIosCloseCircleOutline} from 'react-icons/io'

import './navbar.css'

export default function Navbar() {

    useEffect(() => {
    
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      };
    
    }, []);
    
  const [show, setShow] = useState(true)
    
  let lastScrollY = window.scrollY

  const controlNavbar = () => {
    if(lastScrollY < window.scrollY){
      setShow(false)
    }else{
      setShow(true)
    }
    
    lastScrollY = window.scrollY
}
    
  const [active, setActive] = useState(false)

  const nav_styles = "lg:text-color_white lg:bg-transparent lg:absolute lg:top-unset lg:left-0 w-full fixed top-0 text-black bg-white h-[100vh] lg:h-[90px] z-20 flex justify-center overflow-y-hiddeen navbar_transition "

  return (
    <nav className={ show ? "navbar fixed w-[100%] z-30" : "navbar fixed w-[100%] z-10 navbar_hide" }>
        <div className='h-[90px] flex items-center justify-between'>
            <div className={active ? `${nav_styles} left-0` : `${nav_styles} left-[100%]`}>
                <div className='container flex flex-col lg:flex-row w-full justify-between'>
                    <div className='mobile_logo py-7 w-full lg:hidden '>
                      <img className='w-[150px] mx-auto cursor-pointer' src={logo} alt="" />
                    </div>
                    <div className='text-[40px] flex lg:flex-row flex-col lg:items-center px-0 lg:text-base'>
                      <IoIosCloseCircleOutline className='ml-auto mr-0 mt-5 mb-5 cursor-pointer lg:hidden' onClick={() => setActive(false)}/>
                      <a className='ml-8 uppercase' href="#">Main</a>
                      <a className='ml-8 uppercase' href="#">Companies</a>
                      <a className='ml-8 uppercase' href="#">About</a>
                      <a className='ml-8 uppercase' href="#">Advantages</a>
                    </div>
                    <div className='text-[40px] flex lg:flex-row mr-4 flex-col lg:items-center px-0 lg:text-base'>
                      <a className='ml-8 uppercase' href="#">Products</a>
                      <a className='ml-8 uppercase' href="#">Partners</a>
                      <a className='ml-8 uppercase' href="#">Contacts</a>
                    </div>
                </div>
            </div>
            <p className='lg:hidden text-color_white cursor-pointer absolute ml-3' onClick={() => setActive(true)}>MENU</p>
            <div className='mx-auto'>
                <a href="#"><img className='w-[200px]' src={logo} alt="" /></a>
            </div>
        </div>
    </nav>
  )
}
