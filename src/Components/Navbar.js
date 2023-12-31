import React, { useEffect, useState } from 'react'
import Logo from '../Assets/logo.png'
import './css/Navbar.css'
import {Link,NavLink} from "react-router-dom";


function Navbar({isHover,setIsHover,ScrollTop}) {
  const [isActive,setIsActive] = useState(false)
  const [isShow,setIsShow]=useState(false)
  const [isdrop,setIsdrop]=useState(false)
  const [isdrop1,setIsdrop1]=useState(false)
  const [isdrop2,setIsdrop2]=useState(false)
  const [isdrop3,setIsdrop3]=useState(false)
  const [isdrop4,setIsdrop4]=useState(false)
  

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
    /*Desktop Navbar */
    <div className={`Navbar ${isShow && 'nav_black'}`}>
      <div className='logoSide'>
        <Link  onClick={()=>{window.scroll(0,0)}} to='/'>
    <img src={Logo} alt='logo'/>
    </Link>
      </div>
      <div className='NavLinks'>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/about' className='link' end>About</NavLink>
        <div className='service-wrapper wrapper'>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/service' className='link'>Services</NavLink>
        <i className='fa-solid fa-angle-down'></i>
       
        <div className='service-drop-menu'>
        <div className='service-drop-wrapper'>
        <span className='it-service-btn'>IT Services & Solution</span>
        <div className='service-solution'>
        <NavLink  onClick={()=>{window.scroll(0,0)}}  to='./it-managed-services' className='link'>IT Managed Services</NavLink> 
        <NavLink onClick={()=>{window.scroll(0,0)}} to='./it-consultancy-services' className='link'>IT Consulting Services</NavLink> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./it-assessment-audit-services' className='link'>IT Assessments & Audits</NavLink> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./it-deployement-services' className='link'>IT Deployement</NavLink> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./it-emergency-support' className='link'>IT Emergency Support</NavLink> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./it-help-desk' className='link'>IT Help Desk</NavLink> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./it-security-services' className='link'>IT Security Services</NavLink> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./office-365' className='link'>Office 365</NavLink> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./low-voltage-cabling' className='link'>IT Low Voltage Cabling</NavLink> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./email-spam-protection' className='link'>Email & Spam Protection</NavLink> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./security-systems' className='link'>Security Systems</NavLink> 
        </div>
        </div>
        <div className='compi-drop-wrapper'>
        <span className='it-compi-btn'>IT Competencies</span>
        <div className='service-competencies'>

          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./it-competencies' className='link'>IT Competencies</NavLink>
          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./net-framework'  className='link'>Net Framework</NavLink> 
          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./active-directory'  className='link'>Active Directory</NavLink> 
          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./exchange'   className='link'>Exchange Directory</NavLink> 
          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./lan-wan'   className='link'>LAN / WAN</NavLink> 
          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./mobility'   className='link'>Mobility</NavLink> 
          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./sharepoint'   className='link'>Sharepoint</NavLink> 
          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./virtualization'   className='link'>Virtualization</NavLink> 
          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./sql-server'   className='link'>Sql Server</NavLink> 
          <NavLink  onClick={()=>{window.scroll(0,0)}} to='./vpn'   className='link'>VPN</NavLink> 
          </div>
          </div>
        </div>
        </div>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='./it-staffing-services' className='link'>IT Staffing Services</NavLink>
        <div className='ind-menu-wrapper wrapper'> 
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/industries'className='link' >Industries</NavLink>
        <i className='fa-solid fa-angle-down'></i>
        <div className='ind-menu'>
          <div className='left'>
            <h2>Flexible solutions for competitive industries.</h2>
            <p>Whether your business operates in Chicago, Woodstock, Manteno, or anywhere else in the Chicagoland area and Wisconsin, ITRegulators can provide valuable assistance. Partnering with ITRegulators will give your business a competitive
edge.</p>
            </div>
          <div className='right'>
            <div className='icon-item'>
            <i className='fa-solid fa-landmark'></i>
            <p>Goverment</p>
            </div>

            <div className='icon-item'>
            <i className='fa-solid fa-landmark'></i>
            <p>Goverment</p>
            </div>
            <div className='icon-item'>
            <i className='fa-solid fa-landmark'></i>
            <p>Goverment</p>
            </div>
            <div className='icon-item'>
            <i className='fa-solid fa-landmark'></i>
            <p>Goverment</p>
            </div>
            <div className='icon-item'>
            <i className='fa-solid fa-landmark'></i>
            <p>Goverment</p>
            </div>
            <div className='icon-item'>
            <i className='fa-solid fa-landmark'></i>
            <p>Goverment</p>
            </div>
          </div>
        </div>
        </div>
        <div className='location-menu-wrapper wrapper'>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/' className='link loc' >Locations</NavLink>
        <i className='fa-solid fa-angle-down'></i>

         <div className='location-menu'>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/it-managed-napearville' className='link' >Napearville</NavLink>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/it-managed-chicago' className='link' >Chicago</NavLink>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/it-managed-jiolet' className='link' >Jiolet</NavLink>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/it-managed-boilingbrook' className='link' >Boilingbrook</NavLink>
        </div>
        </div>
        <div className='resource-menu-wrapper wrapper'>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/' className='link loc' >Resources</NavLink>
        <i className='fa-solid fa-angle-down'></i>

        <div className='resource-tab'>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/blogs' className='link' >Blogs</NavLink>
        <NavLink  onClick={()=>{window.scroll(0,0)}} to='/news' className='link' >News</NavLink>
      </div> 
      </div>
      <NavLink  onClick={()=>{window.scroll(0,0)}} to='/contact' className='link' >Contact</NavLink>
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
      <img onClick={closeMenu} src={Logo} alt='logo'/>
      </Link>
      </div>
      <div className='NavClose'>
      <i className='fa-solid fa-x'  onClick={handleMenu}></i>
      </div>
        </div>
      <div className='NavigationLinks'>
        <NavLink onClick={closeMenu} to='/about' className='link' end>About</NavLink>
        <div className='serviceLinkflex'>
        <NavLink  onClick={closeMenu} to='/service' className='link serviceLink' >Services  </NavLink>
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
        <div className='location-mobile-wrapper'>
          <div className='location-link-arrow'>
        <NavLink onClick={closeMenu} to='/locations'className='link location-link' >Locations</NavLink>
        <i onClick={()=>setIsdrop3(!isdrop3)} className='fa-solid fa-angle-down'></i>
        </div>
        <div className={`location-mobile-menu ${isdrop3===true? 'showmenu': ''}`}>
        <NavLink to='/it-managed-napearville' className='link' >Napearville</NavLink>
        <NavLink to='/it-managed-chicago' className='link' >Chicago</NavLink>
        <NavLink to='/it-managed-jiolet' className='link' >Jiolet</NavLink>
        <NavLink to='/it-managed-boilingbrook' className='link' >Boilingbrook</NavLink>
        </div>
        </div>
        <div className='resource-mobile-wrapper'>
        <div className='resource-link-arrow'>
        <NavLink onClick={closeMenu} to='/resources' className='link resource-link' >Resources</NavLink>
        <i onClick={()=>setIsdrop4(!isdrop4)} className='fa-solid fa-angle-down'></i>
        </div>
        <div className={`resource-mobile-menu ${isdrop4===true? 'showmenu': ''}`}>
        <NavLink to='/blogs' className='link' >Blogs</NavLink>
        <NavLink to='/news' className='link' >News</NavLink>
        </div>
        </div>
        <NavLink onClick={closeMenu} to='/contact' className='link' >Contact Us</NavLink>
        </div>
        </div>
)}

</div>
  )
}
export default Navbar









 
        



