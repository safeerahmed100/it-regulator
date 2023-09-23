import React, {useState,useEffect } from 'react'
import './CSS/Services.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {NavLink} from 'react-router-dom' 
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Fade, Slide } from 'react-awesome-reveal';
import Typewriter from 'typewriter-effect'




function Services({isHover}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check the screen width and update the state
    function checkScreenWidth() {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 768);
    }

    // Initial check
    checkScreenWidth();

    // Attach a resize event listener to update the state when the window is resized
    window.addEventListener('resize', checkScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
   
      
    <div className={`Services ${isHover===true? 'stacking': ''}`}>
      <Slide duration={1000} direction={'left'}>
      
    <h1><Typewriter
  options={{
    strings: ['Our Services'],
    autoStart: true,
    loop: true,
    pauseFor:500000
  }}
/></h1>
    </Slide>

    <div className='ServiceContainer'>

      <div className='ServiceSlider' >
        <Slide>  
              <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={`${isSmallScreen===true? '1': '3'}`}
        loop={true}       

        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
       
        
        modules={[Autoplay,EffectCoverflow,Pagination]}
        
        className="mySwiper"
      >
        
        <SwiperSlide>
        <div className='ServicesSlides ss1'>
          <div className='ServiceSlideOverlay'></div>
          <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
          <NavLink to='./it-managed-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss2'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>IT Help Desk</h2>
          <p>Our outsourced IT help desk solutions allow your organization to benefit from the most highly qualified and certified technical staff anywhere – without having to worry about recruiting, training, fulfillment and other costly and time consuming tasks.</p>
          <NavLink to='./it-help-desk' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss3'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Low Voltage Cabling</h2>
          <p>Our skilled technicians will thoroughly study your needs, walk you through different possibilities of how your low voltage cabling can be structured, and wire it in the most suitable way, ensuring all your systems are fully integrated and performing optimally. With an infrastructure designed to serve you now and in the future, you’ll be on the right path to success.</p>
          <NavLink to='./low-voltage-cabling' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss4'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>IT Consultancy</h2>
          <p>Combining our trademark comprehensive IT services, broad expertise, and unyielding customer service, ITRegulators’ consulting services provide you with the agility you need to balance varying workload demands with the staff, strategic direction, and skills you need to move your technology ahead—effortlessly and quickly.</p>
          <NavLink to='./it-consultancy-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        
       

        </Swiper>
        </Slide>

        </div>
        <div className='ServiceText'>
        < Fade cascade damping={0.4}>
      
      <h4>How we  can help you</h4>
      <p>We are dedicated to providing customized IT solutions that are specifically designed to meet the individual needs and goals of your business. By partnering with us, your Chicago-based company will witness a substantial increase in efficiency, empowering you to deliver exceptional service to your clients and ultimately enhance your bottom line.</p>
   <NavLink onClick={()=>{window.scroll(0,0)}} className='btn' to='/service'>View All Services</NavLink>
 
 
 </Fade>
    
    </div>
        </div>
      
        </div>  
   
  
 
 
  )

}

export default Services