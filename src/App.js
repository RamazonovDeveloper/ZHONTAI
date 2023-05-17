import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";

import logo from './assets/07.png'
import ferrariImg from './assets/697316.jpeg'
import ferrariImg2 from './assets/758296.jpg'
import { useEffect, useState } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

// GSAP ANIMATION PLUGINS
import { gsap } from 'gsap';

// LOADER
import BeatLoader from "react-spinners/BeatLoader";
import Slider from './components/slider/Slider';
import Cards from './components/cards/Cards';
import Text_slider from './components/text_slider/Text_slider';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from './pages/Main';
import Companies from './pages/Companies';
import About from './pages/About';

import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Main/>}/>
      <Route path='companies' element={<Companies/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='advantages' element={<><h1>This is advantages page</h1></>}/>
      <Route path='products' element={<><h1>This is a products page</h1></>}/>
      <Route path='partners' element={<><h1>This is a partners page</h1></>}/>
      <Route path='contacts' element={<><h1>This is a contacts page</h1></>}/>
    </Route>
  )
)

function App() {

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
            className='loader_transition w-full h-[100vh] mt-[20%] text-center'
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
