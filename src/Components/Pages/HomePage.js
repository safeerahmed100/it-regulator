import React from 'react'
import Header from '../Sections/Header'
import About from '../Sections/About'
import Services from '../Sections/Services'
 import Testimonials from '../Sections/Testimonials'
import Newsletter from '../Sections/Newsletter'
import Partners from '../Sections/Partners'
import Contact from '../Contact'

function Home({isHover,setIsHover}) {
  return (
   <>
   <Header isHover={isHover} setIsHover={setIsHover} />
   <About isHover={isHover} setIsHover={setIsHover} />
   <Services isHover={isHover} setIsHover={setIsHover} />
    <Testimonials /> 
   <Newsletter />
   <Partners />
   <Contact/>
   </>
  )
}

export default Home