import React from 'react'
import './css/Services.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow,Pagination } from 'swiper/modules';



function Services() {
  return (
   
      
    <div className='Services'>
    <h1>our services</h1>

    <div className='ServiceContainer'>

      <div className='ServiceSlider' >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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
        <div className='ServicesSlides ss1'>
          <p>We proactively monitor and support your network 24/7, keeping your systems available and your people productive.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss3'></div>
        </SwiperSlide>

        </Swiper>
        </div>
        <div className='ServiceText'>
      
      <h4>How we  can help you</h4>
      <p>We are dedicated to providing customized IT solutions that are specifically designed to meet the individual needs and goals of your business. By partnering with us, your Chicago-based company will witness a substantial increase in efficiency, empowering you to deliver exceptional service to your clients and ultimately enhance your bottom line.</p>
   <button className='btn'>Get a Quote</button>
 
    
    </div>
        </div>

        </div>  
   
  
 
 
  )

}

export default Services