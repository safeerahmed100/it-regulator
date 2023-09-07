import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import ManageServiceImg from '../Sections/CSS/Assets/ManageService.png'
import ManageServiceImg2 from '../Sections/CSS/Assets/ManageService1.png'
import BannerComponent from '../Sections/BannerComponent'
import IconsComponent from '../Sections/IconsComponent'
function ManageServices() {
  return (
    <div>
        <HeaderComponent componentClass='ManageServiceHeader' highlightedText='IT Managed ' Text='Services'/>
        <InfoComponent 
        heading='ITRegulators offers customized IT support service'
        paraText='Agreements to suit the unique needs and demands of varied working environments. Bundled service agreements include a comprehensive offering of services, and can be created to effectively and efficiently manage the unique day-to-day maintenance demands of your systems'
        componentImage={ManageServiceImg}
        />
        <IconsComponent 
        heading='Managed IT Services from ITRegulators include:'
        iconClass='fa-regular fa-circle-question'
        iconText='Remote Support/Help Desk'
        iconClass1='fa-solid fa-file-shield'
        iconText1='Email Security and Spam Filtering'
        iconClass2= 'fa-solid fa-tower-broadcast'
        iconText2='Emergency Coverage'
        iconClass3='fa-solid fa-database'
         iconText3='Offsite Data Backup'
        iconClass4='fa-solid fa-rotate-left'
         iconText4='Recurring Onsite Support Visits'
        iconClass5='fa-solid fa-chess-king'
         iconText5='Strategic Technology Planning'
        iconClass6='fa-solid fa-sliders'
         iconText6='Proactive Maintenance'
        iconClass7='fa-solid fa-handshake'
         iconText7='Contract Management'
        iconClass8= 'fa-solid fa-computer'
        iconText8='24/7 Network Monitoring'
        />
        <BannerComponent componentClass='manageContainer'
          BannerPara='Defining the appropriate level of support can depend on a variety of factors, including the size of your organization, hardware and applications used, corporate structure and culture, and management policies. We’ll work closely with you to understand your unique business needs and identify the most suitable support arrangement for your organization. Managed IT Services let you forget about the worries associated with technology, help you lower costs and allow you to concentrate on growing your business and keeping your customers happy.'
        />
       

         <InfoComponent 
         boldHeading='Find out more about how Managed IT Services from ITRegulators can create a solid foundation on which to build your organization.'
        componentImage={ManageServiceImg2}
        buttonText='Learn More'
        />
    </div>
  )
}

export default ManageServices