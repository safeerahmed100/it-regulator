import React, { useEffect, useState } from 'react'
import Logo from '../Assets/logo.png'
import './css/Navbar.css'
import {Link,NavLink} from "react-router-dom";


function Navbar({isHover,setIsHover}) {
  const [isActive,setIsActive] = useState(false)
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
        <NavLink to='/service' className='link serviceDrop' onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>IT Services & Solutions</NavLink>
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
        <a href='tel:+888-792-8151' className='btn'><span> <i className="fa-solid fa-phone-volume"></i> </span>+888-792-8151</a>
        <button className='btn remote animate-bounce'><i class="fa-solid fa-headphones"></i><span>  Remote Support</span></button>

      </div>

<div className='HamBurger'><i className={isActive===true?'displayNone':'fa-solid fa-bars'} style={{color:'black'}} onClick={handleMenu}></i>
</div>

{isActive &&  (

        <div  className='NavLinks mobile '>
          <div className='logoSide'>
        <Link to='/'>
    <img src={Logo} alt='logo'/>
    </Link>
      </div>
      <div className='NavigationLinks'>
        <i className='fa-solid fa-x' style={{color:'white'}} onClick={handleMenu}></i>
        <NavLink to='/about' className='link' end>About</NavLink>
        <NavLink to='/service' className='link' >IT Services & Solutions</NavLink>
        <NavLink to='/networksecurity' className='link'>Network Security</NavLink>
        <NavLink to='/industries'className='link' >Industries</NavLink>
        <NavLink to='/locations'className='link' >Locations</NavLink>
        <NavLink to='/resources' className='link' >Resources</NavLink>
        <NavLink to='/contact' className='link' >Contact Us</NavLink>
        </div>
        </div>
        
     

)}

</div>
  )
}
export default Navbar