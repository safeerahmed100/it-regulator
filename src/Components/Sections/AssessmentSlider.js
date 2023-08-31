import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AssessmentSliderImg from './CSS/Assets/AssementSlider.png'
import AssessmentSliderImg1 from './CSS/Assets/AssessmentSlider1.png'
import AssessmentSliderImg2 from './CSS/Assets/AssessmentSlider2.png'

import { Autoplay, Pagination } from 'swiper/modules';

function AssessmentSlider() {
  return (
    <div className='AssessmentSlider'> 
       <Swiper
        slidesPerView={1}
        grabCursor={true}
        navigation={false}
        pagination={{
            clickable:true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
<SwiperSlide>
<div className='AssessmentSliderContainer'>
    <div className='AssessmentSliderImg'>
    <img src={AssessmentSliderImg} alt='some' />
    </div>
    <div className='AssessmentSliderText'>
      <h1>01</h1>
    <p>By leveraging our expertise with industry best practices we conduct a thorough assessment of your existing IT infrastructure and evaluate the current state of your technology, including hardware, line-of-business applications, and software vendors. We pinpoint gaps and weaknesses and provide recommendations for infrastructure improvement.</p>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className='AssessmentSliderContainer'>
    <div className='AssessmentSliderImg'>
    <img src={AssessmentSliderImg1} alt='some'/>
    </div>
    <div className='AssessmentSliderText'>
    <h1>02</h1>

        <p>Our IT Assessment starts with a complete Systems Health Check designed to uncover existing and potential performance issues. Staff skills or certifications, insufficient use of resources, and basic Information Technology security issues are addressed.</p>
</div>
</div>
</SwiperSlide>


<SwiperSlide>
<div className='AssessmentSliderContainer'>
    <div className='AssessmentSliderImg'>
    <img src={AssessmentSliderImg2} alt='some'/>
    </div>
    <div className='AssessmentSliderText'>
    <h1>03</h1>

        <p>The next step is an in-depth Network Security Assessment, which includes penetration testing and vulnerability assessments. At this stage in the IT Assessment, our consultants thoroughly analyze your applications in order to isolate and prioritize any weaknesses or threats. We identify potential risks to your business, and develop a plan of action to protect your IT infrastructure.</p>
</div>
</div>
</SwiperSlide>


      </Swiper>
    
    </div>

  )
}

export default AssessmentSlider