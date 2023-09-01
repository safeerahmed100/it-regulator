import React from 'react'
import EmergencyInfoImg from './CSS/Assets/EmergencyImg.png'
import EmergencyInfoImg1 from './CSS/Assets/EmergencyImg1.png'



function OfficeInfo() {
  return (
    <div className='EmergencyInfo'>
        <div className='EmergencyInfoContainer EmergencyInfoContainerFirst'>
        <div className='EmergencyInfoText'>
            <h2>In today’s fast-paced business landscape,</h2>
            <hr></hr>
            <p>the leaner and more effective your work processes, the higher the chance your business will succeed. And a lean organization is made possible not only by having a pool of skilled talents, you’ll also have to empower them with the right tools.</p><br/>  
            <p>Office 365 is a suite of cloud-based tools from Microsoft that are specifically designed to streamline work processes, help employees collaborate better, and boost productivity. With ITRegulators’ Office 365 offering, you’ll enjoy lower acquisition costs and reap the full benefits of the software.</p>
        </div>
        <div className='EmergencyInfoImg'>
            <img src={EmergencyInfoImg} alt='some'/> 
                   </div>
        </div>



        <div className='EmergencyInfoContainer secondCont'>
        <div className='EmergencyInfoText'>
            <h2>How our Office 365 offering benefits your business:</h2>
            <hr></hr>
            <ul>
            <li><span style={{fontWeight:800}}>Enhanced flexibility and collaboration — </span>your teams will benefit from file sharing features and be able to deliver quality work anytime, anywhere, from any internet-connected device</li>
            <br/>
  <li><span style={{fontWeight:800}}>Reduced acquisition and maintenance costs —</span> leverage the benefits of cutting-edge tools at SMB-friendly prices and enjoy the latest features that come with regular updates</li>
            <br/>
            <li><span style={{fontWeight:800}}>Improved data security — </span>the Office 365 suite lets you customize user access settings to ensure that the right data is in the right hands</li>
            <br/>
            <li><span style={{fontWeight:800}}>Increased productivity —</span> the fast and efficient provisioning of apps means a smoother work experience and increased productivity</li>

            </ul>
            <br/>
        </div>
        <div className='EmergencyInfoImg '>
            <img src={EmergencyInfoImg1} alt='some'/> 
                   </div>
        </div>
    </div>
  )
}

export default OfficeInfo