import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import EmergencyInfoImg from '../Sections/CSS/Assets/LowVoltageImg.png'
import EmergencyInfoImg1 from '../Sections/CSS/Assets/LowVoltageImg1.png'
import InfoComponent from '../Sections/InfoComponent'

function LowVoltageCabling() {
  return (
    <div>
      <HeaderComponent componentClass='LowVoltageHeader' highlightedText='Low Voltage' Text=' Cabling'/>
      <InfoComponent heading='No matter the size or industry of your business,'
      paraText='your wiring network is the foundation of your success. How your cabling is structured will determine whether you’ll enjoy energy-efficient and stable networks or hurt your bottom line with bandwidth bottlenecks and repetitive repairs. Ensure your cabling is done right with ITRegulators’ Low Voltage Cabling service.'
      paraTwo='Our skilled technicians will thoroughly study your needs, walk you through different possibilities of how your low voltage cabling can be structured, and wire it in the most suitable way, ensuring all your systems are fully integrated and performing optimally. With an infrastructure designed to serve you now and in the future, you’ll be on the right path to success.'
      componentImage={EmergencyInfoImg}
     />
     <InfoComponent componentClass='Reverse'
     heading='With ITRegulators’ low voltage cabling service you will :'
     blueText='ITRegulators’ emergency support ensures fast and efficient solutions to whatever it problem arises'
      listHeading='Save on repair and electricity bills — '
      listText='because a properly structured network means no electrical surge or leaks'
      listHeading1='Increase productivity — '
      listText1='stable connection and less downtime will help your teams stay focused'
      listHeading2='Get the most out of your devices — '
      listText2='unleash the full potential of your properly powered appliances'
      listHeading3='Run your business with peace of mind — '
      listText3='say goodbye to worries and focus on growth again'
     componentImage={EmergencyInfoImg1}
     />
    </div>
  )
}

export default LowVoltageCabling