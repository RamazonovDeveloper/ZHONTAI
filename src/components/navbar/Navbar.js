import React, { useEffect, useState } from 'react'

import logo from '../../assets/07.png'
import bayroq from '../../assets/bayroq.png'
import flag from '../../assets/Flag.png'

import {IoIosCloseCircleOutline} from 'react-icons/io'

import './navbar.css'
import { Link } from 'react-router-dom';

import { navbar } from '../../languageData/NavbarLang' 

export default function Navbar({setLang, lang}) {

  useEffect(() => {
  
    // window.addEventListener("scroll", controlNavbar)
    // return () => {
    //   window.removeEventListener("scroll", controlNavbar)
    // };
  
  }, []);

  const changeLang = (lang) => {
    localStorage.setItem("lang", lang)
    setLang(lang)
    console.log("Navbar lang has been changed")
    console.log(lang);
  }
    
  const [show, setShow] = useState(true)
    
  let lastScrollY = window.scrollY

  const controlNavbar = () => {
    if(lastScrollY < window.scrollY){
      setShow(false)
    }
    else{
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
                <div className='flex flex-col lg:flex-row w-full lg:justify-between'>
                    <div className='mobile_logo py-7 w-full lg:hidden '>
                      <img className='w-[150px] mx-auto cursor-pointer' src={logo} alt="" />
                    </div>
                    <div className='text-[25px] flex lg:flex-row flex-col lg:items-center px-0 lg:text-base'>
                      <IoIosCloseCircleOutline className='ml-auto mr-0 mt-5 mb-5 cursor-pointer lg:hidden' onClick={() => setActive(false)}/>
                      <Link className='ml-8 uppercase' onClick={() => setActive(false)} to={'/'}>{navbar[lang].link_1}</Link>
                      <Link className='ml-8 uppercase' onClick={() => setActive(false)} to={'/companies'}>{navbar[lang].link_2}</Link>
                      <Link className='ml-8 uppercase' onClick={() => setActive(false)} to={'/about'}>{navbar[lang].link_3}</Link>
                      <Link className='ml-8 uppercase' onClick={() => setActive(false)} to={'/advantages'}>{navbar[lang].link_4}</Link>
                    </div>
                    <div className='text-[25px] flex lg:flex-row mr-4 flex-col lg:items-center px-0 lg:text-base'>
                      <Link className='ml-8 uppercase' onClick={() => setActive(false)} to={'/products'}>{navbar[lang].link_5}</Link>
                      <Link className='ml-8 uppercase' onClick={() => setActive(false)} to={'/partners'}>{navbar[lang].link_6}</Link>
                      <Link className='ml-8 uppercase' onClick={() => setActive(false)} to={'/contacts'}>{navbar[lang].link_7}</Link>
                      <div className="flex ml-8">
                        <img
                          className={lang != "uz" ? "hidden" : "flex"}
                          onClick={() => changeLang("ru")}
                          src={bayroq}
                          alt="RuFlag"
                        />
                        <img
                          className={lang != "ru" ? "hidden" : "flex"}
                          onClick={() => changeLang("uz")}
                          src={flag}
                          alt="UzFlag"
                        />
                      </div>
                    </div>
                </div>
            </div>
            <p className='lg:hidden text-color_white cursor-pointer absolute ml-3 uppercase' onClick={() => setActive(true)}>{navbar[lang].link_8}</p>
            <div className='mx-auto'>
                <a href="#"><img className='w-[200px]' src={logo} alt="" /></a>
            </div>
        </div>
    </nav>
  )
}
