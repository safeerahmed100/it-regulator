import React from 'react';
import './css/Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import content from './HeaderSlider';
import { EffectCreative} from 'swiper/modules';

function Header() {
  return (
    
       <Swiper
        grabCursor={true}
        effect={'creative'}
        
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
    {content.map((content)=>(
      
<SwiperSlide key={content.id} >
< div className='Header'  >
      <div className='banner'  >
        <div className='headerText'>
          <h1><span style={{color:'#509BF4'}}>{content.textspan}</span> {content.textspan2}</h1>
          <h1>{content.text}</h1>
          <button className='btn'>Get a Quote</button>
          </div>
          <div className='headerImg'>
            
            <img src={content.pic} alt={content.id} className='animate-bounce' />
         <div className='headerImgBlur'> </div>
          </div>

      </div>
      </div>
         </SwiperSlide>
    ))}
  
 </Swiper>



  )
}

export default Header