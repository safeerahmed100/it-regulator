import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import BannerComponent from '../Sections/BannerComponent'

import Img1 from '../Sections/CSS/Assets/ExchangeImg1.png'
import Img2 from '../Sections/CSS/Assets/ExchangeImg2.png'
function ExchangePage() {
  return (
    <div>
<HeaderComponent componentClass='ExchangeHeader' highlightedText='Exchange'/>
<InfoComponent heading='Microsoft Exchange'
paraText='Server is the number one email and messaging platform in the world and is the backbone of the communications infrastructure for most organizations. Exchange, including the Outlook client, provides a rich end-user experience with unified communications – including email, voice mail, and instant messaging – as well as calendaring, task management, and contact management.'
componentImage={Img1}/>
<BannerComponent componentClass='ExchangeBanner'
BannerPara='ITRegulators applies best practices and our deep Microsoft technical expertise to design and implement effective Exchange-based communication solutions. These solutions deliver on the powerful benefits of the Exchange platform to keep your business – and your users – connected.'
/>
<InfoComponent 
heading='Full-function communications' 
paraText='There are dozens of tools and complementary products that add functionality to the Exchange/Outlook solution and ITRegulators can help you leverage these through our managed services offerings, including:'
listHeadingBold='Anti-spam'
listHeadingBold1='Encryption'
listHeadingBold2='Cloud archiving solutions'
paraThree='In addition to this, as Exchange takes advantage of emerging technologies to these complementary products, the way in which Exchange is deployed is changing. IITRegulators’ IT professionals can help you move your Exchange Server to the Cloud or private Cloud – or help you leverage virtualization and SAN storage technologies if you are staying with an on-premise solution but deploying it in a high availability (HA) configuration.'
componentImage={Img2}
/>  
<InfoComponent
componentClass='ExchangeBanner1'
heading='Multiple choices'
listHeadingBold='Upgrades from previous version'
listHeadingBold1='On-premise to cloud migration'
listHeadingBold2='Archiving solutions'
listHeadingBold3='Email encryption'
listHeadingBold4='Notes to Exchange migration'
listHeadingBold5='Cloud to on-premise migration'
listHeadingBold6='High-availability configurations'
listHeadingBold7='Office Communication Server (OCS)'
paraText='The number of solutions, methods of deployment, and the changing landscape mean that deploying an Exchange Solution is no longer straightforward. Our certified IT professionals apply Microsoft best practices and the combined expertise of our consultants helps you assess, plan, and implement a solution that works for your business. ITRegulators’ Exchange-related services include:'
blueText='In addition to the core Exchange Server ITRegulators is also a certified partner for Active Directory and SharePoint. As Microsoft continues to integrate these technologies more tightly our knowledge, certified skills, and experience across the Microsoft product stack are more critical than ever in helping us deliver the most effective, seamless Microsoft-based solutions for your business.'

/>

    
    
    </div>
  )
}

export default ExchangePage