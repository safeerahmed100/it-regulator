import React, { useEffect, useState } from 'react'
import Logo from '../Assets/logo.png'
import './css/Navbar.css'
import {Link,NavLink} from "react-router-dom";
import { Slide } from "react-awesome-reveal";


function Navbar() {
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
<i className={isActive===true?'displayNone':'bi bi-list'} style={{color:'black'}} onClick={handleMenu}></i>


{isActive &&  (
  

        <div  className='NavLinks mobile '>
          <i className='bi bi-x' style={{color:'white'}} onClick={handleMenu}></i>
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