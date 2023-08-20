import React from 'react'
import './css/Newsletter.css'
function Newsletter() {
  return (
    <div className='NewsLetter'>
      <h4>join with us</h4>
      <h1>NewsLetter</h1>
      
      <div className='Form'>
      <form>
      <input type='email' placeholder='Your Email'/>
      <button className='subsBtn btn'>subscribe</button> 
      </form>
      </div>
     
    </div>
  )
}

export default Newsletter