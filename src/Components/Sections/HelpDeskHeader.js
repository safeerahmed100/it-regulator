import React from 'react'
import './CSS/AboutHeader.css'
import { Fade} from 'react-awesome-reveal';

function HelpDeskHeader() {
  return (
   
    <div className='HelpDeskHeader'>
        
      <Fade cascade damping={0.9}>
      <div className='banner'  >
        <div className='headerText'>
         
          <h1><span style={{color:'#509BF4'}}>IT</span> Help Desk</h1>
          
          </div> 
         
        
      </div>
      </Fade>
     
      </div>
      
  )

}

export default HelpDeskHeader