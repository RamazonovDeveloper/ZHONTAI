import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/slider/Slider'
import Text_slider from '../components/text_slider/Text_slider'
import Cards from '../components/cards/Cards'
import Footer from '../components/footer/Footer'

export default function Main() {
  return (
    <div className='w-full relative'>

        {/* NAVBAR */}
        {/* <Navbar/> */}

        {/* HERO SLIDER*/}
        <Slider/>

        {/* SLIDER WITH TEXTS SETION */}
        <Text_slider/>

        {/* CARDS SECTION */}
        <Cards/>

        {/* FOOTER */}
        {/* <Footer/> */}
    </div>
  )
}