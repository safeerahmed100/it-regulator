import React from 'react'
import HelpAgent from './CSS/Assets/HelpDeskGuy.png'

function HelpDeskInfo() {
  return (
    <div className='HelpDeskInfo'>
        <div className='EmergencyInfoContainer '>
        <div className='EmergencyInfoImg'>
            <img src={HelpAgent} alt='Agent Laughing'/> 
                   </div>
        <div className='EmergencyInfoText'>
            <h2>An outsourced IT Help Desk<br/> solution for any organization</h2>
            <hr/>
            <p>ITRegulators offer comprehensive outsourced IT help desk services to customers who require a full service technical resource center, full or part-time help desk, application support center, or customer service desk. No matter what type of help desk functions you need to outsource, we can provide you with a complete and custom turnkey solution.</p>
            <br/>
            <p>Our outsourced IT help desk solutions allow your organization to benefit from the most highly qualified and certified technical staff anywhere – without having to worry about recruiting, training, fulfillment and other costly and time consuming tasks.</p>
        </div>
        </div>
        <div className='HelpIcons'>
            <h2>In addition to this, ITRegulators provides far more than just remote support staff;we actually deploy an entire support infrastructure, including:</h2>
       <div className='HelpIconSecction'>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>Knowledgeable, certified,
US-based in-house staff</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>Web-based incident reporting 
and status tools for end users</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>Tiered service levels and custom 
response requirements available</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>Team leader and project manager</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>Online live support featuring our 
Manage & Regulate technology</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>Complete trouble ticket tracking 
and reporting solution</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>Optional shared operational 
control with your in-house help desk team</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>On-site escalation support</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>24×7 coverage capability</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-1-circle-fill"></i>
            <h3>Multi-technology support</h3>
        </div>
        <div className='HelpDeskIconContainer'>
        <i class="bi bi-2-square-fill"></i>
            <h3>Automatic email updates to your staff with embedded satisfaction surveys</h3>
        </div>
        </div>
        </div>
        <div className='ConsultancySection DeploymentSection HelpDeskSection'>
        <div className='ConsultancySectionText'>
            <p>Put simply, we have the people, and experience to provide a comprehensive IT help desk outsourcing solution thereby empowering you to concentrate on running your business, not your network.</p>
        </div>
        </div>
        <div className='ConsultancySection DeploymentSection HelpDeskSection2 '>
        <div className='ConsultancySectionText'>
            <p>Talk to us about how IT Deployment services from ITRegulators can benefit your business</p>
        <button className='btn'>Contact Us Now</button>
        </div>
     
    </div>
     
    </div>
    
  )
}

export default HelpDeskInfo