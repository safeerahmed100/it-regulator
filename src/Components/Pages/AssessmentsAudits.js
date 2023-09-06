import React from 'react'
import '../Sections/CSS/Assessment.css'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/AssessmentImg1.png'
import Img2 from '../Sections/CSS/Assets/AssessmentCont1.png'
import AssessmentSlider from '../Sections/AssessmentSlider'
function AssessmentsAudits() {
  return (
    <div>

<HeaderComponent componentClass='AssessmentHeader' highlightedText='IT Assessments' Text=' & Audits'/>
<InfoComponent 
subHeading='Want to know just how effective, secure and future-proof your existing IT infrastructure really is?'
  heading='A comprehensive IT Assessment from ITRegulators will:'
  listItem1='Address concerns related to the reliability of aging infrastructure'
  listItem2='Provide guidance on how to handle future growth and capacity issues'
  listItem3='Outline a plan to prioritize investments.'
  listPara='The experts at ITRegulators will analyze the current state of your technology and prepareyour organization for future needs. This is the first step towards ensuring that your ITinfrastructure is properly designed to support your evolving business needs.'
  componentImage={Img1}
 />
 <AssessmentSlider/>
 <InfoComponent 
  heading='At the conclusion of your IT Assessment you will receive:'
  listItem1='A detailed report outlining the day-to-day activities of the IT department'
  listItem2='A network architecture diagram, illustrating the current IT environment, 
  areas of vulnerability, and desktop computer profiles'
  listItem3='Recommendations on staffing plans'
  listItem4='A list of risks, concerns, and action items'
  componentImage={Img2}
 />
   </div>
  )
}

export default AssessmentsAudits