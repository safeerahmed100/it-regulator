import React from 'react'
import './CSS/ServicesHeader.css'
import { Fade } from 'react-awesome-reveal'

function ServicesHeader() {
  return (
    <div className='ServicesHeader'>

<div className='HeaderBlur' ></div>
      <div className='banner'  >
        <div className='headerText'>
          <Fade cascade damping={0.9}>
          <h1><span style={{color:'#509BF4'}}>SERVICES</span>&<br/> SOLUTIONS</h1>
          <p>
          At ITRegulators, Inc we are proud to offer a truly comprehensive range of IT services, support and solutions which encompass everything from help desk support to online marketing to IT recruitment and staffing.. 
Whether you’re looking to transition your IT to the Cloud, you need help with SEO to ensure your website gets found by your potential customers or you need rapid support anywhere in the state of Illinois, we are the team of experts to talk to.
          </p>
     
          </Fade>
          </div>
         

    </div>
    </div>
  )
}

export default ServicesHeader