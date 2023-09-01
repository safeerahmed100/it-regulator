import React from 'react'
import EmergencyInfoImg from './CSS/Assets/LowVoltageImg.png'
import EmergencyInfoImg1 from './CSS/Assets/LowVoltageImg1.png'



function LowVoltageInfo() {
  return (
    <div className='EmergencyInfo'>
        <div className='EmergencyInfoContainer '>
        <div className='EmergencyInfoText'>
            <h2>No matter the size or industry of your business,</h2>
            <hr></hr>
            <p>your wiring network is the foundation of your success. How your cabling is structured will determine whether you’ll enjoy energy-efficient and stable networks or hurt your bottom line with bandwidth bottlenecks and repetitive repairs. Ensure your cabling is done right with ITRegulators’ Low Voltage Cabling service.</p>
            <p>Our skilled technicians will thoroughly study your needs, walk you through different possibilities of how your low voltage cabling can be structured, and wire it in the most suitable way, ensuring all your systems are fully integrated and performing optimally. With an infrastructure designed to serve you now and in the future, you’ll be on the right path to success.</p>
        </div>
        <div className='EmergencyInfoImg'>
            <img src={EmergencyInfoImg} alt='some'/> 
                   </div>
        </div>



        <div className='EmergencyInfoContainer EmergencyInfoContainerFirst'>
        <div className='EmergencyInfoImg '>
            <img src={EmergencyInfoImg1} alt='some'/> 
                   </div>
        <div className='EmergencyInfoText'>
            <h2>With ITRegulators’ low voltage cabling service you will :</h2>
            <hr></hr>
            <ul>
            <li><span style={{fontWeight:800}}>Save on repair and electricity bills —</span> because a properly structured network means no electrical surge or leaks</li>
            <br/>
  <li><span style={{fontWeight:800}}>Increase productivity —</span> stable connection and less downtime will help your teams stay focused</li>
            <br/>
            <li><span style={{fontWeight:800}}>Get the most out of your devices —</span> unleash the full potential of your properly powered appliances</li>
            <br/>
            <li><span style={{fontWeight:800}}>Run your business with peace of mind —</span> say goodbye to worries and focus on growth again</li>
           <br/>
            <span style={{color:'#509BF4'}}>ITRegulators’ emergency support ensures fast and efficient solutions to whatever it problem arises</span>
            </ul>
            <br/>
        </div>
        
        </div>
    </div>
  )
}

export default LowVoltageInfo