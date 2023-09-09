import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/sqlImg.png'
import Img2 from '../Sections/CSS/Assets/sqlImg1.png'
import Img3 from '../Sections/CSS/Assets/sqlImg2.png'
import BannerComponent from '../Sections/BannerComponent'
import IconsComponent from '../Sections/IconsComponent'


function SqlPage() {
  return (
    <div>
<HeaderComponent componentClass='SqlHeader' highlightedText="SQL" Text='Server'/>
<InfoComponent heading='The staff at ITRegulators are highly qualified and have deep experience'
paraText='Microsoft SQL Server has become one of the most utilized relational database products on the market with more than 80% of businesses using it. SQL Server’s primary function is to provide the backend data storage for applications that we use everyday, such as CRM or ERP systems. As a result, the majority of an organization’s corporate data is stored on SQL Server, and it is critical that all authorized users are able to access that information as quickly as possible.'
componentImage={Img1}
/>
<BannerComponent componentClass='SqlBanner' BannerPara='Optimizing your SQL Server requires deep technical expertise across many aspects of your infrastructure. ITRegulators has that depth of expertise, and can assess and optimize your existing SQL Server configuration, or assist in the proper planning and sizing of your new SQL Server installation.'/>
<InfoComponent componentClass='Reverse' heading='Reading and writing your business-critical data'
paraText='Some applications, such as those used in a call center, require the database to be “read” thousands of times per second. Others, an ERP application for example, constantly “write” new data to the database. The difference comes down to the hardware you’ll use for your SQL Server. The ITRegulators IT professionals will assist you in determining:'
listHeadingBold='The type of application you will be using'
listHeadingBold1='What type of hardware you’ll need, and'
listHeadingBold2='How that hardware needs to be configured'
paraThree='Once the correct hardware is in place, SQL Server still needs to be installed and configured properly in order to run optimally. Setting up the proper best practice SQL Server maintenance plans is integral to ensuring that your SQL Server performs as well on day one as it does on day 100. Using Microsoft best practices ITRegulators professionals install, configure, and setup ongoing tasks to ensure best performance. SQL Server Reporting Services are an additional, but very important, feature to SQL Server. ITRegulators can help you customize reports so that you can derive the most value from your stored business-critical data – and use them to support your business decisions.'
componentImage={Img2}/>
<InfoComponent heading='Getting it right the first time'
paraText='The functionality and performance of your SQL Server relies on proper upfront planning and design. ITRegulators’ certified team of IT professionals implement best practices throughout the development lifecycle to ensure that your SQL Server is optimized to meet your needs and supports your business in the long-term. and understanding in a large number of areas. You can trust one of our certified professionals to design and deploy solutions that enable your business to achieve optimum efficiency and profitability through better usage of technology.'
componentImage={Img3}
/>
<IconsComponent 
        heading='ITRegulators are competent, qualified and experienced in the following areas:'
        iconClass='fa-brands fa-battle-net'
        iconText='.NET'
        iconClass1='fa-solid fa-diagram-project'
        iconText1='Active Directory'
        iconClass2='fa-solid fa-message'
        iconText2='Exchange'
        iconClass3='fa-solid fa-globe'
        iconText3='LAN/WAN'
        iconClass4='fa-solid fa-mobile-screen'
        iconText4='Mobility'
        iconClass5='fa-solid fa-share-nodes'
        iconText5='Share Point'
        iconClass6='fa-solid fa-server'
        iconText6='SQL Server'
        iconClass7='fa-solid fa-vr-cardboard'
        iconText7='virtualization'
        iconClass8='fa-solid fa-shield-halved'
        iconText8='VPN'
      
      />

</div>
  )
}

export default SqlPage