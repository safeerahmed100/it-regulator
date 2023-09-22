import React from 'react'
import ServicesHeader from '../Sections/ServicesHeader'
import ServicesSlider from '../Sections/ServicesSlider'
import CompentencySlider from '../Sections/CompentencySlider'

import Contact from '../Contact'

function ServicePage() {
  return (
<>    <ServicesHeader/>
    <div className='ServiceSlider'>

    <h1><span style={{borderBottom:'1px solid red'}}>Services</span> offered by ITRegulators include:</h1>
    
    <ServicesSlider componentClass='ServicePageSlider'/>
    <CompentencySlider componentClass='ServicePageSlider'/>
    </div>
    <Contact />
    </>

  )
}

export default ServicePage