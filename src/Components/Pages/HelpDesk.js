import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import BannerComponent from '../Sections/BannerComponent'
import Img1 from '../Sections/CSS/Assets/HelpDeskGuy.png'
import IconsComponent from '../Sections/IconsComponent'




function HelpDesk() {
  return (
    <div>
        < HeaderComponent componentClass='HelpDeskHeader' highlightedText='IT' Text=' Help Desk'/>
      <InfoComponent 
        heading='An outsourced IT Help Desk solution for any organization'
        paraText='ITRegulators offer comprehensive outsourced IT help desk services to customers who require a full service technical resource center, full or part-time help desk, application support center, or customer service desk. No matter what type of help desk functions you need to outsource, we can provide you with a complete and custom turnkey solution.'
        paraTwo='Our outsourced IT help desk solutions allow your organization to benefit from the most highly qualified and certified technical staff anywhere – without having to worry about recruiting, training, fulfillment and other costly and time consuming tasks.'
        componentImage={Img1}
        />
        <IconsComponent 
        classComponent='HelpDeskIcons'
        heading='In addition to this, ITRegulators provides far more than just remote support staff;we actually deploy an entire support infrastructure, including:'
        iconClass='fa-solid fa-people-group'
        iconText='Knowledgeable, certified,
        US-based in-house staff'
        iconClass1='fa-solid fa-headset'
        iconText1='Online live support featuring our 
        Manage & Regulate technology'
        iconClass2= 'fa-solid fa-tower-broadcast'
        iconText2='24×7 coverage capability'
        iconClass3='fa-solid fa-server'
         iconText3='Web-based incident reporting 
         and status tools for end users'
        iconClass4='fa-solid fa-computer'
         iconText4='Complete trouble ticket tracking 
         and reporting solution'
        iconClass5='fa-solid fa-microchip'
         iconText5='Multi-technology support'
        iconClass6='fa-solid fa-code-pull-request'
         iconText6='Tiered service levels and custom 
         response requirements available'
        iconClass7='fa-solid fa-house-laptop'
         iconText7='Optional shared operational 
         control with your in-house help desk team'
        iconClass8= 'fa-solid fa-envelope-circle-check'
        iconText8='Automatic email updates to your staff with embedded satisfaction surveys' 
        iconClass9='fa-solid fa-user-shield'
         iconText9='Team leader and project manager'
        iconClass10= 'fa-solid fa-building-user'
        iconText10='On-site escalation support' 
        
        
        />
        <BannerComponent componentClass='HelpDeskBanner'
        BannerPara='Put simply, we have the people, and experience to provide a comprehensive IT help desk outsourcing solution thereby empowering you to concentrate on running your business, not your network.'/>
        
        <BannerComponent 
        componentClass='HelpDeskBanner2'
        BannerHeading='Talk to us about how IT Deployment services from ITRegulators can benefit your business'
        BannerBtn='Contact us Now'
        />


        </div>
  )
}

export default HelpDesk