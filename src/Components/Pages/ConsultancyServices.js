import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import Img1 from '../Sections/CSS/Assets/Consultancy1.png'
import Img2 from '../Sections/CSS/Assets/Consultancy2.png'
import Img3 from '../Sections/CSS/Assets/Consultancy3.png'
import Img4 from '../Sections/CSS/Assets/Consultancy4.png'
import Img5 from '../Sections/CSS/Assets/Consultancy5.png'
import InfoComponent from '../Sections/InfoComponent'
import BannerComponent from '../Sections/BannerComponent'
function ConsultancyServices() {
  return (
    <div>
<HeaderComponent componentClass='ConsultancyHeader' highlightedText='IT' Text=' Consultancy'/>
<InfoComponent
  heading='Four areas of service'
paraText='Combining our trademark comprehensive IT services, broad expertise, and unyielding customer service, ITRegulators’ consulting services provide you with the agility you need to balance varying workload demands with the staff, strategic direction, and skills you need to move your technology ahead—effortlessly and quickly.'
componentImage={Img1}  />
<InfoComponent
componentClass='Reverse'
  heading='Staffing support'
  paraText='Special projects, cyclical or seasonal business or extended vacations place a strain on your existing IT resources and your organization’s ability to meet demands. Augment your IT staff with resources from ITRegulators. Choose as many as you need either by expertise or by product competency, from C-level strategic support to certified specialists.'
componentImage={Img2}  />

<InfoComponent
  heading='Expertise/specialization'
  paraText='Even the largest organizations don’t staff for every project they implement. There are times when you’ll need a specific level of expertise to look at plans, offer advice, assist in the roll out of a project, or become part of a project.
  We can provide you with anything from C-level strategic technology advice and support to technical resources that are certified or specialize in a technology expertise, These include compliance, security, or deploying Active Directory. We also can help you integrate virtualization technologies into your IT infrastructure, meet your messaging, collaboration, and mobility requirements with Microsoft® Exchange Server; help you leverage your information assets; install, upgrade, or expand critical applications across your company, design, manage, and optimize the effectiveness and efficiency of your Storage Area Network (SAN), and more.'
componentImage={Img3}  />

<InfoComponent
  heading='Projects'
  componentClass='Reverse'
  paraText='Today’s economy demands that companies run as leanly as possible. IT departments, however, never seem to see a slowdown in the volume of projects they are tasked with. These can include hardware and software deployments, upgrades, and migrations as well as projects that enhance performance, improve productivity, facilitate access to information, or that align or realign technology with changing business processes.
  ITRegulators can help you manage your IT project portfolio and reduce the risk of project failure by supplementing your IT organization with resources and expertise that can map out, design, manage, or roll out a project either alongside your staff or on our own. Either way, we’ll integrate seamlessly into your business model, help you move the project forward, and step back once our job is done.'
componentImage={Img4}  />

<InfoComponent
  heading='Strategic IT consulting services'
  paraText='Because your business relies so heavily on technology, it is critical that your technology is aligned with, and supports your, business goals and meets outside requirements, such as compliancy and security, head on. ITRegulators provides C-level consulting with skilled professionals that not only understand technology but who make a point of understanding your business. From whiteboard to the board room, ITRegulators provides the high-level, strategic IT thinking and direction that ensures that your technology powers your business effectively – today and tomorrow.'
componentImage={Img5}  />
    <BannerComponent
    componentClass='ConsultingBanner'
      BannerPara='Learn more about how IT Consultancy services can benefit your business.'
      BannerBtn='Contact Us'
    />
    </div>
  )
}

export default ConsultancyServices