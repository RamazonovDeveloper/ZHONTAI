import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function RootLayout() {
  return (
    <div>
        <header>
            <Navbar/>
        </header>

        <main>
            <Outlet/>
        </main>

        <Footer/>
    </div>
  )
}

export default RootLayout
