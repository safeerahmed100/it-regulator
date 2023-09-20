import React,{useState,useEffect} from 'react'
import './CSS/Testimonials.css'
import { Slide } from 'react-awesome-reveal'
import Typewriter from 'typewriter-effect'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Img1 from '../Sections/CSS/Assets/TestimonialImg1.png'
import { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';


function Testimonials() {
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
    
    <div className='Testimonials'>
      
      <Slide duration={1000}>
    <h1><Typewriter
  options={{
    strings: ["What Our Clients Say About Us"],
    autoStart: true,
    loop: true,
    pauseFor:500000
  }}
/></h1>
    </Slide>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={`${isSmallScreen===true?'1':'3'}`}
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
        
        className="mySwiper"
      >
        <SwiperSlide>
    <div className='TestimonialCard'>
   <div className='TestimonialImg'><img src={Img1} alt='Our Client Name Kimi Ellen'/></div>
  <div className='TestimonialInfo'>
  <h5>Kimi Ellen</h5>
      <p>CPA Partner, Benford Brown & Associates</p> </div>
    <div className='TestimonialText'>
    <h6>It was a very good experience</h6>
    <p>We have been using the services of IT Regulators for about four years now, and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…
</p></div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='TestimonialCard'>
   <div className='TestimonialImg'><img src={Img1} alt='Our Client Name Kimi Ellen'/></div>
  <div className='TestimonialInfo'>
  <h5>Kimi Ellen</h5>
      <p>CPA Partner, Benford Brown & Associates</p> </div>
    <div className='TestimonialText'>
    <h6>It was a very good experience</h6>
    <p>We have been using the services of IT Regulators for about four years now, and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…
</p></div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='TestimonialCard'>
   <div className='TestimonialImg'><img src={Img1} alt='Our Client Name Kimi Ellen'/></div>
  <div className='TestimonialInfo'>
  <h5>Kimi Ellen</h5>
      <p>CPA Partner, Benford Brown & Associates</p> </div>
    <div className='TestimonialText'>
    <h6>It was a very good experience</h6>
    <p>We have been using the services of IT Regulators for about four years now, and it’s like we have our own internal IT department… YES WE RECOMMEND THESE GUYS…
</p></div>
    </div>
    </SwiperSlide>
    </Swiper>
    </div>
  )
  
  }

export default Testimonials