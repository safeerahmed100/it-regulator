import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/CloudStorage.jpg'
import Img2 from '../Sections/CSS/Assets/cloudStorage1.jpg'

 
function CloudStorage() {
  return (
    <div>
<HeaderComponent componentClass='CloudStorageHeader' highlightedText='Cloud ' Text='Solutions'/>
<InfoComponent heading='Imagine being able to do business – at any time and from anywhere in the world!
'
paraText='You’ve probably heard of ‘the Cloud’ but if you’re not exactly sure what it means for you and your business, don’t worry, because we do! When you migrate your technology to the Cloud, you’re essentially transferring your technology and the way you use it on the Internet.'
componentImage={Img1}
/>
<InfoComponent componentClass='Reverse' 
subHeading='ITRegulators will host your applications or servers in a secure data center, allowing you to access your data and desktop functions – anytime and from anywhere in the world over the Internet all via a secure web portal.
'
paraText='Cloud computing also enables you to access your desktop from anywhere you have Internet access and on any Internet-enabled device. This allows you and your employees to perform work tasks just as you would from the office. And because you are adopting a virtual server approach instead of using physical servers you’ll be reducing your operating costs, running a more eco-friendly office and freeing up space too.

'
paraThree='ITRegulators has proven expertise in designing Cloud computing solutions. Talk to one of our specialists today and see if Cloud computing is the right solution for your business.

'
componentImage={Img2}/>
    </div>
  )
}

export default CloudStorage