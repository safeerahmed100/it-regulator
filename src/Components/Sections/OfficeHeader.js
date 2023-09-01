import React from 'react'
import './CSS/AboutHeader.css'
import { Fade} from 'react-awesome-reveal';

function OfficeHeader() {
  return (
   
    <div className='OfficeHeader'>
        
      <Fade cascade damping={0.9}>
      <div className='banner'  >
        <div className='headerText'>
         
          <h1><span style={{color:'#509BF4'}}>Office</span> 365</h1>
          
          </div> 
         
        
      </div>
      </Fade>
     
      </div>
      
  )

}

export default OfficeHeader