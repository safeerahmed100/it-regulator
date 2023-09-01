import React from 'react'
import AssessmentSlider from './AssessmentSlider'
import AssessmentImg1 from './CSS/Assets/AssessmenCont1.png'


function AssessmentInfo() {
  return (
    <div className='AssessmentInfo'>  
      <div className='NetworkContainer AssessmentInfoContainer NetworkCenterContainer'>
    <div className='NetworkServiceText'>
        <h3>Want to know just how effective, secure and future-proof your existing IT infrastructure really is?</h3>
       <h2>A comprehensive IT Assessment from ITRegulators will:</h2>
        <ul>
            <li>Address concerns related to the reliability of aging infrastructure</li>
            <li>Provide guidance on how to handle future growth and capacity issues</li>
            <li>Outline a plan to prioritize investments.</li>
            <p>The experts at ITRegulators will analyze the current state of your technology and prepareyour organization for future needs. This is the first step towards ensuring that your ITinfrastructure is properly designed to support your evolving business needs.</p>           
        </ul>
    
    </div>
    <div className='NetworkServiceImg'>
        <img src={AssessmentImg1} alt='NetworkService'/>
    </div>
    </div>
    
    <div className='AssessmentGap'><h2><span style={{borderBottom:'1px solid red'}}>Our 3-step </span>IT Assessment involves</h2>
    
    </div>

<AssessmentSlider/>
<div className='AssessmentContainer'>
<p>ITRegulators can then provide further IT consulting or IT support to assist in theimplementation of any recommended strategic Information Technology solutions.</p>
</div>
<div className='NetworkContainer  AssessmentInfoContainer NetworkCenterContainer'>
    <div className='NetworkServiceText'>
       <h2>At the conclusion of your IT Assessment you will receive:</h2>
        <ul>
            <li>A detailed report outlining the day-to-day activities of the IT department</li>
            <li>A network architecture diagram, illustrating the current IT environment, 
areas of vulnerability, and desktop computer profiles</li>
            <li>Recommendations on staffing plans</li>
            <li>A list of risks, concerns, and action items</li>           
        </ul>
    
    </div>
    <div className='NetworkServiceImg'>
        <img src={AssessmentImg1} alt='NetworkService'/>
    </div>
    </div>
    </div>


  )
}

export default AssessmentInfo