import React from 'react'
import ServicesHeader from '../Sections/ServicesHeader'
import ServicesSlider from '../Sections/ServicesSlider'
import Contact from '../Contact'

function ServicePage() {
  return (
<>    <ServicesHeader/>
    <div className='ServiceSlider'>

    <h1><span style={{borderBottom:'1px solid red'}}>Checking if working</span> offered by ITRegulators include:</h1>
    
    <ServicesSlider componentClass='ServicePageSlider'/>
    <ServicesSlider componentClass='ServicePageSlider'/>
    </div>
    <Contact />
    </>

  )
}

export default ServicePage