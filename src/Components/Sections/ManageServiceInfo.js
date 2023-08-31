import React from 'react'
import ManageServiceImg from './CSS/Assets/ManageService.png'
import ManageServiceImg2 from './CSS/Assets/ManageService1.png'
 
function ManageServiceInfo() {
  return (
    <div className='ManageServiceInfo'>

    <div className='NetworkContainer'>
    <div className='NetworkServiceText'>
        <h2>ITRegulators offers customized IT support service</h2>
        <p>agreements to suit the unique needs and demands of varied working environments. Bundled service agreements include a comprehensive offering of services, and can be created to effectively and efficiently manage the unique day-to-day maintenance demands of your systems</p>
    </div>
    <div className='NetworkServiceImg'>
        <img src={ManageServiceImg} alt='NetworkService'/>
    </div>
    </div>


    <div className='ManageContainer NetworkCenterContainer'>
    <h2>Managed IT Services from ITRegulators include:</h2>
    <div className='ManageIcon'>
    <i className="bi bi-headset"></i>
    <i className="bi bi-shield-lock-fill"></i>
    <i className="bi bi-lightbulb"></i>
    <i className="bi bi-database-check"></i>
    <i className="bi bi-arrow-down-circle"></i>
    <i className="bi bi-card-heading"></i>
    <i className="bi bi-gear-fill"></i>
    <i className="bi bi-kanban"></i>
    <i className="bi bi-router"></i>
    
    </div>

    </div>
    <div className='ManageContainerCover'>
      <p>Defining the appropriate level of support can depend on a variety of factors, including the size of your organization, hardware and applications used, corporate structure and culture, and management policies. We’ll work closely with you to understand your unique business needs and identify the most suitable support arrangement for your organization. Managed IT Services let you forget about the worries associated with technology, help you lower costs and allow you to concentrate on growing your business and keeping your customers happy.</p>
    </div>


    <div className='NetworkContainer'>
    <div className='NetworkServiceText'>
        <h3>Find out more about how Managed IT Services from ITRegulators can create a solid foundation on which to build your organization.
Learn more</h3>
<button className='btn'>Learn More</button>
    </div>

    <div className='NetworkServiceImg'>
        <img src={ManageServiceImg2} alt='NetworkService'/>
    </div>
    </div>
    </div>
  )
}

export default ManageServiceInfo