import React from 'react'
import './CSS/Partners.css'
import cisco from './CSS/Assets/logo-Cisco-Meraki-1.png'
import dell from './CSS/Assets/logo-Dell-1.png'
import gillware from './CSS/Assets/logo-Gillware-1.png'
import hp from './CSS/Assets/logo-HP-1.png'
import mozy from './CSS/Assets/logo-mozy-by-Dell-1.png'
import trend from './CSS/Assets/logo-Trend-1.png'
import vmware from './CSS/Assets/logo-VMware-1.png'
import microsoft from './CSS/Assets/Microsoft-Logo-1.png'
import { Slide } from 'react-awesome-reveal'
import Typewriter from 'typewriter-effect'

function Partners() {
  return (
    <div className='Partners'>
      <h1><Typewriter
  options={{
    strings: ["Partners & Affiliations"],
    autoStart: true,
    loop: true,
  }}
/></h1>
      <div className='PartnersIcon'>
        <Slide Fade cascade damping={0.1}>
      <a href='https://www.trendmicro.com/en_us/business.html'  rel='noreferrer' target="_blank"> <img src={mozy}   alt='log' /></a>
<a href='https://www.trendmicro.com/en_us/business.html'  rel='noreferrer' target="_blank"><img src={trend}   alt='log' /></a>
<a href='https://www.vmware.com/sg.html' rel='noreferrer'  target='_blank' ><img src={vmware}   alt='log' /> </a>
<a href='https://www.gillware.com/' rel='noreferrer'  target="_blank"><img src={gillware}   alt='log' /></a>
<a href='https://www.microsoft.com/' rel='noreferrer'  target="_blank"><img src={microsoft}   alt='log' /></a>
<a href='https://meraki.cisco.com/' rel='noreferrer'  target="_blank"><img src={cisco}   alt='log' /></a>
<a href='https://www.dell.com/' rel='noreferrer'  target="_blank"> <img src={dell}   alt='log' /></a>
<a href='https://www.hp.com/' rel='noreferrer'  target="_blank"><img src={hp}   alt='log' /> </a>

</Slide>
      </div>


    </div>
  )
}

export default Partners