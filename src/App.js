import './App.css';
import Navbar from './Components/Navbar'
import './Components/css/Responsive.css'
import Home from './Components/HomePage'
import { Routes,Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
 import AboutPage from './Components/AboutPage';
import ServicePage from './Components/ServicePage';
import NetworkSecurity from './Components/NetworkSecurity';
import ManageServices from './Components/ManageServices';
import ConsultancyServices from './Components/ConsultancyServices';

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

  </Routes>
  <Contact />
  <Footer />
<div className='FooterBanner'>
    <h6>Design and developed by CREATECHZ</h6>
  </div>
</>
  );
}

export default App;
