import './App.css';
import Navbar from './Components/Navbar'
import './Components/css/Responsive.css'
import Home from './Components/HomePage'
import { Routes,Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
 import AboutPage from './AboutPage';
import ServicePage from './Components/ServicePage';
// import ContactPopUp from './Components/ContactPopUp';


function App() {
  
  return (
   <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/About' element={<AboutPage />}></Route>
    <Route path='/Service' element={<ServicePage />}></Route>

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
