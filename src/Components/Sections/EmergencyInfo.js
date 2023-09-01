import React from 'react'
import EmergencyInfoImg from './CSS/Assets/EmergencyImg.png'
import EmergencyInfoImg1 from './CSS/Assets/EmergencyImg1.png'



function EmergencyInfo() {
  return (
    <div className='EmergencyInfo'>
        <div className='EmergencyInfoContainer EmergencyInfoContainerFirst'>
        <div className='EmergencyInfoText'>
            <h2>Emergency support</h2>
            <hr></hr>
            <p>We understand that every minute of downtime could mean thousands of dollars in lost revenue for your business. We also understand that when you need IT help, you need it now. That’s why we’re committed to providing instant phone and on-site emergency support to businesses across the US.</p>
            <p>Our experience in resolving IT issues for businesses of all sizes and industries has enabled us to develop thorough yet swift processes to find the root cause of your IT problems, fix it promptly and effectively, and recommend best practices to avoid such disruptions in the future.
</p>
        </div>
        <div className='EmergencyInfoImg'>
            <img src={EmergencyInfoImg} alt='some'/> 
                   </div>
        </div>



        <div className='EmergencyInfoContainer secondCont'>
        <div className='EmergencyInfoText'>
            <h2>With our IT Emergency support, you get:</h2>
            <hr></hr>
            <ul>
            <li><span style={{fontWeight:800}}>Immediate assistance — </span>while our technicians are on their way to solve your problems on-site, we’ll remotely set up a secure connection to your business and begin troubleshooting issues right away</li>
            <br/>
            <li><span style={{fontWeight:800}}>Expert help — </span>whether your operations suffer from the malfunction of hardware, industry-specific software, or other IT problems, our IT specialists will quickly help you get back up and running and avoid common issues in the future</li>
            <br/>
            <li><span style={{fontWeight:800}}>Peace of mind —</span> run your business with ease knowing that IT Support is only a call away</li>
            </ul>
            <br/>
            <p style={{color:'#509BF4'}}>ITRegulators’ emergency support ensures fast and efficient solutions to whatever it problem arises</p>
        </div>
        <div className='EmergencyInfoImg '>
            <img src={EmergencyInfoImg1} alt='some'/> 
                   </div>
        </div>
    </div>
  )
}

export default EmergencyInfo