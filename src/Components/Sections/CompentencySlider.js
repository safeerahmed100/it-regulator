import React, {useState,useEffect } from 'react'
import './CSS/Services.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import {NavLink} from 'react-router-dom' 





function ServicesSlider({isHover,componentClass}) {
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
    <div className={`Services ${isHover===true? 'stacking': ''} ${componentClass}`}>
    <div className='ServiceContainer'>
    <div className='ServiceSlider' >
        
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={`${isSmallScreen===true? '1': '3'}`}
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
        className="mySwiper"> 

        {/* FOUR SLIDES */}
        <SwiperSlide>
        <div className='ServicesSlides ss9'>
          <div className='ServiceSlideOverlay'></div>
          <div className='ServiceSlideText'>
          <h2>Cloud Solution</h2>
          <p>You’ve probably heard of ‘the Cloud’ but if you’re not exactly sure what it means for you and your business, don’t worry, because we do! When you migrate your technology to the Cloud, you’re essentially transferring your technology and the way you use it on the Internet.</p>
          <NavLink to='./it-managed-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss10'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>IT Deployment</h2>
          <p>An integral part of our Project Management philosophy is the creation and management of detailed and workable project plans.</p>
          <NavLink to='/it-deployement-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss11'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Virtualization</h2>
          <p>ITRegulators’ virtualization solutions let business leaders and IT managers do more with less by centralizing administrative tasks, cutting costs, and improving scalability and workloads.</p>
          <NavLink to='/virtualization' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides ss12'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Online Marketing</h2>
          <p>ITRegulators have the online marketing expertise you need to ensure your goods, services or brand are creating more business for your company, not getting lost in a sea of mediocre websites.</p>
          <NavLink to='./it-consultancy-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
                {/* New FOUR SLIDES */}

                <SwiperSlide>
        <div className='ServicesSlides  ss13'>
          <div className='ServiceSlideOverlay'></div>
          <div className='ServiceSlideText'>
          <h2>IT Staffing</h2>
          <p>With our experts taking responsibility for IT recruitment functions, such as candidate sourcing, screening, tracking and interview scheduling, HR teams and hiring managers can focus on finding the best matches for their jobs and improving the quality of every hire.

</p>
          <NavLink to='/it-security-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides  ss14'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Office 365</h2>
          <p>Office 365 is a suite of cloud-based tools from Microsoft that are specifically designed to streamline work processes, help employees collaborate better, and boost productivity. With ITRegulators’ Office 365 offering, you’ll enjoy lower acquisition costs and reap the full benefits of the software.</p>
          <NavLink to='./email-spam-protection' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides  ss15'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>Computer Repair</h2>
          <p>We understand that when your computer is down, you want it fixed now! We are here to help you get over the hurdles of unpleasant and unwelcome computer surprises. When you enlist the professional services of ITRegulators, we get the job done OR you don’t owe us a dime.</p>
<NavLink to='./it-assessment-audit-services' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ServicesSlides  ss16'>
        <div className='ServiceSlideOverlay'></div>

        <div className='ServiceSlideText'>
          <h2>IT Emergency Support</h2>
          <p>Our experience in resolving IT issues for businesses of all sizes and industries has enabled us to develop thorough yet swift processes to find the root cause of your IT problems, fix it promptly and effectively, and recommend best practices to avoid such disruptions in the future.</p>
          <NavLink to='./security-systems' className='link'>Read More</NavLink> 

        </div>
        </div>
        </SwiperSlide>
       

        </Swiper>
       
        </div>  
        </div>  
        </div>  
   
  
 
 
  )

}

export default ServicesSlider