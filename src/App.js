import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Counter from './Components/Counter'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Newsletter from './Components/Newsletter'
import Partners from './Components/Partners'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
// import ContactPopUp from './Components/ContactPopUp';


function App() {
  
  return (
   <>
<Navbar />
<Header />
<About />
{/* <Counter /> */}
<Services />
<Testimonials />
<Newsletter />
<Partners />
 <Contact />
<Footer />
<div className='FooterBanner'>
    <h6>Design and developed by CREATECHZ</h6>
  </div>
</>
  );
}

export default App;
