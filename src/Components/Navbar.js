import React, { useEffect, useState } from 'react'
import Logo from '../Assets/logo.png'
import './css/Navbar.css'
import {Link,NavLink} from "react-router-dom";


function Navbar() {
  const [isActive,setIsActive] = useState(true)
  const [isShow,setIsShow]=useState(false)

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

  return (
    <div className={`Navbar ${isShow && 'nav_black'}`}>

      <div className='logoSide'>
        <Link to='/'>
    <img src={Logo} alt='logo'/>
    </Link>
      </div>
     
      <div className='NavLinks'>
        <NavLink to='/about' className='link' end>About</NavLink>
        <NavLink to='/service' className='link serviceDrop' >IT Services & Solutions</NavLink>
        <div className='dropDown'>
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
        <NavLink to='./it-managed-service' className='link'>Security Systems</NavLink> 
        </div>
        <NavLink to='./it-staffing-services' className='link'>IT Staffing Services</NavLink> 
        <NavLink to='/industries'className='link' >Industries</NavLink>
        <NavLink to='/locations'className='link' >Locations</NavLink>
        <NavLink to='/resources' className='link' >Resources</NavLink>
        <NavLink to='/contact' className='link' >Contact</NavLink>
      </div>
      

      <div className='buttons'>
        <button className='btn career'>Career</button>
        <a href='tel:+888-792-8151' className='btn'><span><i className="bi bi-telephone-fill"></i></span>+888-792-8151</a>
        <button className='btn remote'>Remote Support</button>
      </div>

<i className={isActive===true?'displayNone':'bi bi-list'} style={{color:'black'}} onClick={handleMenu}></i>
{isActive &&  (
        <div  className='NavLinks mobile '>
          <i className='bi bi-x' style={{color:'white'}} onClick={handleMenu}></i>
        <NavLink to='/about' className='link' end>About</NavLink>
        <NavLink to='/service' className='link' >IT Services & Solutions</NavLink>
        <NavLink to='/networksecurity' className='link'></NavLink>
        <NavLink to='/industries'className='link' >Industries</NavLink>
        <NavLink to='/locations'className='link' >Locations</NavLink>
        <NavLink to='/resources' className='link' >Resources</NavLink>
        <NavLink to='/contact' className='link' >Contact Us</NavLink>
        </div>
     

)}
</div>
  )
}
export default Navbar