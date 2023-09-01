import React from 'react'
import Img1 from './CSS/Assets/Consultancy1.png'
import Img2 from './CSS/Assets/Consultancy2.png'
import Img3 from './CSS/Assets/Consultancy3.png'
import Img4 from './CSS/Assets/Consultancy4.png'
import Img5 from './CSS/Assets/Consultancy5.png'

function ConsultancyInfo() {
  return (
    <div className='ConsultancyInfo'>
    <div className='ConsultancyContainer Container1'>
    <div className='NetworkServiceText'>
        <h2>Four areas of service</h2>
        <hr/>
        <p>Combining our trademark comprehensive IT services, broad expertise, and unyielding customer service, ITRegulators’ consulting services provide you with the agility you need to balance varying workload demands with the staff, strategic direction, and skills you need to move your technology ahead—effortlessly and quickly.</p>
    </div>
    <div className='NetworkServiceImg'>
        <img src={Img1} alt='NetworkService'/>
    </div>
    </div>
    <div className='ConsultancyContainer '>
    <div className='NetworkServiceImg'>
        <img src={Img2} alt='NetworkService'/>
    </div>
    <div className='NetworkServiceText'>
        <h2>Staffing support</h2>
        <hr/>
        <p>Special projects, cyclical or seasonal business or extended vacations place a strain on your existing IT resources and your organization’s ability to meet demands. Augment your IT staff with resources from ITRegulators. Choose as many as you need either by expertise or by product competency, from C-level strategic support to certified specialists.</p>
    </div>
   
    </div>
    <div className='ConsultancyContainer Container2'>
    <div className='NetworkServiceText'>
        <h2>Expertise/specialization</h2>
        <hr/>
        <p>Even the largest organizations don’t staff for every project they implement. There are times when you’ll need a specific level of expertise to look at plans, offer advice, assist in the roll out of a project, or become part of a project.
We can provide you with anything from C-level strategic technology advice and support to technical resources that are certified or specialize in a technology expertise, These include compliance, security, or deploying Active Directory. We also can help you integrate virtualization technologies into your IT infrastructure, meet your messaging, collaboration, and mobility requirements with Microsoft® Exchange Server; help you leverage your information assets; install, upgrade, or expand critical applications across your company, design, manage, and optimize the effectiveness and efficiency of your Storage Area Network (SAN), and more.</p>
    </div>
    <div className='NetworkServiceImg'>
        <img src={Img3} alt='NetworkService'/>
    </div>
    </div>
    <div className='ConsultancyContainer'>
    <div className='NetworkServiceImg'>
        <img src={Img4} alt='NetworkService'/>
    </div>
    <div className='NetworkServiceText'>
        <h2>Projects</h2>
        <hr/>
        <p>Today’s economy demands that companies run as leanly as possible. IT departments, however, never seem to see a slowdown in the volume of projects they are tasked with. These can include hardware and software deployments, upgrades, and migrations as well as projects that enhance performance, improve productivity, facilitate access to information, or that align or realign technology with changing business processes.
ITRegulators can help you manage your IT project portfolio and reduce the risk of project failure by supplementing your IT organization with resources and expertise that can map out, design, manage, or roll out a project either alongside your staff or on our own. Either way, we’ll integrate seamlessly into your business model, help you move the project forward, and step back once our job is done.</p>
    </div>
   
    </div>
    <div className='ConsultancyContainer Container3'>
    <div className='NetworkServiceText'>
        <h2>Strategic IT consulting services</h2>
        <hr/>
        <p>Because your business relies so heavily on technology, it is critical that your technology is aligned with, and supports your, business goals and meets outside requirements, such as compliancy and security, head on. ITRegulators provides C-level consulting with skilled professionals that not only understand technology but who make a point of understanding your business. From whiteboard to the board room, ITRegulators provides the high-level, strategic IT thinking and direction that ensures that your technology powers your business effectively – today and tomorrow.</p>
    </div>
    <div className='NetworkServiceImg'>
        <img src={Img5} alt='NetworkService'/>
    </div>
    </div>
    <div className='ConsultancySection'>
        <div className='ConsultancySectionText'>
        <p>Learn more about how IT Consultancy services can benefit your business.</p>
        <button className='btn'>Contact Us</button>
        </div>
     
    </div>
    
        </div>
  )
}

export default ConsultancyInfo