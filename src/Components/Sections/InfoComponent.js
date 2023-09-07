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
  listHeadingBold,
  listHeadingBold1,
  listHeadingBold2,
  listHeadingBold3,
  listHeadingBold4,
  listHeadingBold5,
  listHeadingBold6,
  blueText,
  boldpara,
  subHeading,
  paraText,
  paraThree,
  paraTwo,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem1Para,
  bluePara,
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
             {bluePara && <p style={{color:'#509BF4',fontSize:'25px',fontWeight:'600'}}>{bluePara}</p>}
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
          {listHeadingBold && <li className='spanText'><span className='headingSpan'>{listHeadingBold}</span></li>}
          {listHeadingBold1 && <li className='spanText'><span className='headingSpan'>{listHeadingBold1}</span></li>}
          {listHeadingBold2 && <li className='spanText'><span className='headingSpan'>{listHeadingBold2}</span></li>}
          {listHeadingBold3 && <li className='spanText'><span className='headingSpan'>{listHeadingBold3}</span></li>}
          {listHeadingBold4 && <li className='spanText'><span className='headingSpan'>{listHeadingBold4}</span></li>}
          {listHeadingBold5 && <li className='spanText'><span className='headingSpan'>{listHeadingBold5}</span></li>}
          {listHeadingBold6 && <li className='spanText'><span className='headingSpan'>{listHeadingBold6}</span></li>}
          </ul>
          { paraThree && <p>{paraThree}</p> }
          {boldHeading && <span>{boldHeading}</span>} 
          {blueText &&<h6>{blueText}</h6>}  
          {buttonText&& <button>{buttonText}</button>}
          </Slide>
        </div>
        <div className='InfoImage'>
        <Slide direction='right'>
            {componentImage && <img src={componentImage} alt='Backg'/>}
            </Slide>
        </div>
    </div>
  )
}
export default InfoComponent