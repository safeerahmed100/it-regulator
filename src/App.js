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




// import ContactPopUp from './Components/ContactPopUp';


function App() {
  
  return (
   <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}></Route>
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

  </Routes>
  <Footer />

</>
  );
}

export default App;
