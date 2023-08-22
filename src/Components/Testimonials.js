import React from 'react'
import './css/Testimonials.css'
import { Fade, Slide } from 'react-awesome-reveal'


function Testimonials() {
  
   

  return (
    
    <div className='Testimonials'>
      <div className='HeaderBlur'></div>
      <Slide duration={1000}>
    <h1>WHAT OUR CLIENT'S SAY</h1>
    </Slide>

   

    <div className='TestimonialsSlider'>
      <Fade cascade damping={0.3}>
     
      <div className='hoverContainer firstCont'>
        <div className='hoverBgBlur first'>
          
        <p>We have been using the services of IT Regulators for about four years now,
          and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…</p>
        <h2>MIKE</h2>  
        <span>CPA Partner, Benford Brown & Associates</span></div>
        </div>
      

          

      <div className='hoverContainer second secondCont'>
      <div className='hoverBgBlur second'>
      <p>We have been using the services of IT Regulators for about four years now,
          and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…</p>
           <h2>SAMITE</h2>
           <span>CPA Partner, Benford Brown & Associates</span></div>
           </div>

      <div className='hoverContainer middle thirdCont'> <div className='hoverBgBlur middle'>
      <p>We have been using the services of IT Regulators for about four years now,
          and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…</p>
        <h2>KAITHY</h2>
        <span>CPA Partner, Benford Brown & Associates</span>
        </div></div>
      <div className='hoverContainer middle fourthCont'> <div className='hoverBgBlur middle'>
      <p>We have been using the services of IT Regulators for about four years now,
          and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…</p>
        
        <h2>KIMI</h2>
        <span>CPA Partner, Benford Brown & Associates</span>
      </div></div>
      <div className='hoverContainer middle fifthCont'> <div className='hoverBgBlur middle'>
      <p>We have been using the services of IT Regulators for about four years now,
          and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…</p>
        <h2>OAKES</h2>
        <span>CPA Partner, Benford Brown & Associates</span>
        </div></div>
      <div className='hoverContainer second sixthCont'> <div className='hoverBgBlur second'>
      <p>We have been using the services of IT Regulators for about four years now,
          and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…</p>
        <h2>LAUREN</h2>
        <span>CPA Partner, Benford Brown & Associates</span>
        </div></div>
      <div className='hoverContainer seventhCont'> <div className='hoverBgBlur first'>
      <p>We have been using the services of IT Regulators for about four years now,
          and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…</p>
        <h2>RAYAN</h2>
        <span>CPA Partner, Benford Brown & Associates</span>
        </div></div>
        </Fade>
   
    </div>
   

    </div>
  )
  
  }

export default Testimonials