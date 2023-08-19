import React from 'react'
import './css/Services.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Services() {
  return (
   
      <div className='Services'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      ></Swiper>


    <h1>our services</h1>
    

   
 

    <div className='ServiceText'>
      
      <h4>How we  can help you</h4>
      <p>We are dedicated to providing customized IT solutions that are specifically designed to meet the individual needs and goals of your business. By partnering with us, your Chicago-based company will witness a substantial increase in efficiency, empowering you to deliver exceptional service to your clients and ultimately enhance your bottom line.</p>
   <button className='btn'>Get a Quote</button>
    </div>
    </div>
  )
}

export default Services