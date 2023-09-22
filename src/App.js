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
import MobilityPage from './Components/Pages/MobilityPage';
import SharepointPage from './Components/Pages/SharepointPage';
import SqlPage from './Components/Pages/SqlPage';
import VritualizationPage from './Components/Pages/VritualizationPage';
import Vpn from './Components/Pages/Vpn';
import Industries from './Components/Pages/Industries';
import NapearvillePage from './Components/Pages/NapearvillePage';
import ChicagoPage from './Components/Pages/ChicagoPage';
import JioletPage from './Components/Pages/JioletPage';
import BoilingbrookPage from './Components/Pages/BoilingbrookPage';
import BlogPage from './Components/Pages/BlogPage';
import BlogItems from './Components/Sections/BlogItems';
import NewsPage from './Components/Pages/NewsPage';
import ContactPage from './Components/Pages/ContactPage';
import OnlineMarketing from './Components/Pages/OnlineMarketing';
import CloudStorage from './Components/Pages/CloudStorage';
import ComputerRepair from './Components/Pages/ComputerRepair';




// import ContactPopUp from './Components/ContactPopUp';


function App() {
  const ScrollTop=()=>{
    window.scroll(0,0)
    
}

  const [isHover,setIsHover]=useState(false)
  return (
   <>
  <Navbar isHover={isHover} setIsHover={setIsHover}/>
  <Routes  >
    <Route path='/' element={<Home  isHover={isHover} setIsHover={setIsHover}/>}></Route>
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
    <Route path='/mobility' element={<MobilityPage/>}></Route>
    <Route path='/sharepoint' element={<SharepointPage/>}></Route>
    <Route path='/sql-server' element={<SqlPage/>}></Route>
    <Route path='/virtualization' element={<VritualizationPage/>}></Route>
    <Route path='/vpn' element={<Vpn/>}></Route>
    <Route path='/industries' element={<Industries/>}></Route>
    <Route path='/it-managed-napearville' element={<NapearvillePage/>}></Route>
    <Route path='/it-managed-chicago' element={<ChicagoPage/>}></Route>
    <Route path='/it-managed-jiolet' element={<JioletPage/>}></Route>
    <Route path='/it-managed-boilingbrook' element={<BoilingbrookPage/>}></Route>
    <Route path='/blogs' element={<BlogPage/>}></Route>
    <Route path='/blogs/office/unleash-the-power' element={<BlogItems/>}></Route>
    <Route path='/news' element={<NewsPage/>}></Route>
    <Route path='/contact' element={<ContactPage/>}></Route>
    <Route path='online-marketing' element={<OnlineMarketing/>}></Route>
    <Route path='cloud-solution' element={<CloudStorage/>}></Route>
    <Route path='computer-repair' element={<ComputerRepair/>}></Route>
    </Routes>
    <Footer ScrollTop={ScrollTop}/>

</>
  );
}

export default App;
