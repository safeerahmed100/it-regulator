import React, { useEffect, useState } from 'react';
import './CSS/Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay,Navigation} from 'swiper/modules';
import { Fade} from 'react-awesome-reveal';
import headerImg1 from './CSS/Assets/headerimg1.png'
import headerImg2 from './CSS/Assets/headerimg2.png'
import headerImg3 from './CSS/Assets/headerimg3.png'
import axios from 'axios';

function Header({isHover,setIsHover}) {
  const [isData,setIsData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://celebraldesign.com/itregulators/wp-json/wp/v2/posts/'
        );
        setIsData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Fetch data immediately when the component mounts
    fetchData();

    // Set up an interval to refresh the data every 10 minutes (600000 milliseconds)
    const interval = setInterval(() => {
      fetchData();
    }, 600000); // Adjust the interval time as needed

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []); // 

  console.log('post',isData)
  

  return (
    <div  className='HeaderSlider'>
       <Swiper
       slidesPerView={1}
        grabCursor={true}
        navigation={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction:true
        }}
        modules={[Autoplay,Navigation]}
        className={`mySwiper ${isHover===true? 'stacking': ''}`}
      >
      
      <SwiperSlide key='1' >
      < div className='Header'  >
      <div className='banner'  >
        <div className='headerText'>
          <Fade cascade damping={0.9}>
          <h1>YOUR ON <span style={{color:'#ff3939'}}>DEMAND</span></h1>
          <h1>VIRTUAL IT DEPARTMENT</h1>
          <button className='btn'>Contact Now</button>
          </Fade>
          </div>
          <Fade cascade damping={0.9}>
          <div className='headerImg'>
            <img src={headerImg1} alt='Laptop' className='animate-bounce' />
         <div className='headerImgBlur backdrop-blur-xl	'> </div>
          </div>
          </Fade>
      </div>
      </div>
      </SwiperSlide>

      <SwiperSlide key='2' >
      < div className='Header'  >
      <div className='banner'  >
        <div className='headerText'>
          <Fade cascade damping={0.9}>
          <h1>REMOTE ONSITE & </h1>
          <h1>EMERGENCY</h1>
          <h1><span style={{color:'#ff3939'}}>TECH SUPPORT</span></h1>
          <button className='btn'>Contact Now</button>
          </Fade>
          </div>
          <Fade cascade damping={0.9}>
          <div className='headerImg'>
            <img src={headerImg2} alt='person Sitting on char' className='animate-bounce' />
         <div className='headerImgBlur backdrop-blur-xl	'> </div>
          </div>
          </Fade>
      </div>
      </div>
      </SwiperSlide>

      <SwiperSlide key='3' >
      < div className='Header'  >
      <div className='banner'  >
        <div className='headerText'>
          <Fade cascade damping={0.9}>
          <h1>NEED IT <span style={{color:'#ff3939'}}>HELP</span></h1>
          <h1>NOW</h1>
          <h1>888-752-8981</h1>
          <button className='btn'>Contact Now</button>
          </Fade>
          </div>
          <Fade cascade damping={0.9}>
          <div className='headerImg'>
            <img src={headerImg3} alt="vector" className='animate-bounce' />
         <div className='headerImgBlur backdrop-blur-xl	'> </div>
          </div>
          </Fade>
      </div>
      </div>
      </SwiperSlide>
 
 </Swiper>


 </div>
  )
}
export default Header