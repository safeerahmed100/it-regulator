import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/OfficeImg.png'
import Img2 from '../Sections/CSS/Assets/OfficeImg1.png'

function OfficePage() {
  return (
    <div>
      <HeaderComponent componentClass='OfficeHeader' highlightedText='Office' Text=' 365'/>
      <InfoComponent 
      heading='In today’s fast-paced business landscape,'
      paraText='the leaner and more effective your work processes, the higher the chance your business will succeed. And a lean organization is made possible not only by having a pool of skilled talents, you’ll also have to empower them with the right tools.'
      paraTwo='Office 365 is a suite of cloud-based tools from Microsoft that are specifically designed to streamline work processes, help employees collaborate better, and boost productivity. With ITRegulators’ Office 365 offering, you’ll enjoy lower acquisition costs and reap the full benefits of the software.' 
      componentImage={Img1}
      />
       <InfoComponent 
       componentClass='Reverse'
      heading='How our Office 365 offering benefits your business:'
      listHeading='Enhanced flexibility and collaboration — '
      listText='your teams will benefit from file sharing features and be able to deliver quality work anytime, anywhere, from any internet-connected device'
      listHeading1='Reduced acquisition and maintenance costs — '
      listText1='leverage the benefits of cutting-edge tools at SMB-friendly prices and enjoy the latest features that come with regular updates'
      listHeading2='Improved data security — '
      listText2='the Office 365 suite lets you customize user access settings to ensure that the right data is in the right hands'
      listHeading3='Increased productivity — '
      listText3='the fast and efficient provisioning of apps means a smoother work experience and increased productivity'
      componentImage={Img2}
      />
    </div>
  )
}

export default OfficePage