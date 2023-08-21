import React from 'react';
import logo from '../Assets/logo.png';
import './css/Footer.css';
import { Fade, Slide } from 'react-awesome-reveal';

function Footer() {
  return (
    <div className='Footer'>
      
      
      <div className='Info'>
      <Slide>
      <Fade cascade damping={0.4}>
        <img src={logo} alt='logo' />
        <h1>IT Regulators Inc.</h1>
        <h1>MAIN OFFICE:440 W. Boughton Rd. Ste. C1Bolingbrook Illinois. 60640</h1>
        <h2>888-792-8151</h2>
        <h2>Info@itregulators.com</h2>
        <h2>PublicRelations@itregulators.com</h2>
        
        </Fade>
        </Slide>
      </div>
      

      <div className='services'>
        <Slide>
      <Fade cascade damping={0.4}>
        <h1>Services & Solutions</h1>
        <a href='/it-managed-services'>IT Managed Services</a>
        <a href='/it-deployment'>IT Deployment</a>
        <a href='/office-365'>Office 365</a>
        <a href='/it-consulting-services'>IT Consulting Services</a>
        <a href='/it-assessments-audit'>IT Assessments & Audit</a>
        <a href='/it-help-desk'>IT Help Desk</a>
        <a href='/it-emergency-support'>IT Emergency Support</a>
        <a href='/it-staffing-services'>IT Staffing Services</a>
        <a href='/it-security-services'>IT Security Services</a>
        <a href='/security-systems'>Security Systems</a>
        <a href='/email-spam-protection'>Email & Spam Protection</a>
        <a href='/low-voltage-cabling'>Low Voltage Cabling</a>
        </Fade>
        </Slide>
      </div>

      <div className='comp'>
        <Fade >
      <Fade cascade damping={0.4}>
        <h1>IT Competencies</h1>
        <a href='/'>.NET</a>
        <a href='/'>Cybersecurity</a>
        <a href='/'>Cloud</a>
        <a href='/'>Exchange</a>
        <a href='/'>LAN/WAN</a>
        <a href='/'>Mobility</a>
        <a href='/'>SQL Server</a>
        <a href='/'>Virtualization</a>
        <a href='/'>VPN</a>
        </Fade>
        </Fade>
      </div>

      <div className='staffing'><Slide direction={'right'}>
      <Fade cascade damping={0.4}>
        <h1>IT Staffing Services</h1>
        <a href='/'>Short-term, long-term, and permanent placement of certified IT professionals</a>
        <a href='/'>Contract</a>
        <a href='/'>Temp to hire</a>
        <a href='/'>Permanent</a>
        <a href='/'>Emergency</a>
        <a href='/'>IT/MIS Department Staffing/Builder</a>
        </Fade>
        </Slide>
      </div>

      <div className='Navigations'><Slide direction={'right'}>
        <Fade cascade damping={0.4}>
        <h1>Navigation</h1>
        <a href='/about'>About Us</a>
        <a href='/industries'>Industries</a>
        <a href='/resources'>Resources</a>
        <a href='/contact'>Contact Us</a>
        </Fade>
        </Slide>
      </div>
     
    </div>
  );
}

export default Footer;