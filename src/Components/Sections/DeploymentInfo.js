import React from 'react'
import Img1 from './CSS/Assets/Deployment1 .png'
import Img2 from './CSS/Assets/Deployment2.png'
import Img3 from './CSS/Assets/Deployment3.png'
import Img4 from './CSS/Assets/Deployment4.png'
import Img5 from './CSS/Assets/Deployment5.png'

function DeploymentInfo() {
  return (
    <div className='ConsultancyInfo'>
    <div className='ConsultancyContainer Container1'>
    <div className='NetworkServiceText'>
        <h2>Four areas of service</h2>
        <hr/>
        <p>An integral part of our Project Management philosophy is the creation and management of detailed and workable project plans.</p>
        <br/>
        <p style={{fontWeight:600}}>Through consultation workshops with all parties involved every element of the project is analyzed and documented.</p>
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
        <h2>Production and customizing</h2>
        <hr/>
        <p>End user requirements vary from client to client. In our production facility we can customize your system to your specifications.    </p>
        <p style={{fontWeight:600}}>Hardware upgrades, software upgrades, asset tagging or deployment staging.</p>
    </div>
   
    </div>
    <div className='ConsultancyContainer Container2'>
    <div className='NetworkServiceText'>
        <h2>Hardware and software installation</h2>
        <hr/>
        <p>All our deployment teams are certified and experienced engineers; we will tailor the installation process to meet your requirements and user expectations.</p>
    <br/>
    <p style={{fontWeight:600}}>From hardware deployments and upgrades to software integration we can deliver on your needs and the needs of your business.</p>
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
        <h2>Logistics and delivery</h2>
        <hr/>
        <p>With every project, the delivery to site and the removal of obsolete equipment can pose additional strains on any IT department or facility management.</p>
       
        <p style={{fontWeight:600}}>Combining our staging area with your logistic experience we can ensure a seamless and painless deployment on a nationwide basis.</p>
    </div>
   
    </div>
    <div className='ConsultancyContainer Container3'>
    <div className='NetworkServiceText'>
        <h2>Offsite configuration</h2>
        <hr/>
        <p>Getting the product to the desk is only one phase of any project, final configuration and user specific requirements require the skills of experienced engineers.</p>
        <br/>
        <p style={{fontWeight:600}}>Our deployment teams follow detailed instructions and sign-off processes to ensure the user experience is delivered ensuring IT support confidence is retained and enhanced at the end</p>
    </div>
    <div className='NetworkServiceImg'>
        <img src={Img5} alt='NetworkService'/>
    </div>
    </div>
    <div className='ConsultancySection DeploymentSection'>
        <div className='ConsultancySectionText'>
        <p>Talk to us about how IT Deployment services from ITRegulators can benefit your business</p>
        <button className='btn'>Contact Us Now</button>
        </div>
     
    </div>
    
        </div>
  )
}

export default DeploymentInfo