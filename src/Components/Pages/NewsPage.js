import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img from '../Sections/CSS/Assets/NewsImg.png'
import Img1 from '../Sections/CSS/Assets/NewsImg1.png'

function NewsPage() {
  return (
    <div>
<HeaderComponent componentClass='NewsHeader' highlightedText='News'/>
<InfoComponent heading='MAKE LIFE EASIER AND SYNC YOUR ANDROID TO CHROME' paraText='Most people nowadays swap between their computer and their smartphone for their productivity needs — from work to passion projects to simply running their daily lives. It’s simpler than ever to do so, thanks to Google Chrome’s sync-up features for Android phones'
boldpara='Read More'
componentImage={Img}
/>
<InfoComponent componentClass='Reverse' heading='WINDOWS XP SUPPORT HAS ENDED'
paraText='AS OF APRIL 8, 2014, SUPPORT AND UPDATES FOR WINDOWS XP ARE NO LONGER AVAILABLE. DON’T LET YOUR PC GO UNPROTECTED. WHAT IS WINDOWS XP END OF SUPPORT? Microsoft provided support for Windows XP for the past 12 years. But the time'
boldpara='Read More' 
componentImage={Img1}/>


    </div>
  )
}

export default NewsPage