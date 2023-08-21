import React from 'react'
import Logo from '../Assets/logo.png'
import './css/Navbar.css'
import { Slide } from "react-awesome-reveal";


function Navbar() {
  return (
    <div className='Navbar'>
      <Slide>
      <div className='logoSide'>
    <img src={Logo} alt='logo'/>
      </div>
      <div className='NavLinks'>
        <a href='about'>About</a>
        <a href='services'>IT Services & Solutions</a>
        <a href='industries'>Industries</a>
        <a href='locations'>Locations</a>
        <a href='resources'>Resources</a>
        <a href='contact'>Contact Us</a>
      </div>
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