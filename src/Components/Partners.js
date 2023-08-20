import React from 'react'
import './css/Partners.css'
import cisco from '../Assets/logo-Cisco-Meraki-1.png'
import dell from '../Assets/logo-Dell-1.png'
import gillware from '../Assets/logo-Gillware-1.png'
import hp from '../Assets/logo-HP-1.png'
import mozy from '../Assets/logo-mozy-by-Dell-1.png'
import trend from '../Assets/logo-Trend-1.png'
import vmware from '../Assets/logo-VMware-1.png'
import microsoft from '../Assets/Microsoft-Logo-1.png'

function Partners() {
  return (
    <div className='Partners'>
      <h1>Partners & Affiliations</h1>
      <div className='PartnersIcon'>
      <a href='https://www.trendmicro.com/en_us/business.html' rel='noreferrer' target="_blank"> <img src={mozy}  className='hover:animate-bounce'  alt='log' /></a>
<a href='https://www.trendmicro.com/en_us/business.html' rel='noreferrer' target="_blank"><img src={trend} className='hover:animate-bounce'  alt='log' /></a>
<a href='https://www.vmware.com/sg.html' rel='noreferrer' target='_blank' ><img src={vmware}  className='hover:animate-bounce' alt='log' /> </a>
<a href='https://www.gillware.com/' rel='noreferrer' target="_blank"><img src={gillware} className='hover:animate-bounce'  alt='log' /></a>
<a href='https://www.microsoft.com/' rel='noreferrer' target="_blank"><img src={microsoft} className='hover:animate-bounce'  alt='log' /></a>
<a href='https://meraki.cisco.com/' rel='noreferrer' target="_blank"><img src={cisco}  className='hover:animate-bounce' alt='log' /></a>
<a href='https://www.dell.com/' rel='noreferrer' target="_blank"> <img src={dell} className='hover:animate-bounce'  alt='log' /></a>
<a href='https://www.hp.com/' rel='noreferrer' target="_blank"><img src={hp}  className='hover:animate-bounce' alt='log' /> </a>

      </div>


    </div>
  )
}

export default Partners