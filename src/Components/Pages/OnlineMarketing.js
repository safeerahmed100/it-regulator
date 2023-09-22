import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/marketingImg.jpeg'
import Img2 from '../Sections/CSS/Assets/marketingImg2.jpeg'

function OnlineMarketing() {
  return (
    <div>
    <HeaderComponent highlightedText='Online ' Text='Marketing' componentClass='OnlineMarketingHeader'/>
    <InfoComponent heading='Make sure your business is impressing your potential customers
'
paraText='You have a great business model and loyal customers but if your website is letting you down by not representing you in the best light possible, or it can’t be found in search engine results, it’s time to get help.
'
paraTwo='ITRegulators have the online marketing expertise you need to ensure your goods, services or brand are creating more business for your company, not getting lost in a sea of mediocre websites.
'
componentImage={Img1}
/>
    <InfoComponent componentClass='Reverse'
    heading='Online Marketing Services from ITRegulators include:
    '
    listHeadingBold='Graphic Design'
    listHeadingBold1='Social Media Marketing'
    listHeadingBold2='Web Design'
    listHeadingBold3='Video Production'
    componentImage={Img2}
    />

    </div>
  )
}

export default OnlineMarketing