import React from 'react'
import Header from '../Sections/Header'
import About from '../Sections/About'
import Services from '../Sections/Services'
// import Testimonials from './Sections/Testimonials'
import Newsletter from '../Sections/Newsletter'
import Partners from '../Sections/Partners'
function Home() {
  return (
   <>
   <Header />
   <About />
   <Services />
   {/* <Testimonials /> */}
   <Newsletter />
   <Partners />
   </>
  )
}

export default Home