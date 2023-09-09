import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/IndustriesImg.png'

function Industries() {
  return (
    <div>
<HeaderComponent componentClass='IndustriesHeader' highlightedText='Industries'/>
<InfoComponent heading='Industries' componentClass='Industries'
paraText='ITRegulators takes pride in being able to customize our solutions for our clients specialized needs. The members of our team hail from diverse industrial backgrounds. This provides us unique insight and experience with technology used in each of these industries. Our insight and experience allow us to customize solutions for our clients based on the industry they operate in, and allows us to support a myriad of industry-specific technologies.'
bluePara='The following is a list of some of the industries that our clients operate in:'
listHeadingBold='Accounting'
listHeadingBold1='Architectural'
listHeadingBold2='Automotive'
listHeadingBold3='Catering'
listHeadingBold4='Consulting'
listHeadingBold5='Dental Care'
listHeadingBold6='Education'
listHeadingBold7='Event Planning'
listHeadingBold8='Health Care'
listHeadingBold9='HVAC'
listHeadingBold10='Insurance'
listHeadingBold11='Legal'
listHeadingBold12='Manufacturing'
listHeadingBold13='Marketing'
listHeadingBold14='Medical Records'
listHeadingBold15='Non-Profit'
listHeadingBold16='Real Estate'
listHeadingBold17='Restaurant'
listHeadingBold18='Retail'
listHeadingBold19='Security'
listHeadingBold20='Financial'
listHeadingBold21='And More…'
componentImage={Img1}

/>



    </div>
  )
}

export default Industries