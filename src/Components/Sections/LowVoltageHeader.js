import React from 'react'
import './CSS/AboutHeader.css'
import { Fade} from 'react-awesome-reveal';

function LowVoltageHeader() {
  return (
   
    <div className='LowVoltageHeader'>
        
      <Fade cascade damping={0.9}>
      <div className='banner'  >
        <div className='headerText'>
         
          <h1><span style={{color:'#509BF4'}}>Low</span> Voltage<br/>Cabling</h1>
          
          </div> 
         
        
      </div>
      </Fade>
     
      </div>
      
  )

}

export default LowVoltageHeader