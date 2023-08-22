import React from 'react'
import './CSS/AboutHeader.css'
import { Fade} from 'react-awesome-reveal';

function AboutHeader() {
  return (
   
    <div className='AboutHeader'>
        
      <div className='HeaderBlur' ></div>
      <Fade cascade damping={0.9}>
      <div className='banner'  >
        <div className='headerText'>
         
          <h1><span style={{color:'#509BF4'}}>ABOUT</span> US</h1>
          
          </div> 
         
        
      </div>
      </Fade>
     
      </div>
      
  )

}

export default AboutHeader