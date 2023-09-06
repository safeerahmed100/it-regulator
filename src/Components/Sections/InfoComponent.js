import React from 'react'
import './CSS/InfoComponent.css'
import {  Slide } from 'react-awesome-reveal'
import Typewriter from 'typewriter-effect'


function InfoComponent({heading,
  listHeading,
  listText,
  listHeading1,
  listText1,
  listHeading2,
  listText2,
  listHeading3,
  listText3,

  blueText,
  boldpara,
  subHeading,
  paraText,
  paraTwo,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem1Para,
  listItem2Para,
  listItem3Para,
  listPara,
  componentClass,
  buttonText,
  boldHeading,
  componentImage}) {
  return (

    <div className={`InfoComponent ${componentClass || ''}`}>
           
        <div className='InfoText'>
        <Slide>
            {subHeading &&  <h2>{subHeading}</h2>}
             
             {heading &&<h3><Typewriter
  options={{
    strings: [`${heading}`],
    autoStart: true,
    loop:true,
    pauseFor:500000  
  }}
/></h3>} 
{heading && <hr></hr>
}
            {paraText && <p>{paraText}</p>}  
             { paraTwo && <p>{paraTwo}</p> }
             {boldpara && <p className='boldpara'>{boldpara}</p>}
          <ul>
          {listItem1 &&<li>{listItem1}</li>}
          {listItem1Para && <p>{listItem1Para}</p>}
          {listItem2 &&<li>{listItem2}</li>}
          {listItem2Para && <p>{listItem2Para}</p>}
          {listItem3 &&<li>{listItem3}</li>}
          {listItem3Para && <p>{listItem3Para}</p>}
          {listItem4 &&<li>{listItem4}</li>}
          {listItem5 &&<li>{listItem5}</li>}
          {listPara && <p>{listPara}</p> }
          {listHeading && listText && <li className='spanText'><span className='headingSpan'>{listHeading}</span>{listText}</li>}
          {listHeading1 && listText1 && <li className='spanText'><span className='headingSpan'>{listHeading1}</span>{listText1}</li>}
          {listHeading2 && listText2 && <li className='spanText'><span className='headingSpan'>{listHeading2}</span>{listText2}</li>}
          {listHeading3 && listText3 && <li className='spanText'><span className='headingSpan'>{listHeading3}</span>{listText3}</li>}


            </ul>
            {boldHeading && <span>{boldHeading}</span>} 
          {blueText &&<h6>{blueText}</h6>}  
           {buttonText&& <button>{buttonText}</button>}
            </Slide>
        </div>
        <div className='InfoImage'>
        <Slide direction='right'>
            <img src={componentImage} alt='Backg'/>
            </Slide>
        </div>
    </div>
  )
}
export default InfoComponent