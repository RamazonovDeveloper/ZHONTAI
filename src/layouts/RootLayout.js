import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function RootLayout({setLang, lang}) {
  return (
    <div>
        <header>
            <Navbar setLang={setLang} lang={lang}/>
        </header>

        <main>
            <Outlet/>
        </main>

        <Footer lang={lang}/>
    </div>
  )
}

export default RootLayout
