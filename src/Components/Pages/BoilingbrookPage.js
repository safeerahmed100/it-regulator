import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import ServicesSlider from '../Sections/ServicesSlider'
import Testimonials from '../Sections/Testimonials'
import Faqs from '../Sections/Faqs'
import BannerComponent from '../Sections/BannerComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/BoilingbrookImg.png'
import Img2 from '../Sections/CSS/Assets/ChicagoImg1.png'



function BoilingbrookPage() {
  return (  
    <div>
        <HeaderComponent componentClass='BoilingbrookHeader' highlightedText='IT SERVICES ' Text='Boilingbrook'/>
        <InfoComponent heading='Our mission is to ensure that your IT is efficient and dependable'
        paraText='Are you encountering difficulties in streamlining and optimizing your IT systems? This is a common problem, especially if your IT infrastructure was assembled piecemeal and is powered by different brands and vendors. Large enterprises deal with this by hiring a certified and highly experienced IT team to accurately assess the state of their business’s IT systems. However, for SMBs like yours, this may not be feasible due to limited resources, as hiring extra IT staff could hurt your budget and your plans. Luckily, there is a solution available to you. Instead of hiring more IT staff, partner with ITRegulators today to benefit from comprehensive technical support and assistance, as well as optimized IT that promotes growth and scalability.We offer a broad range of technology solutions, including IT consulting, cloud solutions, cybersecurity, and disaster recovery, to support your business goals. We provide both co-managed and fully managed IT setups tailored to your unique business requirements. Contact us today to schedule an appointment. Our friendly IT experts are always available to help simplify your IT so you can focus on growing your business.'
        componentImage={Img1}
        />
       <InfoComponent heading='Why choose ITRegulators?'
       componentImage={Img2}
       paraText='For over a decade, we have been providing exceptional managed IT services and other technology solutions to businesses across Illinois, including Chicago. Our team consists of passionate, driven, and dedicated professionals who are committed to delivering quality services and solutions to our clients. Our unwavering commitment to meeting our clients’ needs and achieving their objectives is reflected in our high-value offerings. Beyond being a top-notch IT provider, ITRegulators is also a proud veteran-owned business that offers opportunities to veterans following their military service.'/>
        <ServicesSlider/>
        <Testimonials/>
        <Faqs/>
        <BannerComponent componentClass='ChicagoBanner' BannerPara='Find out how ITRegulators can assist your Chicago organization by developing a tailored IT strategy that satisfies your budget and needs'
        BannerBtn='Schedule an appointment'/>
    </div>
  )
}

export default BoilingbrookPage