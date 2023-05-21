import './App.css';

import 'swiper/css';
import "swiper/css/pagination";

import { useEffect, useState } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

// GSAP ANIMATION PLUGINS
import { gsap } from 'gsap';

// LOADER
import BeatLoader from "react-spinners/BeatLoader";
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from './pages/Main';
import Companies from './pages/Companies';
import About from './pages/About';

import RootLayout from './layouts/RootLayout'
import Advantages from './pages/Advantages';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Partners from './pages/Partners';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout/>}>
//       <Route index element={<Main/>}/>
//       <Route path='companies' element={<Companies/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='advantages' element={<Advantages/>}/>
//       <Route path='products' element={<><h1>This is a products page</h1></>}/>
//       <Route path='partners' element={<><h1>This is a partners page</h1></>}/>
//       <Route path='contacts' element={<><h1>This is a contacts page</h1></>}/>
//     </Route>
//   )
// )

function App() {
  
  const identifyLang = localStorage.getItem('lang')

  if (!identifyLang) {
    localStorage.setItem("lang", "uz")
    identifyLang = "uz"
  }

  const [lang, setLang] = useState(identifyLang)
  console.log("App js lang is");
  console.log(lang)
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout setLang={setLang} lang={lang}/>}>
        <Route index element={<Main/>}/>
        <Route path='companies' element={<Companies/>}/>
        <Route path='about' element={<About lang={lang}/>}/>
        <Route path='advantages' element={<Advantages lang={lang}/>}/>
        <Route path='products' element={<Products lang={lang}/>}/>
        <Route path='partners' element={<Partners/>}/>
        <Route path='contacts' element={<Contacts lang={lang}/>}/>
      </Route>
    )
  )


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [loading, setLoading] = useState(false)
  
  gsap.to(".my_card_text", { duration: 1, opacity: 1, y: -40})

  gsap.to(".single_card_title_span", {duration: 5, opacity: 1, y:-30})
  
  let tl = gsap.timeline()
  
  tl.to(".my_card_img", { left:'0%', duration: .8, opacity: 1}) 
  
  tl.to(".my_card_img2", { left:'0%', duration: 1.6, opacity: 1})

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, []); 

  return (
    
    <div className="App">

      {
        loading ? 
          <BeatLoader
            className='loader_transition w-full h-[100vh] mt-[20%] text-center overflow-hidden'
            color={"#34D5D5"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        : 
          <RouterProvider router={router}/>
          
          // <div className='w-full relative'>
          //   {/* NAVBAR SECTION */}

          //   <Navbar />

          //   {/* <nav className={ show ? "navbar fixed w-[100%] z-10" : "navbar fixed w-[100%] z-10 navbar_hide"}>
          //     <div className='h-[90px] flex items-center'>
          //       <div className={'text-color_white absolute w-full'}>
          //         <div>
          //           <a className='ml-3' href="#">AUTO</a>
          //           <a className='ml-3' href="#">RACING</a>
          //           <a className='ml-3' href="#">COLLECTIONS</a>
          //         </div>
          //       </div>
          //       <a className='lg:hidden text-color_white absolute ml-3' href="#" onClick={() => setOpenNavbar(true)}>MENU</a>
          //       <div className='mx-auto'>
          //         <a href="#"><img className='w-[150px]' src={logo} alt="" /></a>
          //       </div>
          //     </div>
          //   </nav> */}

          //   {/* SLIDER SECTION */}
          //   <Slider/>

          //   {/* SECTION SINGLE CARD */}
          //   <Text_slider/>
            

          //   {/* SECTION CARDS */}
          //   <Cards/>


          //   {/* FOOTER */}
          //   <Footer />

          // </div>
      }

      
    </div>
  );
}



export default App;
