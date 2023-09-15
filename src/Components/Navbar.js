import React, { useEffect, useState } from 'react'
import Logo from '../Assets/logo.png'
import './css/Navbar.css'
import {Link,NavLink} from "react-router-dom";


function Navbar({isHover,setIsHover}) {
  const [isActive,setIsActive] = useState(false)
  const [isShow,setIsShow]=useState(false)
  const [isdrop,setIsdrop]=useState(false)
  const [isdrop1,setIsdrop1]=useState(false)
  const [isdrop2,setIsdrop2]=useState(false)
  

  if(isActive===true){
   document.body.style.overflow='hidden'
  }
  else{
    document.body.style.overflow='auto'
  }
  function transitionNav(){
    (window.scrollY>100? setIsShow(true): setIsShow(false))
  }
  useEffect(()=>{
    window.addEventListener("scroll",transitionNav);
    return()=>{
      window.removeEventListener("scroll",transitionNav);
    }
  })
function handleMenu(){
  setIsActive(!isActive)
}
function closeMenu(){
  setIsActive(false)
}

  return (
    <div className={`Navbar ${isShow && 'nav_black'}`}>
      <div className='logoSide'>
        <Link to='/'>
    <img src={Logo} alt='logo'/>
    </Link>
      </div>
      <div className='NavLinks'>
        <NavLink to='/about' className='link' end>About</NavLink>
        <NavLink to='/service' className='link servicedropper' >Services</NavLink>
        <div className='service-drop-menu'>
        <span  onClick={()=>setIsdrop(!isdrop)} className='it-service-btn'>IT Services & Solution</span>
        <span onClick={()=>setIsdrop1(!isdrop1)} className='it-compi-btn'>IT Competencies</span>
        <div className={`service-solution ${isdrop===true? 'showmenu': ''} `}>
        <NavLink to='./it-managed-services' className='link'>IT Managed Services</NavLink> 
        <NavLink to='./it-consultancy-services' className='link'>IT Consulting Services</NavLink> 
        <NavLink to='./it-assessment-audit-services' className='link'>IT Assessments & Audits</NavLink> 
        <NavLink to='./it-deployement-services' className='link'>IT Deployement</NavLink> 
        <NavLink to='./it-emergency-support' className='link'>IT Emergency Support</NavLink> 
        <NavLink to='./it-help-desk' className='link'>IT Help Desk</NavLink> 
        <NavLink to='./it-security-services' className='link'>IT Security Services</NavLink> 
        <NavLink to='./office-365' className='link'>Office 365</NavLink> 
        <NavLink to='./low-voltage-cabling' className='link'>IT Low Voltage Cabling</NavLink> 
        <NavLink to='./email-spam-protection' className='link'>Email & Spam Protection</NavLink> 
        <NavLink to='./security-systems' className='link'>Security Systems</NavLink> 
        </div>
        <div className={`service-competencies ${isdrop1===true? 'showmenu': ''}`}>
          <NavLink to='./it-competencies' className='link'>IT Competencies</NavLink>
          <NavLink to='./net-framework'  className='link'>Net Framework</NavLink> 
          <NavLink to='./active-directory'  className='link'>Active Directory</NavLink> 
          <NavLink to='./exchange'   className='link'>Exchange Directory</NavLink> 
          <NavLink to='./lan-wan'   className='link'>LAN / WAN</NavLink> 
          <NavLink to='./mobility'   className='link'>Mobility</NavLink> 
          <NavLink to='./sharepoint'   className='link'>Sharepoint</NavLink> 
          <NavLink to='./virtualization'   className='link'>Virtualization</NavLink> 
          <NavLink to='./sql-server'   className='link'>Sql Server</NavLink> 
          <NavLink to='./vpn'   className='link'>VPN</NavLink> 
          </div>
        </div>
        <NavLink to='./it-staffing-services' className='link'>IT Staffing Services</NavLink> 
        <NavLink to='/industries'className='link' >Industries</NavLink>
        <NavLink to='/' className='link locationDrop' >Locations</NavLink>
         <div className='location-menu'>
        <NavLink to='/it-managed-napearville' className='link' >Napearville</NavLink>
        <NavLink to='/it-managed-chicago' className='link' >Chicago</NavLink>
        <NavLink to='/it-managed-jiolet' className='link' >Jiolet</NavLink>
        <NavLink to='/it-managed-boilingbrook' className='link' >Boilingbrook</NavLink>
        </div>
        <NavLink to='/' className='link resourcesDown' >Resources</NavLink>
        <div className='resource-tab'>
        <NavLink to='/blogs' className='link' >Blogs</NavLink>
        <NavLink to='/news' className='link' >News</NavLink>
      </div> 
      <NavLink to='/contact' className='link' >Contact</NavLink>
      </div>
      <div className='buttons'>
        <button className='btn career'>Career</button>
        <a href='tel:+888-792-8151' className='btn'><span> <i className="fa-solid fa-phone-volume"></i> </span>+888-792-8151</a>
        <button className='btn remote animate-bounce'><i className="fa-solid fa-headphones"></i><span>  Remote Support</span></button>
      </div>
<div className='HamBurger'><i className={isActive===true?'displayNone':'fa-solid fa-bars'} style={{color:'black'}} onClick={handleMenu}></i>
</div>
{isActive &&  (
       <div  className='NavLinks mobile '>
       <div className='NavTop'>
      <div className='logoSide'>
      <Link to='/'>
      <img src={Logo} alt='logo'/>
      </Link>
      </div>
      <div className='NavClose'>
      <i className='fa-solid fa-x'  onClick={handleMenu}></i>
      </div>
        </div>
      <div className='NavigationLinks'>
        <NavLink onClick={closeMenu} to='/about' className='link' end>About</NavLink>
        <div className='serviceLinkflex'>
        <NavLink  onClick={closeMenu} to='/service' className='link serviceLink' >Services</NavLink>
        <i onClick={()=>setIsdrop(!isdrop)} className="fa-solid fa-angle-down"></i>
        </div>
        <div className={`ServicesLink ${isdrop===true? 'showmenu' : ''}`}>
        <span>IT Services And Solutions <i onClick={()=>setIsdrop1(!isdrop1)} className="fa-solid fa-angle-down"></i></span>
        <div className={`ServiceLinkTab ${isdrop1===true? 'showmenu': ''}`}>
        <NavLink onClick={closeMenu} to='./it-managed-services' className='link'>IT Managed Services</NavLink> 
        <NavLink onClick={closeMenu} to='./it-consultancy-services' className='link'>IT Consulting Services</NavLink> 
        <NavLink onClick={closeMenu} to='./it-assessment-audit-services' className='link'>IT Assessments & Audits</NavLink> 
        <NavLink onClick={closeMenu} to='./it-deployement-services' className='link'>IT Deployement</NavLink> 
        <NavLink onClick={closeMenu} to='./it-emergency-support' className='link'>IT Emergency Support</NavLink> 
        <NavLink onClick={closeMenu} to='./it-help-desk' className='link'>IT Help Desk</NavLink> 
        <NavLink onClick={closeMenu} to='./it-security-services' className='link'>IT Security Services</NavLink> 
        <NavLink onClick={closeMenu} to='./office-365' className='link'>Office 365</NavLink> 
        <NavLink onClick={closeMenu} to='./low-voltage-cabling' className='link'>IT Low Voltage Cabling</NavLink> 
        <NavLink  onClick={closeMenu}to='./email-spam-protection' className='link'>Email & Spam Protection</NavLink> 
        <NavLink onClick={closeMenu} to='./security-systems' className='link'>Security Systems</NavLink> 
        </div>
        </div>
        <div className={`CompetenciesLink  ${isdrop===true? 'showmenu' : ''}`}>
        <span>IT Competencies <i onClick={()=>setIsdrop2(!isdrop2) }  className="fa-solid fa-angle-down"></i> </span>
          <div className={`CompetenciesLinkTab ${isdrop2===true? 'showmenu': '' }`}>
          <NavLink onClick={closeMenu} to='./it-competencies' className='link'>IT Competencies</NavLink>
          <NavLink onClick={closeMenu} to='./net-framework'  className='link'>Net Framework</NavLink> 
          <NavLink onClick={closeMenu} to='./active-directory'  className='link'>Active Directory</NavLink> 
          <NavLink onClick={closeMenu} to='./exchange'   className='link'>Exchange Directory</NavLink> 
          <NavLink onClick={closeMenu} to='./lan-wan'   className='link'>LAN / WAN</NavLink> 
          <NavLink onClick={closeMenu} to='./mobility'   className='link'>Mobility</NavLink> 
          <NavLink onClick={closeMenu} to='./sharepoint'   className='link'>Sharepoint</NavLink> 
          <NavLink onClick={closeMenu} to='./virtualization'   className='link'>Virtualization</NavLink> 
          <NavLink onClick={closeMenu} to='./sql-server'   className='link'>Sql Server</NavLink> 
          <NavLink onClick={closeMenu} to='./vpn'   className='link'>VPN</NavLink> 
          <NavLink onClick={closeMenu} to='./industries'   className='link'>Industries</NavLink> 
        </div>
        </div>
        <NavLink onClick={closeMenu} to='/it-staffing-services' className='link'>IT Staffing Services</NavLink>
        <NavLink onClick={closeMenu} to='/industries'className='link' >Industries</NavLink>
        <NavLink onClick={closeMenu} to='/locations'className='link' >Locations</NavLink>
        <NavLink onClick={closeMenu} to='/resources' className='link' >Resources</NavLink>
        <NavLink onClick={closeMenu} to='/contact' className='link' >Contact Us</NavLink>
        </div>
        </div>
        
     

)}

</div>
  )
}
export default Navbar









 
        



