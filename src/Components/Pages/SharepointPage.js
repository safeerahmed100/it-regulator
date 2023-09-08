import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import BannerComponent from '../Sections/BannerComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/SharepointImg.png'
import Img2 from '../Sections/CSS/Assets/SharepointImg1.png'
import Img3 from '../Sections/CSS/Assets/SharepointImg2.png'
function SharepointPage() {
  return (
    <div>
        <HeaderComponent componentClass='SharepointHeader' highlightedText='Sharepoint'/>
        <InfoComponent 
         heading='SharePoint is the leading collaboration technology on the market today,'
        paraText='and many businesses can benefit from its powerful capabilities that:'
        listHeadingBold='Make it easier for your employees to collaborate – between departments or across borders'
        listHeadingBold1='Make relevant information and knowledge more accessible for better decision-making'
        listHeadingBold2='Extend collaboration capabilities outside the firewall with partners or customers'
        componentImage={Img1}
        />
        <BannerComponent 
        componentClass='SharepointBanner'
        BannerPara='ITRegulators is proud to offer end-to-end design, implementation, project management, and development services that allow you to take full advantage of SharePoint to enhance your collaboration, communications, and productivity on both sides of the firewall.'
        />

        <InfoComponent 
        componentClass='Reverse'
        heading='Enhance collaboration, communications and productivity'
        paraText='ITRegulators provides the planning, integration, and guidance that are necessary for effective SharePoint deployments that fit your business – and deliver tangible results. We can help you configure your SharePoint environment with the level of functionality that’s right for you, including:'
        listHeading='Sites – '
        listText='support all of your business websites on a single infrastructure'
        listHeading1='Composites – '
        listText1='tools and components enable you to respond rapidly to changing business needs'
        listHeading2='Communities – '
        listText2='collaboration tools and a management platform help people share ideas and work together'
        listHeading3='Content – '
        listText3='features facilitate your content management'
        listHeading4='Insights – '
        listText4='access to information across your organization helps people make better decisions'
       componentImage={Img2}
       />

       <InfoComponent 
       heading='Best practices'
       componentImage={Img3}
       paraText='If you’re not sure where to start with SharePoint, or if you would like to broaden your company’s existing use of the platform, ITRegulators and our team of certified IT professionals and design experts can help with this managed service.'
       />



    </div>
  )
}

export default SharepointPage