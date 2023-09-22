import React, {useState,useEffect } from 'react'
import './CSS/Services.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import {NavLink} from 'react-router-dom' 





function ServicesSlider({isHover,componentClass}) {
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
    <div className={`Services ${isHover===true? 'stacking': ''} ${componentClass}`}>
    <div className='ServiceContainer'>
    <div className='ServiceSlider' >
        
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
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay,EffectCoverflow,Pagination]}
        className="mySwiper"> 

        {/* FOUR SLIDES */}
        <SwiperSlide>
        <div className='ServicesSlides ss1'>
          <div className='ServiceSlideOverlay'></div>
          <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
          <NavLink to='/it-managed-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss2'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>IT Help Desk</h2>
          <p>Our outsourced IT help desk solutions allow your organization to benefit from the most highly qualified and certified technical staff anywhere – without having to worry about recruiting, training, fulfillment and other costly and time consuming tasks.</p>
          <NavLink to='/it-help-desk' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss3'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Low Voltage Cabling</h2>
          <p>Our skilled technicians will thoroughly study your needs, walk you through different possibilities of how your low voltage cabling can be structured, and wire it in the most suitable way, ensuring all your systems are fully integrated and performing optimally. With an infrastructure designed to serve you now and in the future, you’ll be on the right path to success.</p>
          <NavLink to='/low-voltage-cabling' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss4'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>IT Consultancy</h2>
          <p>Combining our trademark comprehensive IT services, broad expertise, and unyielding customer service, ITRegulators’ consulting services provide you with the agility you need to balance varying workload demands with the staff, strategic direction, and skills you need to move your technology ahead—effortlessly and quickly.</p>
          <NavLink to='/it-consultancy-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
                {/* New FOUR SLIDES */}

                <SwiperSlide>
        <div className='ServicesSlides  ss5'>
          <div className='ServiceSlideOverlay'></div>
          <div className='ServiceSlideText'>
          <h2>Network Security</h2>
          <p>Interestingly, while the assumption is often that the threat comes from external sources, more often than not, it originates from within the organization itself, in the form of a trusted employee with inappropriate access privileges. What are the typical security issues that we commonly encounter?</p>
          <NavLink to='/it-security-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides  ss6'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Email & Spam Protection</h2>
          <p>Email has undeniably transformed business communications – and nowadays we all expect a fast, reliable and secure service. ITRegulators’ hosted email service is an off-site messaging infrastructure that is both high performing and secure.</p>
          <NavLink to='/email-spam-protection' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides  ss7'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>IT Assessments & Audits</h2>
          <p>The experts at ITRegulators will analyze the current state of your technology and prepare
your organization for future needs. This is the first step towards ensuring that your IT
infrastructure is properly designed to support your evolving business needs.</p>
<NavLink to='/it-assessment-audit-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides  ss8'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Security Systems</h2>
          <p>Our technicians will assess your risks and priorities, then recommend the most effective security systems for your company. We’ll install the devices strategically to ensure maximum protection with advanced configurations so you can run your business with confidence, knowing your critical assets are protected.</p>
          <NavLink to='/security-systems' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
       

        </Swiper>
       
        </div>  
        </div>  
        </div>  
   
  
 
 
  )

}

export default ServicesSlider