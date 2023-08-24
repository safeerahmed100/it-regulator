import React, { useState } from 'react'
import Logo from '../Assets/logo.png'
import './css/Navbar.css'
import {Link,NavLink} from "react-router-dom";
import { Slide } from "react-awesome-reveal";


function Navbar() {
  const [isActive,setIsActive] = useState(false)
function handleMenu(){
  setIsActive(!isActive)
}

  return (
    <div className='Navbar'>
      <Slide>
      <div className='logoSide'>
        <Link to='/'>
    <img src={Logo} alt='logo'/>
    </Link>
      </div>
      <div className='NavLinks'>
        <NavLink to='/about' className='link' end>About</NavLink>
        <NavLink to='/service' className='link' >IT Services & Solutions</NavLink>
        <NavLink to='/industries'className='link' >Industries</NavLink>
        <NavLink to='/locations'className='link' >Locations</NavLink>
        <NavLink to='/resources' className='link' >Resources</NavLink>
        <NavLink to='/contact' className='link' >Contact Us</NavLink>
      </div>
<i className={isActive===true? 'bi bi-x z-4' : 'bi bi-list'} onClick={handleMenu}></i>
{isActive &&  (
        <div  className='NavLinks mobile '>
        <NavLink to='/about' className='link' end>About</NavLink>
        <NavLink to='/service' className='link' >IT Services & Solutions</NavLink>
        <NavLink to='/industries'className='link' >Industries</NavLink>
        <NavLink to='/locations'className='link' >Locations</NavLink>
        <NavLink to='/resources' className='link' >Resources</NavLink>
        <NavLink to='/contact' className='link' >Contact Us</NavLink>
        </div>
)}
      <div className='buttons'>
        <button className='btn career'>Career</button>
        <a href='tel:+888-792-8151' className='btn'><span><i className="bi bi-telephone-fill"></i></span>+888-792-8151</a>
        <button className='btn'>Remote Support</button>
      </div>
      </Slide>
    </div>
  )
}
export default Navbar