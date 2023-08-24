import React from 'react';
import './CSS/Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import content from './HeaderSlider';
import { EffectCreative,Navigation} from 'swiper/modules';
import { Fade} from 'react-awesome-reveal';

function Header() {
  return (
       <Swiper
       slidesPerView={'auto'}
        grabCursor={true}
        effect={'creative'}
        navigation={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative,Navigation]}
        className="mySwiper"
      >
      {content.map((content)=>(
      <SwiperSlide key={content.id} >
      < div className='Header'  >
      <div className='HeaderBlur' ></div>
      <div className='banner'  >
        <div className='headerText'>
          <Fade cascade damping={0.9}>
          <h1><span style={{color:'#509BF4'}}>{content.textspan}</span> {content.textspan2}</h1>
          <h1>{content.text}</h1>
          <button className='btn'>Get a Quote</button>
          </Fade>
          </div>
          <Fade cascade damping={0.9}>
          <div className='headerImg'>
            <img src={content.pic} alt={content.id} className='animate-bounce' />
         <div className='headerImgBlur backdrop-blur-xl	'> </div>
          </div>
          </Fade>
      </div>
      </div>
         </SwiperSlide>
    ))}
 </Swiper>
  )
}
export default Header