import React, { useState } from 'react'
import '../Sections/CSS/Faqs.css'
function Faqs() {
    const [isShow,setIsShow]=useState(false)
    const [isShow1,setIsShow1]=useState(false)
    const [isShow2,setIsShow2]=useState(false)
    const [isShow3,setIsShow3]=useState(false)
    const [isShow4,setIsShow4]=useState(false)
    const [isShow5,setIsShow5]=useState(false)
    const [isShow6,setIsShow6]=useState(false)

  return (
    
    <div className='FaqsContainer'>
        <div className='FaqItems'>
        <div className='Question'>
        <i className="fa-regular fa-file"></i>
            <h6>what are managed IT services?</h6>
            <i className={`fa-solid fa-plus ${isShow===true?'fa-solid fa-minus': 'fa-solid fa-plus'} `}onClick={()=>setIsShow(!isShow)}></i>
        </div>
        <div className={`Answer ${isShow===true? 'DisplayAnswer': 'Answer'}`}>
        <i className="fa-solid fa-a"></i>
        <p>For over a decade, we have been providing exceptional managed IT services and other technology solutions to businesses across Illinois, including Naperville. Our team consists of passionate, driven, and dedicated professionals who are committed to delivering quality services and solutions to our clients. Our unwavering commitment to meeting our clients’ needs and achieving their objectives is reflected in our high-value offerings. Beyond being a top-notch IT provider, ITRegulators is also a proud veteran-owned business that offers opportunities to veterans following their military service.</p>
        </div>
        
        </div>
        <div className='FaqItems'>
        <div className='Question'>
        <i className="fa-regular fa-file"></i>
            <h6>should small businesses be outsourcing their IT management?</h6>
            <i className={`fa-solid fa-plus ${isShow1===true?'fa-solid fa-minus': 'fa-solid fa-plus'} `}onClick={()=>setIsShow1(!isShow1)}></i>
            </div>
            <div className={`Answer ${isShow1===true? 'DisplayAnswer': 'Answer'}`}>
<i className="fa-solid fa-a"></i>
<p>For over a decade, we have been providing exceptional managed IT services and other technology solutions to businesses across Illinois, including Naperville. Our team consists of passionate, driven, and dedicated professionals who are committed to delivering quality services and solutions to our clients. Our unwavering commitment to meeting our clients’ needs and achieving their objectives is reflected in our high-value offerings. Beyond being a top-notch IT provider, ITRegulators is also a proud veteran-owned business that offers opportunities to veterans following their military service.</p>
</div>    
        </div>
        <div className='FaqItems'>
        <div className='Question'>
        <i className="fa-regular fa-file"></i>
            <h6>what if my technology is currently working fine?</h6>
            <i className={`fa-solid fa-plus ${isShow2===true?'fa-solid fa-minus': 'fa-solid fa-plus'} `}onClick={()=>setIsShow2(!isShow2)}></i>

        </div>
        <div className={`Answer ${isShow2===true? 'DisplayAnswer': 'Answer'}`}>

        <i className="fa-solid fa-a"></i>
        <p>For over a decade, we have been providing exceptional managed IT services and other technology solutions to businesses across Illinois, including Naperville. Our team consists of passionate, driven, and dedicated professionals who are committed to delivering quality services and solutions to our clients. Our unwavering commitment to meeting our clients’ needs and achieving their objectives is reflected in our high-value offerings. Beyond being a top-notch IT provider, ITRegulators is also a proud veteran-owned business that offers opportunities to veterans following their military service.</p>
        </div>
        </div>
        <div className='FaqItems'>
        <div className='Question'>
        <i className="fa-regular fa-file"></i>
            <h6>what's included in your managed IT services package?</h6>
            <i className={`fa-solid fa-plus ${isShow3===true?'fa-solid fa-minus': 'fa-solid fa-plus'} `}onClick={()=>setIsShow3(!isShow3)}></i>

        </div>
        <div className={`Answer ${isShow3===true? 'DisplayAnswer': 'Answer'}`}>

        <i className="fa-solid fa-a"></i>
        <p>For over a decade, we have been providing exceptional managed IT services and other technology solutions to businesses across Illinois, including Naperville. Our team consists of passionate, driven, and dedicated professionals who are committed to delivering quality services and solutions to our clients. Our unwavering commitment to meeting our clients’ needs and achieving their objectives is reflected in our high-value offerings. Beyond being a top-notch IT provider, ITRegulators is also a proud veteran-owned business that offers opportunities to veterans following their military service.</p>
        </div>
        </div>
        <div className='FaqItems'>
        <div className='Question'>
        <i className="fa-regular fa-file"></i>
            <h6>Do you offer backup services</h6>
            <i className={`fa-solid fa-plus ${isShow4===true?'fa-solid fa-minus': 'fa-solid fa-plus'} `}onClick={()=>setIsShow4(!isShow4)}></i>

        </div>
        <div className={`Answer ${isShow4===true? 'DisplayAnswer': 'Answer'}`}>

      <i className="fa-solid fa-a"></i>
        <p>For over a decade, we have been providing exceptional managed IT services and other technology solutions to businesses across Illinois, including Naperville. Our team consists of passionate, driven, and dedicated professionals who are committed to delivering quality services and solutions to our clients. Our unwavering commitment to meeting our clients’ needs and achieving their objectives is reflected in our high-value offerings. Beyond being a top-notch IT provider, ITRegulators is also a proud veteran-owned business that offers opportunities to veterans following their military service.</p>
        </div>
        </div>
        <div className='FaqItems'>
        <div className='Question'>
        <i className="fa-regular fa-file"></i>
            <h6>What if I already have internal IT staff?</h6>
            <i className={`fa-solid fa-plus ${isShow5===true?'fa-solid fa-minus': 'fa-solid fa-plus'} `}onClick={()=>setIsShow5(!isShow5)}></i>

        </div>
        <div className={`Answer ${isShow5===true? 'DisplayAnswer': 'Answer'}`}>

        <i className="fa-solid fa-a"></i>
        <p>For over a decade, we have been providing exceptional managed IT services and other technology solutions to businesses across Illinois, including Naperville. Our team consists of passionate, driven, and dedicated professionals who are committed to delivering quality services and solutions to our clients. Our unwavering commitment to meeting our clients’ needs and achieving their objectives is reflected in our high-value offerings. Beyond being a top-notch IT provider, ITRegulators is also a proud veteran-owned business that offers opportunities to veterans following their military service.</p>
        </div>
        </div>
        <div className='FaqItems'>
        <div className='Question'>
        <i className="fa-regular fa-file"></i>
            <h6>How dose 24/7 monitoring and your services desk help my business?</h6>
            <i className={`fa-solid fa-plus ${isShow6===true?'fa-solid fa-minus': 'fa-solid fa-plus'} `}onClick={()=>setIsShow6(!isShow6)}></i>

        </div>
        <div className={`Answer ${isShow5===true? 'DisplayAnswer': 'Answer'}`}>

        <i className="fa-solid fa-a"></i>
        <p>For over a decade, we have been providing exceptional managed IT services and other technology solutions to businesses across Illinois, including Naperville. Our team consists of passionate, driven, and dedicated professionals who are committed to delivering quality services and solutions to our clients. Our unwavering commitment to meeting our clients’ needs and achieving their objectives is reflected in our high-value offerings. Beyond being a top-notch IT provider, ITRegulators is also a proud veteran-owned business that offers opportunities to veterans following their military service.</p>
        </div>
        </div>

    </div>
  )
}

export default Faqs