import React from 'react'
import './CSS/ServiceSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Pagination } from 'swiper/modules';

 
function ServicesSlider({componentClass}) {
  return (
    <div className={`ServiceSlider ${componentClass}`}>
      <div className='ServiceContainer'> 
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
          <div className='ServicePageSlider'>
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
          </div>
          </Swiper>
          </div>

</div>
    
  )
}

export default ServicesSlider