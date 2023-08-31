import React from 'react'
import './CSS/Consultancy.css'
import { Fade} from 'react-awesome-reveal';

function ConsultancyHeader() {
  return (
   
    <div className=' ConsultancyHeader'>
        
      <Fade cascade damping={0.9}>
      <div className='banner'  >
        <div className='headerText'>
         
          <h1><span style={{color:'#509BF4'}}>IT Consultancy</span> Services</h1>
          
          </div> 
         
        
      </div>
      </Fade>
     
      </div>
      
  )

}

export default ConsultancyHeader