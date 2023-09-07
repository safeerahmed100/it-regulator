import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import BannerComponent from '../Sections/BannerComponent'

import Img1 from '../Sections/CSS/Assets/DirectoryImg.png'
import Img2 from '../Sections/CSS/Assets/DirectoryImg1.png'
import Img3 from '../Sections/CSS/Assets/DirectoryImg2.png'
function DirectoryPage() {
  return (
    <div>
<HeaderComponent componentClass='DirectoryHeader' highlightedText='Active' Text='Directory'/>
<InfoComponent heading='Active Directory provides the foundation for access,'
paraText='security, and network management, and is an integral part to any IT security, risk management, and compliance strategy. Companies often lack the resources and procedures to keep the Active Directory environments up to date. This can lead to tactical decisions that create more problems, such as outdated group policies that give inappropriate access to staff – or former employees.
'
componentImage={Img1}/>
<BannerComponent componentClass='DirectoryBanner'
BannerPara='ITRegulators leverages Microsoft best practices to ensure the performance, automation, and scalability of your Active Directory environment. ITRegulators’ deep knowledge, experience, and understanding of Active Directory help you harness its power, delivering robust capabilities that go beyond basic access.'/>  

<InfoComponent componentClass='Reverse' heading='Cleaning up the environment' 
paraText='ITRegulators begins by assessing your Active Directory environment and provides actionable, prioritized recommendations for helping you establish the procedures and functionality that you need. We also can provide the resources you need for your Active Directory project through our flexible staff augmentation or IT consulting service – depending on the project scope and degree of expertise and guidance you require.'
componentImage={Img2}
/>  
<InfoComponent heading='A solid foundation'
paraText='Whether you need to ensure the basic performance of your Active Directory service or want to take full advantage of its power, ITRegulators can help. We are a professional IT consulting firm that provides resources and IT services for all of your related project-based Active Directory needs, including:'
componentImage={Img3}
listHeadingBold='Active Directory assessments'
listHeadingBold1='Customized group policies'
listHeadingBold2='Internet Explorer management'
listHeadingBold3='Integrating endpoints, such as firewalls or switches into Active Directory'
listHeadingBold4='Domain migrations'
listHeadingBold5='Customized scripts'
listHeadingBold6='Desktop security'
/>
    
    
    </div>
  )
}

export default DirectoryPage