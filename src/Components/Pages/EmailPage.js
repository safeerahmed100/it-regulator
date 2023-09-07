import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import BannerComponent from '../Sections/BannerComponent'
import Img1 from '../Sections/CSS/Assets/EmailSpamImg.png'
import Img2 from '../Sections/CSS/Assets/EmailImg2.png'
import Img3 from '../Sections/CSS/Assets/EmailImg3.png'
import Img4 from '../Sections/CSS/Assets/EmailImg4.png'
import Img5 from '../Sections/CSS/Assets/EmailImg5.png'
import Img6 from '../Sections/CSS/Assets/EmailImg6.png'

function EmailPage() {
  return (
    <div>
        <HeaderComponent componentClass='EmailHeader' highlightedText='Email & '  Text='Spam Protection' />
        <InfoComponent heading='Hosted Microsoft Enterprise email for your small or medium-sized business'
        paraText='Email has undeniably transformed business communications – and nowadays we all expect a fast, reliable and secure service. ITRegulators’ hosted email service is an off-site messaging infrastructure that is both high performing and secure. In fact, it is the very same technology that serves some of the nation’s Fortune 100 companies and federal agencies. Let us handle your email infrastructure so that you can focus on your core business activities.'
        componentImage={Img1}
        />
        <InfoComponent
          componentClass='Reverse'
          heading='The benefits of Hosted Exchange email from ITRegulators:'
          componentImage={Img6}
          listHeadingBold='Secure email solutions'
          listHeadingBold1='24/7/365 monitoring'
          listHeadingBold2='Flexible storage'
          listHeadingBold3='Different tiers of service'
          listHeadingBold4='Guaranteed service levels'
          listHeadingBold5='Multi-layer anti-virus and anti-spam'
          listHeadingBold6='Local, personalized service and support'
         />
        <InfoComponent heading='Mobile messaging'
        paraText='Whether your team needs email services on their BlackBerry®, Good™ Mobile Messaging, Windows® Mobile Devices or Apple’s iPhone, you can mix and match devices without the need to train and certify your team on each solution.'
        componentImage={Img2}
/>
  <InfoComponent componentClass='Reverse'
  heading='Email archiving'
  paraText='Our archiving service delivers state-of-the-art, easy-to-use, and professionally managed, archiving, continuity and security solutions to deliver multiple layers of solutions to support the complex challenges that surround email security.'
  componentImage={Img3}
 />

<InfoComponent heading='Encrypted email and digital signatures'
  paraText='User-friendly email encryption allows subscribers to send encrypted messages that are digitally signed and secured so that only the intended recipient can unlock them..'
    componentImage={Img4}
/>
<InfoComponent heading='Microsoft SharePoint Services®'
componentClass="Reverse"
  paraText='Share ideas, report progress, and track changes easily from anywhere using our SharePoint Hosting services for a complete solution to meet your email and collaboration needs.'
  componentImage={Img5}
/>
<BannerComponent componentClass='EmailBanner'
BannerHeading='Get an advanced and fully secure email system that your company can rely on.'
BannerBtn='Contact Us Now'
/>

    </div>

  )
}

export default EmailPage