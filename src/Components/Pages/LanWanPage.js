import React from 'react'
import Img1 from '../Sections/CSS/Assets/LanImg.png'
import Img2 from '../Sections/CSS/Assets/LanImg1.png'
import Img3 from '../Sections/CSS/Assets/LanImg2.png'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'

function LanWanPage() {
  return (
    <div>
<HeaderComponent componentClass='LanHeader'
 highlightedText='LAN' Text=' / WAN'
 />
 <InfoComponent heading='Whether you are looking to upgrade,'
 paraText='your existing infrastructure or you are planning a new network from the ground up, ITRegulators can provide you with the local, wireless, and wide area network solutions your business needs. Add to that our customizable, proactive advanced network monitoring service, and you have a network you can rely on – designed to handle your current business needs and built to scale with your business as it grows.'
 componentImage={Img1}
 />
 <InfoComponent componentClass='Reverse'
 heading='A holistic approach'
 paraText='Our networking solutions are designed to take a holistic view of your network, and are customized for our clients’ specific needs. ITRegulators‘ technical specialists look for areas to optimize and protect your network through secure connections and infrastructure fitted with appropriate network devices. Just a few of our focuses include:'
 listHeadingBold='Secure wireless access providing the portability needed in today’s business without sacrificing security'
 listHeadingBold1='Current firewalls configured to let in what you want and keep out the rest'
 listHeadingBold2='Network designs that provide fast access to the data you need'
 componentImage={Img2}
 />

 <InfoComponent heading='Switches and routers are the backbone of any network,'
 paraText='so almost as important as properly sizing your networking hardware is employing the necessary power management and failover capabilities. ITRegulators implements the latest in load balancing technologies, and can assist you in finding and resolving the bottlenecks in your existing network infrastructure.'
 blueText='Learn more about how LAN and WAN can benefit your business.'
 paraThree='ITRegulators specializes in integrating all types of network solutions seamlessly. As a professional IT consulting company, we prioritize efficiency, security, and overall resource management with our end-to-end service to assess your current environment and design your network for today and the future.'
 componentImage={Img3}
 bluePara='End-to-end service'

 />


    </div>
  )
}

export default LanWanPage