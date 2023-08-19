import React from 'react'
import './css/Newsletter.css'
function Newsletter() {
  return (
    <div className='NewsLetter'>
      <h4>join with us</h4>
      <h1>NewsLetter</h1>
      <form>
      <div className='Form'>
      <input type='email' placeholder='Your Email'/>
      <button className='subsBtn btn'>subscribe</button> 
      </div>
      </form>
    </div>
  )
}

export default Newsletter