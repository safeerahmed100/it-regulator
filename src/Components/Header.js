import React from 'react';
import './css/Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import content from './HeaderSlider';


function Header() {
  return (

    <div className='Header'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
      
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      ></Swiper>
    {content.map((content)=>(
<SwiperSlide key={content.id}>
      <div className='banner'>
        <div className='headerText'>
          <h1><span style={{color:'#509BF4'}}>{content.textspan}</span> {content.textspan2}</h1>
          <h1>{content.text}</h1>
          <button className='btn'>Get a Quote</button>
          </div>
          <div className='headerImg'>
            <div className='headerImgBlur'>
            <img src={content.pic} alt={content.id} />
          </div>
          </div>

      </div>
      </SwiperSlide>
    ))}
 <div className='headerOverlay'></div>
    </div>
  )
}

export default Header