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
        className="mySwiper"> 
        <SwiperSlide>
        <div className='ServicesSlides ss1'>
          <div className='ServiceSlideOverlay'></div>
          <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
          <a href='/'>Read More</a>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss2'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
          <a href='/'>Read More</a>

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss3'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
          <a href='/'>Read More</a>

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss4'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
        <a href='/'>Read More</a>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss1'>
          <div className='ServiceSlideOverlay'></div>
          <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
          <a href='/'>Read More</a>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss2'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
          <a href='/'>Read More</a>

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss3'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
          <a href='/'>Read More</a>

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss4'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Managed ITServices</h2>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
        <a href='/'>Read More</a>
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