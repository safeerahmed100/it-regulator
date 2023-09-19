import React from 'react';
import './css/Contact.css';
import { Fade, Slide } from 'react-awesome-reveal';
import { useForm, ValidationError } from '@formspree/react';

function Contact({ componentClass }) {
  const [state, handleSubmit] = useForm("xpzgjpen");

  if (state.succeeded) {
    return (
      <div className='AfterFormSubmit'>
        <i className='fa-solid fa-message'></i>
        <h4>Thanks for Submitting</h4>
        <p>Your message has been sent!</p>
        <button>Go Back</button>
      </div>
    );
  }

  return (
    <div className={`Contact ${componentClass}`}>
      <div className='ContactContainer'>
        <Slide>
          <div className='ContactText'>
            <h1>
              NEED IT <span style={{ color: '#ff3939' }}>HELP</span> NOW?
            </h1>
            <h3>Fill in the form and we’ll get back to you as soon as possible</h3>
          </div>
          <div className='ContactForm'>
            <Fade cascade damping={0.5}>
              <form onSubmit={handleSubmit}>
                <select id='Service' name='Selected Service' placeholder='Service' required>
                  <option value=''>Services</option>
                  <option value='Web Development'>Web Development</option>
                  <option value='App Development'>App Development</option>
                  <option value='SEO Development'>SEO Development</option>
                </select>
                <input className='inputName' name='Name' type='text' placeholder='Full Name' required />
                <ValidationError prefix='Name' field='Name' errors={state.errors} />
                <input className='inputEmail' name='Email' type='email' placeholder='Email' required />
                <ValidationError prefix='Email' field='Email' errors={state.errors} />
                <input className='inputPhone' name='Phone' type='tel' placeholder='Phone' required />
                <ValidationError prefix='Phone' field='Phone' errors={state.errors} />
                <input className='inputBusiness' type='text' name='Business' placeholder='Business Name' />
                <textarea
                  rows='5'
                  className='inputMessage'
                  name='message'
                  placeholder='Your Message'
                  required
                />
                <ValidationError prefix='Message' field='message' errors={state.errors} />
                <button className='btn' type='submit'>
                  Send
                </button>
              </form>
            </Fade>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Contact;
