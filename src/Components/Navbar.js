import React, { useState } from 'react'
import Logo from '../Assets/logo.png'
import './css/Navbar.css'
import {Link,NavLink} from "react-router-dom";
import { Slide } from "react-awesome-reveal";


function Navbar() {
  const [isActive,setIsActive] = useState(false)

  function handleNav(){
    setIsActive(isActive? true :false)

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
      {isActive && (
        <div  className='NavLinks mobile z-4'>

        <NavLink to='/about' className='link' end>About</NavLink>
        <NavLink to='/service' className='link' >IT Services & Solutions</NavLink>
        <NavLink to='/industries'className='link' >Industries</NavLink>
        <NavLink to='/locations'className='link' >Locations</NavLink>
        <NavLink to='/resources' className='link' >Resources</NavLink>
        <NavLink to='/contact' className='link' >Contact Us</NavLink>
        </div>
)}

<i className={isActive?'bi bi-x z-4' : 'bi-bi-list z-4'} onClick={()=>setIsActive(true)}></i>

      <div className='buttons'>
        <button className='btn career'>Career</button>
        <button className='btn'>+888-792-8151</button>
        <button className='btn'>Remote Support</button>

      </div>


      </Slide>
    </div>
  )
}

export default Navbar