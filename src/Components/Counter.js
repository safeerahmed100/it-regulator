import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './css/Counter.css'
function Counter() {
  const [isScroll,setIsScroll]=useState(false)

  return (
    <div className='Counter'>
    <ScrollTrigger onEnter={()=>setIsScroll(true)} onExit={()=>setIsScroll(false)}>
        <div className='CountUp'>
          {isScroll &&  <h1><CountUp start={0} end={5000} delay={0} duration={10}/>+</h1>} 
          {isScroll &&  <h1><CountUp start={0} end={9000} delay={0} duration={10}/>+</h1>} 
          {isScroll &&  <h1><CountUp start={0} end={10} delay={0} duration={10}/>+</h1>} 
          {isScroll &&  <h1><CountUp start={0} end={4900} delay={0} duration={10}/>+</h1>} 
          
    </div>
    
      
    <div className='CountText'>
      <h1>Happy Customers</h1>
      <h1>Experienced Engineer</h1>
      <h1>Year's in the Industry</h1>
      <h1>Projects Completed</h1>
    </div>
    </ScrollTrigger>
    </div>
  )
}

export default Counter