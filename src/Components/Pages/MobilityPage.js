import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/MobilityImg.png'
import Img2 from '../Sections/CSS/Assets/MobilityImg1.png'

function MobilityPage() {
  return (
    <div>
        <HeaderComponent componentClass='MobilityHeader' highlightedText='Mobility'/>
        <InfoComponent
         heading='With a growing global workforce and consumer base,'
        paraText='“mobility” has become the new norm. In the business environment, mobility technologies boost productivity and connect remote workers by providing anywhere-anytime access to your corporate systems, applications, and information. But mobility introduces new risks, new issues, and new technology requirements for your IT infrastructure.'
        blueText='ITRegulators’ expertise across the mobile technology landscape and related disciplines can help you develop a mobile framework that ensures control, compliance, and accountability in an increasingly mobile world.'
        componentImage={Img1}
        />
<InfoComponent heading='Mobility solved' componentClass='Reverse'
paraText="In order to address the complexities of the mobile environment – both inside the data center and atthe endpoints – ITRegulators applies our knowledge of technologies across multiple disciplines including:"
listHeading='Remote Access -'
listText="ITRegulators’ IT professionals provide reliable, scalable solutions for your remote workers, including desktop virtualization, Citrix, Terminal Services, and VPN wireless access that enable anywhere-anytime access to your corporate systems, applications, and information."
listHeading1='Security – '
listText1='Remote channels open up the risk for unauthorized access – increasing business risk and threats to your corporate information. ITRegulators’ approach to security provides multiple layers of protection across your organization and at the endpoints, including anti-virus, encryption, and strong two-factor authentication, and managed security services.'
listHeading2='BYOD:'
listText2="The consumerization of IT is an issue that is unique to mobility. Referring to the increasing demand for IT departments to support employees’ personal mobile devices in the workforce – such as smart phones and tablets – this trend of Bring Your Own Device (BYOD) adds new stresses to already taxed IT management and support teams, and IT governance and compliance policies. ITRegulators can help you put policies in place that help you manage these diverse endpoints with considerations for end-user convenience and your concerns for security, governance, and compliance."
componentImage={Img2}
/>
    </div>
  )
}

export default MobilityPage