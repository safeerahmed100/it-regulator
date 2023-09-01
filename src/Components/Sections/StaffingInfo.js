import React from 'react'
import Img1 from './CSS/Assets/Staffing1.png'
import Img2 from './CSS/Assets/Staffing2.png'
import Img3 from './CSS/Assets/Staffing3.png'
import Img4 from './CSS/Assets/Staffing4.png'
import Img5 from './CSS/Assets/Staffing5.png'

function ConsultancyInfo() {
  return (
    <div className='ConsultancyInfo'>
    <div className='ConsultancyContainer StaffingCont1 '>
    <div className='NetworkServiceText'>
        <h2>Short-term, long-term, and permanent placement of certified IT professionals</h2>
        <hr/>
        <p>ITRegulators offer targeted, outsourced recruiting and staffing solutions that give your business the time and resources to focus on key hiring initiatives and decisions while accelerating the overall recruitment processes.
With our experts taking responsibility for IT recruitment functions, such as candidate sourcing, screening, tracking and interview scheduling, HR teams and hiring managers can focus on finding the best matches for their jobs and improving the quality of every hire.</p>
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
        <h2>Contract</h2>
        <hr/>
        <p>You have an important job to do but not the people to do it. ITRegulators can provide the staff that you need for that critical project. If your project is short term it may not justify adding additional permanent staff but if the additional load is going to be too much for existing employees, our high-quality talent will fill both your needs. We can provide long-term contract staff too.</p>
    </div>
   
    </div>
    <div className='ConsultancyContainer StaffingCont2 Container2'>
    <div className='NetworkServiceText'>
        <h2>Temp to hire</h2>
        <hr/>
        <p>Hiring new people is always a risk. Are they really the right person you were looking for to fill that important position within your organization? Are they a team player? Do they perform as professionally as they appeared during the interview stage? Hiring new people can be a guessing game and all you can do is hope you made the right guess. Let ITRegulators take the guesswork out of bringing in new people.
Taking the temporary-to-hire placement path lets you try out an employee before committing to permanently placing them on your payroll. If you bring in one of our personnel and wish to hire them for a full-time position suitable arrangement can be made. With ITRegulators, you do not have to worry about getting the right people – you simply know you will.</p>
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
        <h2>Permanent</h2>
        <hr/>
        <p>The experienced professionals at ITRegulators are the superior source for the technical personnel you need. After making sure we have a clear understanding of the position’s requirements we will conduct an extensive search for the perfect person for the job. We select only the best people for placement within your organization: many are reviewed but few are chosen. Our commitment to quality has helped us stay ahead of the competition. It is not important to us to be among the biggest in the staffing industry, just among the best.</p>
    </div>
   
    </div>
    <div className='ConsultancyContainer StaffingCont3 Container3'>
    <div className='NetworkServiceText'>
        <h2>Emergency</h2>
        <hr/>
        <p>The unexpected occurs all too often. Maybe a key employee leaves the firm without notice, an unexpected injury happens, or you took receipt of a huge order and need more people immediately to fill it on time. Whatever your requirements, ITRegulators can help you meet your deadline.</p>
    </div>
    <div className='NetworkServiceImg'>
        <img src={Img5} alt='NetworkService'/>
    </div>
    </div>
    <div className='ConsultancyContainer '>
    <div className='NetworkServiceImg'>
        <img src={Img1} alt='NetworkService'/>
    </div>
    <div className='NetworkServiceText'>
        <h2>IT/MIS Department Staffing/Builder</h2>
        <hr/>
        <p>If your company does not have an IT/MIS department but needs one fast, we’ll build it. If your company’s IT/MIS department is not in line with your organization’s directions or goals, we can manage it. Are you at the mercy of your IT/MIS department – for example, knowledge management, no documentation, afraid to let someone go etc.…?</p>
        <span style={{color:'#509BF4'
}}>Talk to ITRegulators – we can help.</span><br/>
<button className='btn'>Need Staff? Lets Talk</button>
    </div>

    
    </div>
    
    
    
        </div>
  )
}

export default ConsultancyInfo