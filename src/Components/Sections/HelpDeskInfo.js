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
    </div>
  )
}

export default HelpDeskInfo