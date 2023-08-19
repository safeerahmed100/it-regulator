import React, { useState } from 'react'
import './css/Testimonials.css'

function Testimonials() {

  
   
 
  return (
    <div className='Testimonials'>
    <h1>WHAT OUR CLIENT'S SAY</h1>

    <div className='TestimonialsSlider'>
      <div className='hoverContainer'></div>
      <div className='hoverContainer second'></div>
      <div className='hoverContainer middle'></div>
      <div className='hoverContainer middle'>
      <p>We have been using the services of IT Regulators for about four years now, and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…</p>
      </div>
      <div className='hoverContainer middle'></div>
      <div className='hoverContainer second'></div>
      <div className='hoverContainer'></div>
    </div>
    </div>
  )
  }

export default Testimonials