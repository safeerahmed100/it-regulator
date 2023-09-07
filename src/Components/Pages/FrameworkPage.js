import React from 'react'
import Img1 from '../Sections/CSS/Assets/FrameworkImg.png'
import Img2 from '../Sections/CSS/Assets/FrameworkImg1.png'
import Img3 from '../Sections/CSS/Assets/FrameworkImg2.png'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import BannerComponent from '../Sections/BannerComponent'
function FrameworkPage() {
  return (
    <div>
<HeaderComponent componentClass='FrameworkHeader'
highlightedText='.NET' Text='Framework'/>
<InfoComponent heading='Whether you need to build a custom desktop application,'
paraText='develop and deploy a cloud-based solution, or upgrade an existing legacy system, the Microsoft .NET framework is the de facto development standard. Offering scalability and interoperability, the .NET framework provides the standardization and broad-based support that only Microsoft and its vast network of partners can provide.'
componentImage={Img1}
/>
<BannerComponent componentClass='FrameworkBanner'
BannerPara='ITRegulators’ certified IT professionals has been working with the .NET platform since its initial release. Our talented IT support and development team has the experience and expertise to develop, integrate, and maintain high-performing .NET solutions designed to meet your unique business needs.'
/>
<InfoComponent componentClass='Reverse'
heading='A framework for success'
paraText='ITRegulators and our team of experienced, certified technical experts provide a full range of competencies and software services based on this framework, including:'
listHeadingBold='Application development'
listHeadingBold1='Cloud architecture and migration'
listHeadingBold2='Systems integration'
listHeadingBold3='Mobile development'
componentImage={Img2}
/>
<InfoComponent heading='The gold standard'
paraText='As an experienced IT consulting firm ITRegulators fully embraces the Microsoft Solutions Framework (MSF), which guides you through each step of the development cycle of envisioning, planning, developing and stabilizing. This comprehensive, intuitive, and flexible development methodology has been used successfully in the software industry to improve project control, improve product quality, increase development speed, and minimize risk.'
componentImage={Img3}
/></div>
  )
}

export default FrameworkPage