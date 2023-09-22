import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/computerImg.jpg'
import Img2 from '../Sections/CSS/Assets/computerImg1.jpg'



function ComputerRepair() {
  return (
    <div>
    <HeaderComponent componentClass='ComputerRepairHeader' highlightedText='Computer ' Text='Repair' />
    <InfoComponent heading='Get things back up and running fast'
    paraText='Estimates are given before any work is started. We will do everything possible to service your computer fast, at an affordable price.
    '
    paraTwo='We understand that when your computer is down, you want it fixed now! We are here to help you get over the hurdles of unpleasant and unwelcome computer surprises. When you enlist the professional services of ITRegulators, we get the job done OR you don’t owe us a dime.
    '
    componentImage={Img1}
    />

    <InfoComponent componentClass='Reverse' heading='Computer Repair / PC Repair Services:
'
listHeadingBold='Pre-service recommendations'
listHeadingBold1='Restore internet connection'
listHeadingBold2='Upgrade operating system'
listHeadingBold3='Solve email problems'
listHeadingBold4='Resolve printing problems'
listHeadingBold5='Optimize start-up and shutdown'
listHeadingBold6='Network setup and much more'
listHeadingBold7='Pre-service recommendations'
listHeadingBold8='Restore internet connection'
listHeadingBold9='Upgrade operating system'
listHeadingBold10='Solve email problems'
listHeadingBold11='Resolve printing problems'
listHeadingBold12='Optimize start-up and shutdown'
componentImage={Img2}
/>
    </div>
  )
}

export default ComputerRepair