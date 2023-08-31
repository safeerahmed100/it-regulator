import React from 'react'
import './CSS/Consultancy.css'
import { Fade} from 'react-awesome-reveal';

function StaffingHeader() {
  return (
   
    <div className=' ConsultancyHeader StaffingHeader'>
        
      <Fade cascade damping={0.9}>
      <div className='banner'  >
        <div className='headerText'>
         
          <h1><span style={{color:'#509BF4'}}>IT </span> Staffing</h1>
          
          </div> 
         
        
      </div>
      </Fade>
     
      </div>
      
  )

}

export default StaffingHeader