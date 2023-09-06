import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/EmergencyImg.png'
import Img2 from '../Sections/CSS/Assets/EmergencyImg1.png'

function EmergencySupport() {
  return (
    <div>
<HeaderComponent componentClass='EmergencySupportHeader' highlightedText='IT' Text=' Emergency Support'/>
<InfoComponent 
heading='Emergency support'
paraText='We understand that every minute of downtime could mean thousands of dollars in lost revenue for your business. We also understand that when you need IT help, you need it now. That’s why we’re committed to providing instant phone and on-site emergency support to businesses across the US.'
paraTwo='Our experience in resolving IT issues for businesses of all sizes and industries has enabled us to develop thorough yet swift processes to find the root cause of your IT problems, fix it promptly and effectively, and recommend best practices to avoid such disruptions in the future.'
componentImage={Img1}
/> 
<InfoComponent 
componentClass='Reverse' 
heading='With our IT Emergency support, you get:'
listHeading='Immediate Assistance — '
listText='while our technicians are on their way to solve your problems on-site, we’ll remotely set up a secure connection to your business and begin troubleshooting issues right away'
listHeading1='Expert help — '
listText1='whether your operations suffer from the malfunction of hardware, industry-specific software, or other IT problems, our IT specialists will quickly help you get back up and running and avoid common issues in the future'
listHeading2='Peace of mind — '
listText2='run your business with ease knowing that IT Support is only a call away'
blueText='ITRegulators’ emergency support ensures fast and efficient solutions to whatever it problem arises'

componentImage={Img2}
/> 
    
    </div>
  )
}

export default EmergencySupport