import React from 'react'
import ServicesHeader from '../Sections/ServicesHeader'
import ServicesSlider from '../Sections/ServicesSlider'

function ServicePage() {
  return (
<>    <ServicesHeader/>
    <div className='ServiceSlider'>

    <h1><span style={{borderBottom:'1px solid red'}}>Services</span> offered by ITRegulators include:</h1>
    
    <ServicesSlider/>
    <ServicesSlider/>
    
    </div>
    </>

  )
}

export default ServicePage