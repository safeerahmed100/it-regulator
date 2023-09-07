import React from 'react'
import Img1 from '../Sections/CSS/Assets/CompetencyImg.png'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import IconsComponent from '../Sections/IconsComponent'

function Competencies() {
  return (
    <div>
    <HeaderComponent componentClass='CompetenciesHeader' highlightedText='IT' Text='Competencies'/>
    <InfoComponent heading='The staff at ITRegulators are highly qualified'
    componentImage={Img1}
    paraText='and have deep experience and understanding in a large number of areas. You can trust one of our certified professionals to design and deploy solutions that enable your business to achieve optimum efficiency and profitability through better usage of technology.'
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

export default Competencies