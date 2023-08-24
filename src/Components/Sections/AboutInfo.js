import React from 'react'
import './CSS/AboutInfo.css'
import AboutInfoImg1 from './CSS/Assets/AboutInfoImg1.png'
import AboutInfoImg2 from './CSS/Assets/AboutInfoImg2.png'
import { Fade } from 'react-awesome-reveal'


function AboutInfo() {
  return (
    <div className='AboutInfo'>
        <Fade cascade damping={0.5}>
        <h1>ITREGULATORS</h1>
        <div className='AboutInfoContainer'>
            <div className='AboutInfoText'>
        <p>Since 2007 ITRegulators, Inc has been dedicated to providing a carefully selected pool of some of the best technology talent available in the U.S. Our innovative process of strategic alliances and virtual technology resources allow us to offer the kind of savvy talent and systems solutions you need to not just ride the waves of technology but to confidently take your small or medium-sized business into the future. </p>       
        <button className='btn'>CONTACT NOW</button>
        </div>
       
        <img src={AboutInfoImg1} alt='buildings' />
        
        </div>
      

        <div className='AboutInfoContainer AboutInfoContainer2'>
            <div className='AboutInfoText'>
        <p>The ITRegulators approach of ‘Manage & Regulate’ outsourcing service provides businesses just like yours with a comprehensive solution that enables both owners and managers to concentrate more on growing their business and worrying less about their IT. We are proud to be a Veteran Owned Business (VOB) and offer support to our veteran brothers and sisters, helping them to secure employment and find a new and satisfying career after their military service has ended. With our company headquarters in Romeoville IL., and satellite branches across Illinois, ITRegulators are ideally placed to serve any small or medium-sized business who wants to lower IT expenses and gain a certified technology professional who provides full-service IT support by acting as a virtual IT department. Want to learn more about how ITRegulators can help your business?</p>
        </div>
       
        
        <img src={AboutInfoImg2} alt='nightlight' />
        
        </div>
        </Fade>
    </div>
  )
}

export default AboutInfo