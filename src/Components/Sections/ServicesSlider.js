import React from 'react'
import {Fade} from 'react-awesome-reveal'
import './CSS/ServiceSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination } from 'swiper/modules';

 
function ServicesSlider() {
  return (
    <div className='ServiceSlider'>

      
      <h1><span style={{borderBottom:'1px solid red'}}>Services</span> offered by ITRegulators include:</h1>
    
  
      <div className='ServiceContainer'>
  
     
         
                <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'8'}
          pagination={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
         
          modules={[EffectCoverflow,Pagination]}
          className="mySwiper"
        >
          
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
    
  )
}

export default ServicesSlider