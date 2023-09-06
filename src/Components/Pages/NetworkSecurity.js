import React from 'react'
import InfoComponent from '../Sections/InfoComponent'
import HeaderComponent from '../Sections/HeaderComponent'
import NetworkServiceLock from '../Sections/CSS/Assets/NetworkServiceLock.png'
import NetworkServiceMan from '../Sections/CSS/Assets/NetworkServiceMan.png'
import NetworkServiceLaptop from '../Sections/CSS/Assets/NetworkServiceLaptop.png'

function NetworkSecurity() {
  return (
    <div>
        <HeaderComponent componentClass='NetwokSecurityHeader' highlightedText='Network' Text=' Security'/>
        {/* <NetworkServiceInfo/> */}
        <InfoComponent
          heading='Protect your network, safeguard 
          your data, and secure your business!'
          subHeading=''
          paraText='Many businesses are increasingly prioritizing their network security and the prevention of unauthorized access to sensitive company information. This information can range from highly confidential intellectual property to private compensation data. Regardless of its nature, unauthorized access to such information can have detrimental effects on any business. Interestingly, while the assumption is often that the threat comes from external sources, more often than not, it originates from within the organization itself, in the form of a trusted employee with inappropriate access privileges. What are the typical security issues that we commonly encounter?'
          componentImage={NetworkServiceLaptop}
        />
                <InfoComponent
          heading='Here are some of the most prevalent problems identified by our team of ITRegulators experts:'
          
          listItem1='Lack of firewall protection '
          listItem2='Outdated anti-virus/anti-spyware software'
          listItem3='Inadequate security access controls'
          listItem1Para='unfortunately, many of the firms we assess either lack a firewall altogether or have one that is inadequate in defending against modern cyber-attacks.'
          listItem2Para='while these security measures are often installed, they are frequently disabled or not kept up to date, rendering them largely ineffective (approximately 65% of the time).'
          listItem3Para='in many cases, comprehensive security access controls are not implemented, allowing individuals with basic computer knowledge to have unrestricted access. Imagine the potential consequences if everyone in your company had access to confidential human resources, accounting, or proprietary company data.'
          componentClass='Reverse'
          boldHeading='In nearly 90% of cases, we discover these and 
          other significant security vulnerabilities.'
          componentImage={NetworkServiceLock}
        />
        <InfoComponent
        heading='ITRegulators offers Business Security Assessments'
          paraText='precisely for this reason. Regardless of the source of the threat, our team of security engineers collaborates with clients to identify areas that require protection and ensures that appropriate measures are implemented. Our process is simple and transparent: We engage in a comprehensive discussion with you to understand your specific concerns, conduct a thorough examination of your existing infrastructure, and share our findings. If any changes are necessary, we provide expert guidance on the specific areas that require attention and offer recommendations on how to address them effectively.'
          componentImage={NetworkServiceMan}
        />
    </div>
  )
}

export default NetworkSecurity