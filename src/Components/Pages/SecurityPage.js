import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/SecurityImg.png'
import Img2 from '../Sections/CSS/Assets/SecurityImg1.png'

function SecurityPage() {
  return (
    <div>
    <HeaderComponent componentClass='SecurityHeader' highlightedText='Security' Text=' Systems'/>
    <InfoComponent heading='Businesses of All sizes face'
    paraText='the risks of physical theft and unauthorized entry. And, just as with cyberthreats, thieves target small- to mid-sized businesses like yours, assuming your security systems are weak and vulnerable to their advanced methods. Prove them wrong with ITRegulators’ cutting-edge and efficient security systems.
    Our technicians will assess your risks and priorities, then recommend the most effective security systems for your company. We’ll install the devices strategically to ensure maximum protection with advanced configurations so you can run your business with confidence, knowing your critical assets are protected.'
    componentImage={Img2}
    />
    <InfoComponent componentClass='Reverse' 
    heading='Our Wide Range Of Security Systems Include:'
    listHeading='Video surveillance — '
    listText='closely monitor and record activity on your property with CCTV (closed-circuit television)'
    listHeading1='Access control systems — '
    listText1='control and track who enters and leaves your property with detailed records'
    listHeading2='Burglar alarm systems — '
    listText2='ensure law enforcement and security personnel are alerted fast when an incident occurs'
    listHeading3='Intercom systems — '
    listText3='screen access to buildings and communicate seamlessly throughout the office'
    blueText='Keep Your Business Safe From Physical Threats With Itregulators’ Advanced Security Systems'
    componentImage={Img1}
    />
    </div>
  )
}

export default SecurityPage