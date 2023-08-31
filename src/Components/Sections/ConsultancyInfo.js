import React from 'react'
import Img1 from './CSS/Assets/Consultancy1.png'
import Img2 from './CSS/Assets/Consultancy2.png'
import Img3 from './CSS/Assets/Consultancy3.png'
import Img4 from './CSS/Assets/Consultancy4.png'
import Img5 from './CSS/Assets/Consultancy5.png'

function ConsultancyInfo() {
  return (
    <div className='ConsultancyInfo'>
    <div className='ConsultancyContainer Container1'>
    <div className='NetworkServiceText'>
        <h2>ITRegulators offers customized IT support service</h2>
        <p>agreements to suit the unique needs and demands of varied working environments. Bundled service agreements include a comprehensive offering of services, and can be created to effectively and efficiently manage the unique day-to-day maintenance demands of your systems</p>
    </div>
    <div className='NetworkServiceImg'>
        <img src={Img1} alt='NetworkService'/>
    </div>
    </div>
    <div className='ConsultancyContainer '>
    <div className='NetworkServiceImg'>
        <img src={Img2} alt='NetworkService'/>
    </div>
    <div className='NetworkServiceText'>
        <h2>ITRegulators offers customized IT support service</h2>
        <p>agreements to suit the unique needs and demands of varied working environments. Bundled service agreements include a comprehensive offering of services, and can be created to effectively and efficiently manage the unique day-to-day maintenance demands of your systems</p>
    </div>
   
    </div>
    <div className='ConsultancyContainer Container2'>
    <div className='NetworkServiceText'>
        <h2>ITRegulators offers customized IT support service</h2>
        <p>agreements to suit the unique needs and demands of varied working environments. Bundled service agreements include a comprehensive offering of services, and can be created to effectively and efficiently manage the unique day-to-day maintenance demands of your systems</p>
    </div>
    <div className='NetworkServiceImg'>
        <img src={Img3} alt='NetworkService'/>
    </div>
    </div>
    <div className='ConsultancyContainer'>
    <div className='NetworkServiceImg'>
        <img src={Img4} alt='NetworkService'/>
    </div>
    <div className='NetworkServiceText'>
        <h2>ITRegulators offers customized IT support service</h2>
        <p>agreements to suit the unique needs and demands of varied working environments. Bundled service agreements include a comprehensive offering of services, and can be created to effectively and efficiently manage the unique day-to-day maintenance demands of your systems</p>
    </div>
   
    </div>
    <div className='ConsultancyContainer Container3'>
    <div className='NetworkServiceText'>
        <h2>ITRegulators offers customized IT support service</h2>
        <p>agreements to suit the unique needs and demands of varied working environments. Bundled service agreements include a comprehensive offering of services, and can be created to effectively and efficiently manage the unique day-to-day maintenance demands of your systems</p>
    </div>
    <div className='NetworkServiceImg'>
        <img src={Img5} alt='NetworkService'/>
    </div>
    </div>
    
        </div>
  )
}

export default ConsultancyInfo