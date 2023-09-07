import './App.css';
import Navbar from './Components/Navbar'
import './Components/css/Responsive.css'
import Home from './Components/Pages/HomePage'
import { Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';
 import AboutPage from './Components/Pages/AboutPage';
import ServicePage from './Components/Pages/ServicePage';
import NetworkSecurity from './Components/Pages/NetworkSecurity';
import ManageServices from './Components/Pages/ManageServices';
import ConsultancyServices from './Components/Pages/ConsultancyServices';
import StaffingSerivce from './Components/Pages/StaffingSerivce';
import AssessmentsAudits from './Components/Pages/AssessmentsAudits';
import Deployment from './Components/Pages/Deployment';
import OfficePage from './Components/Pages/OfficePage';
import EmergencySupport from './Components/Pages/EmergencySupport';
import LowVoltageCabling from './Components/Pages/LowVoltageCabling';
import HelpDesk from './Components/Pages/HelpDesk';
import EmailPage from './Components/Pages/EmailPage';
import {React,useState } from 'react';
import SecurityPage from './Components/Pages/SecurityPage';
import CompetenciesPage from './Components/Pages/CompetenciesPage';
import FrameworkPage from './Components/Pages/FrameworkPage';
import DirectoryPage from './Components/Pages/DirectoryPage';
import ExchangePage from './Components/Pages/ExchangePage';
import LanWanPage from './Components/Pages/LanWanPage';




// import ContactPopUp from './Components/ContactPopUp';


function App() {
  const [isHover,setIsHover]=useState(false)
  return (
   <>
  <Navbar isHover={isHover} setIsHover={setIsHover}/>
  <Routes>
    <Route path='/' element={<Home isHover={isHover} setIsHover={setIsHover}/>}></Route>
    <Route path='/About' element={<AboutPage />}></Route>
    <Route path='/Service' element={<ServicePage />}></Route>
    <Route path='/it-security-services' element={<NetworkSecurity/>}></Route>
    <Route path='/it-managed-services' element={<ManageServices/>}></Route>
    <Route path='/it-consultancy-services' element={<ConsultancyServices/>}></Route>
    <Route path='/it-staffing-services' element={<StaffingSerivce/>}></Route>
    <Route path='/it-assessment-audit-services' element={<AssessmentsAudits/>}></Route>
    <Route path='/it-deployement-services' element={<Deployment/>}></Route>
    <Route path='/it-emergency-support' element={<EmergencySupport/>}></Route>
    <Route path='/it-help-desk' element={<HelpDesk/>}></Route>
    <Route path='/office-365' element={<OfficePage/>}></Route>
    <Route path='/low-voltage-cabling' element={<LowVoltageCabling/>}></Route>
    <Route path='/email-spam-protection' element={<EmailPage/>}></Route>
    <Route path='/security-systems' element={<SecurityPage/>}></Route>
    <Route path='/it-competencies' element={<CompetenciesPage/>}></Route>
    <Route path='/net-framework' element={<FrameworkPage/>}></Route>
    <Route path='/active-directory' element={<DirectoryPage/>}></Route>
    <Route path='/exchange' element={<ExchangePage/>}></Route>
    <Route path='/lan-wan' element={<LanWanPage/>}></Route>

    

  </Routes>
  <Footer />

</>
  );
}

export default App;
