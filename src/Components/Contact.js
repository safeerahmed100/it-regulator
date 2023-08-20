import React from 'react'
import './css/Contact.css'
// import ContactPopUp from './ContactPopUp'

function Contact() {
  return (
    <div className='Contact'>

      <h1>NEED IT HELP NOW?</h1>
      <h3>Fill in the the form and we’ll get back to you as soon as possible</h3>

      <div className='ContactForm'>
        <form >
        <select placeholder='Service'>
          <option>Services</option>
          <option>Web Development</option>
          <option>App Development</option>
          <option>SEO Development</option>
        </select>
        <input  className='inputName' type='name' placeholder='Full Name'/>
        <input className='inputEmail' type='email' placeholder='Email' />
        <input className='inputPhone' type='phone' placeholder='Phone' />
        <input className='inputBusiness' type='text' placeholder='Business Name'/>
        <input  className='inputMessage' type='text' placeholder='Your Message' />
        <button className='btn'>Send</button>

        <div className='socialIcons '>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-instagram"></i>
            </div>

        </form>

        {/* {showPopup && <ContactPopUp setShowPopup={setShowPopup}/>} */}
      </div>
    </div>

  )
}

export default Contact