import React from 'react'
import './css/Services.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow } from 'swiper/modules';
import { Fade, Slide } from 'react-awesome-reveal';




function Services() {
  return (
   
      
    <div className='Services'>
      <Slide duration={1000} direction={'left'}>
      
    <h1>our services</h1>
    </Slide>

    <div className='ServiceContainer'>

      <div className='ServiceSlider' >
        <Slide>  
              <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
       
        modules={[EffectCoverflow,]}
        className="mySwiper"
      >
        
        <SwiperSlide>
        <div className='ServicesSlides ss1'>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss2'></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss3'></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss4'>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
        </div>
        </SwiperSlide>
        
       

        </Swiper>
        </Slide>

        </div>
        <div className='ServiceText'>
        < Fade cascade damping={0.4}>
      
      <h4>How we  can help you</h4>
      <p>We are dedicated to providing customized IT solutions that are specifically designed to meet the individual needs and goals of your business. By partnering with us, your Chicago-based company will witness a substantial increase in efficiency, empowering you to deliver exceptional service to your clients and ultimately enhance your bottom line.</p>
   <button className='btn'>Get a Quote</button>
 
 
 </Fade>
    
    </div>
        </div>
      
        </div>  
   
  
 
 
  )

}

export default Services