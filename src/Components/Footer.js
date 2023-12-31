import React from 'react';
import logo from '../Assets/logo.png';
import VeteranLogo from '../Assets/logo-veteranownedbusiness 1.png'
import './css/Footer.css';
import {Link,NavLink} from "react-router-dom";

// import {  Slide } from 'react-awesome-reveal';

function Footer({ScrollTop}) {
 
  return (
    <div className='Footer'>
      <div className='FooterContainer ForPc'>   
        <div className='Info'>
          <Link to='/'>
        <img src={logo} alt='logo' />
        </Link>
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
        <NavLink onClick={ScrollTop} to='./it-managed-services' className='link'>IT Managed Services</NavLink> 
        <NavLink onClick={ScrollTop} to='./it-consultancy-services' className='link'>IT Consulting Services</NavLink> 
        <NavLink onClick={ScrollTop} to='./it-assessment-audit-services' className='link'>IT Assessments & Audits</NavLink> 
        <NavLink onClick={ScrollTop} to='./it-deployement-services' className='link'>IT Deployement</NavLink> 
        <NavLink onClick={ScrollTop} to='./it-emergency-support' className='link'>IT Emergency Support</NavLink> 
        <NavLink onClick={ScrollTop} to='./it-help-desk' className='link'>IT Help Desk</NavLink> 
        <NavLink onClick={ScrollTop} to='./it-security-services' className='link'>IT Security Services</NavLink> 
        <NavLink onClick={ScrollTop} to='./office-365' className='link'>Office 365</NavLink> 
        <NavLink onClick={ScrollTop} to='./low-voltage-cabling' className='link'>IT Low Voltage Cabling</NavLink> 
        <NavLink onClick={ScrollTop} to='./email-spam-protection' className='link'>Email & Spam Protection</NavLink> 
        <NavLink onClick={ScrollTop} to='./security-systems' className='link'>Security Systems</NavLink> 
      </div>
      <div className='comp'>
        <h1>IT Competencies</h1>
        <NavLink to='./it-competencies' className='link'>IT Competencies</NavLink>
          <NavLink onClick={ScrollTop} to='./net-framework'  className='link'>Net Framework</NavLink> 
          <NavLink onClick={ScrollTop} to='./active-directory'  className='link'>Active Directory</NavLink> 
          <NavLink onClick={ScrollTop} to='./exchange'   className='link'>Exchange Directory</NavLink> 
          <NavLink onClick={ScrollTop} to='./lan-wan'   className='link'>LAN / WAN</NavLink> 
          <NavLink onClick={ScrollTop} to='./mobility'   className='link'>Mobility</NavLink> 
          <NavLink onClick={ScrollTop} to='./sharepoint'   className='link'>Sharepoint</NavLink> 
          <NavLink onClick={ScrollTop} to='./virtualization'   className='link'>Virtualization</NavLink> 
          <NavLink onClick={ScrollTop} to='./sql-server'   className='link'>Sql Server</NavLink> 
          <NavLink onClick={ScrollTop} to='./vpn'   className='link'>VPN</NavLink> 
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
        <NavLink onClick={ScrollTop} to='/about' className='link' end>About</NavLink>
        <NavLink onClick={ScrollTop} to='/industries'className='link' >Industries</NavLink>

        <NavLink onClick={ScrollTop} to='/blogs' className='link' >Resources</NavLink>
        <NavLink onClick={ScrollTop} to='/contact' className='link' >Contact</NavLink>
        <div className='FooterContact'>
        <img src={VeteranLogo} alt='vl'/>
        <button className='Footerbtn'style={{background:'black'}}>Partner with us</button>
        </div>
      </div>
     
        </div>  
      </div>
   
  );
}

export default Footer;




