import React from 'react'
import Vid from './CSS/Assets/Group 4355.png'
import './CSS/About.css'
import {  Fade, Slide } from "react-awesome-reveal";


function About() {

  return (


  
  <div className='About'>
    
<div className='AboutText'>
  
      <h1>ABOUT US</h1>
      <Fade cascade damping={0.5}   >
      <h4>why ITregulators</h4>
      <p>Whether your business operates in Chicago, Woodstock, Manteno, or anywhere else in the Chicagoland area and Wisconsin, ITRegulators can provide valuable assistance. Partnering with ITRegulators will give your business a competitive edge.
At ITRegulators, we understand that one-size-fits-all solutions are not effective. We believe that technology should be highly customizable to meet the unique needs of your Chicagoland business. Our goal is to help your business grow and evolve, adapting to the changing demands of your clients over time.</p>
   <button className='btn'>Get a Quote</button>
   </Fade>
    </div>
    
    <Slide direction={'right'}>
    <div className='AboutVid'>
    <img src={Vid} alt='src' />
    </div>
    </Slide>
    </div>
  
    
 
  )
}

export default About