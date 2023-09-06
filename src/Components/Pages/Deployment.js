import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import BannerComponent from '../Sections/BannerComponent'
import Img1 from '../Sections/CSS/Assets/Deployment1 .png'
import Img2 from '../Sections/CSS/Assets/Deployment2.png'
import Img3 from '../Sections/CSS/Assets/Deployment3.png'
import Img4 from '../Sections/CSS/Assets/Deployment4.png'


function Deployment() {
  return (
    <div>
      <HeaderComponent componentClass='DeploymentHeader' highlightedText='IT' Text=' Deployment'/>
      
      <InfoComponent heading='Project planning'
      paraText='An integral part of our Project Management philosophy is the creation and management of detailed and workable project plans.'
      boldpara='Through consultation workshops with all parties involved every element of the project is analyzed and documented.'
     componentImage={Img1}
     />
     <InfoComponent heading='Production and customizing'
     componentClass='Reverse'
     paraText='End user requirements vary from client to client. In our production facility we can customize your system to your specifications.'
     boldpara='Hardware upgrades, software upgrades, asset tagging or deployment staging.'
     componentImage={Img2}
     />

      <InfoComponent heading='Hardware and software installation'
      paraText='All our deployment teams are certified and experienced engineers; we will tailor the installation process to meet your requirements and user expectations.'
      boldpara='From hardware deployments and upgrades to software integration we can deliver on your needs and the needs of your business.'
      componentImage={Img3}
     />

<InfoComponent heading='Logistics and delivery'
     componentClass='Reverse'
     paraText='With every project, the delivery to site and the removal of obsolete equipment can pose additional strains on any IT department or facility management.'
     boldpara='Combining our staging area with your logistic experience we can ensure a seamless and painless deployment on a nationwide basis.'
     componentImage={Img4}
     />

<InfoComponent heading='Offsite configuration'
paraText='Getting the product to the desk is only one phase of any project, final configuration and user specific requirements require the skills of experienced engineers.'
boldpara='Our deployment teams follow detailed instructions and sign-off processes to ensure the user experience is delivered ensuring IT support confidence is retained and enhanced at the end'
componentImage={Img3}
     />
      <BannerComponent
      componentClass='DeploymentBanner'
      BannerPara='Talk to us about how IT Deployment services from ITRegulators can benefit your business'
      BannerBtn='Contact Us Now'
      />

    </div>
  )
}

export default Deployment