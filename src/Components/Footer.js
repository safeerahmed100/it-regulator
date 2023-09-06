import React from 'react';
import logo from '../Assets/logo.png';
import VeteranLogo from '../Assets/logo-veteranownedbusiness 1.png'
import './css/Footer.css';
import {  Slide } from 'react-awesome-reveal';

function Footer() {
  return (
    <div className='Footer'>
      
      <div className='FooterContainer ForMobile'>
      <Slide>
      <div className='FooterResponsive'>
      <div className='Info'>
      
        <img src={logo} alt='logo' />
        <h1>IT Regulators Inc.</h1>
        <h1>MAIN OFFICE:440 W. Boughton Rd. Ste. C1Bolingbrook Illinois. 60640</h1>
        <div className='socialIcons '>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
         <i className="fa-brands fa-instagram"></i>
            </div>
        
       
      </div>
      
      
      <div className='services'>
        
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
       
      </div>
      </div>
      <div className='FooterResponsive'>
      <div className='comp'>
        
      
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
       
      </div>



      <div className='staffing'>
      
        <h1>IT Staffing Services</h1>
        <a href='/'>Short-term, long-term, and permanent placement of certified IT professionals</a>
        <a href='/'>Contract</a>
        <a href='/'>Temp to hire</a>
        <a href='/'>Permanent</a>
        <a href='/'>Emergency</a>
        <a href='/'>IT/MIS Department Staffing/Builder</a>
        
      </div>
      </div>
      <div className='FooterResponsive'>
      <div className='Navigations'>
        <h1>Navigation</h1>
        <a href='/about'>About Us</a>
        <a href='/industries'>Industries</a>
        <a href='/resources'>Resources</a>
        <a href='/contact'>Contact Us</a>
        <img src={VeteranLogo} alt='vl'/>
        <button className='Footerbtn' style={{background:'blue'}}>Newsletter</button>
        <button className='Footerbtn'style={{background:'red'}} >Careers</button>
        <button className='Footerbtn'style={{background:'black'}}>Partner with us</button>
       
      </div>
      </div>
      </Slide>
      </div>
      

      <div className='FooterContainer ForPc'>
      
        <div className='Info'>
   
      
        <img src={logo} alt='logo' />
        <h1>IT Regulators Inc.</h1>
        <h1>MAIN OFFICE:440 W. Boughton Rd. Ste. C1Bolingbrook Illinois. 60640</h1>
        <h2><i className='bi bi-telephone-fill'></i>888-792-8151</h2>
        <h2><i className="bi bi-envelope-fill"></i>Info@itregulators.com</h2>
        <p><i className="bi bi-envelope-fill"></i>PublicRelations@itregulators.com</p>
        <div className='socialIcons '>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
         <i className="fa-brands fa-instagram"></i>
            </div>
       
       
      </div>
      
      
      <div className='services'>
       
      
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
      
      </div>

      <div className='comp'>
       
      
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
      
      </div>



      <div className='staffing'>
      
        <h1>IT Staffing Services</h1>
        <a href='/'>Short-term, long-term, and permanent placement of certified IT professionals</a>
        <a href='/'>Contract</a>
        <a href='/'>Temp to hire</a>
        <a href='/'>Permanent</a>
        <a href='/'>Emergency</a>
        <a href='/'>IT/MIS Department Staffing/Builder</a>
       
      </div>

      <div className='Navigations'>
       
        <h1>Navigation</h1>
        <a href='/about'>About Us</a>
        <a href='/industries'>Industries</a>
        <a href='/resources'>Resources</a>
        <a href='/contact'>Contact Us</a>
        <img src={VeteranLogo} alt='vl'/>
        <button className='Footerbtn'style={{background:'black'}}>Partner with us</button>

      </div>
     
        </div>
       
      </div>
   
  );
}

export default Footer;




