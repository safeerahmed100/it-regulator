import React from 'react'
// import AboutInfo from '../Sections/AboutInfo'
import HeaderComponent from '../Sections/HeaderComponent'
import Contact from '../Contact'
import InfoComponent from '../Sections/InfoComponent'
import AboutInfoImg1 from '../Sections/CSS/Assets/AboutInfoImg1.png'
 import AboutInfoImg2 from '../Sections/CSS/Assets/AboutInfoImg2.png'
import ResponsiveNav from '../Sections/ResponsiveNav'
 


function AboutPage() {
 
  return (
    <>
    <HeaderComponent componentClass='AboutHeader' highlightedText='ABOUT' Text=' US'/>


        <InfoComponent
          heading='ITRegulators'
          paraText='Since 2007 ITRegulators, Inc has been dedicated to providing a carefully selected pool of some of the best technology talent available in the U.S. Our innovative process of strategic alliances and virtual technology resources allow us to offer the kind of savvy talent and systems solutions you need to not just ride the waves of technology but to confidently take your small or medium-sized business into the future. '
          buttonText='Contact US'
          componentImage={AboutInfoImg1}
        />
         <InfoComponent
          paraText='The ITRegulators approach of ‘Manage & Regulate’ outsourcing service provides businesses just like yours with a comprehensive solution that enables both owners and managers to concentrate more on growing their business and worrying less about their IT. We are proud to be a Veteran Owned Business (VOB) and offer support to our veteran brothers and sisters, helping them to secure employment and find a new and satisfying career after their military service has ended. With our company headquarters in Romeoville IL., and satellite branches across Illinois, ITRegulators are ideally placed to serve any small or medium-sized business who wants to lower IT expenses and gain a certified technology professional who provides full-service IT support by acting as a virtual IT department. Want to learn more about how ITRegulators can help your business? '
          componentClass='Reverse'
          componentImage={AboutInfoImg2}
        />
    <Contact />
    <ResponsiveNav/>

    </>
  )
}

export default AboutPage