import React from 'react'
import Logo from '../css/logo.png'
import '../css/Responsive.css'
import {Link} from "react-router-dom";


function ResponsiveNav() {
  return (
   <div className='mobile-Nav'>
    
    <div className='logoImg'>
    <Link>
    <img src={Logo} alt='logo'/>
    
    </Link></div>
    <div className='Menu'>
    <i className='fa-solid fa-list' style={{color:'white'}} ></i>
    </div>
    <br></br>
    {/* <div className='Page-link'>
        <NavLink to='/about' className='link' end>About</NavLink>
        <NavLink to='/service' className='link' >IT Services & Solutions</NavLink>
        <NavLink to='/networksecurity' className='link'>Network Security</NavLink>
        <NavLink to='/industries'className='link' >Industries</NavLink>
        <NavLink to='/locations'className='link' >Locations</NavLink>
        <NavLink to='/resources' className='link' >Resources</NavLink>
        <NavLink to='/contact' className='link' >Contact Us</NavLink>
    </div> */}

   </div>
  )
}

export default ResponsiveNav