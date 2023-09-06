import React from 'react'
import './CSS/HeaderComponent.css'
import { Fade} from 'react-awesome-reveal';
function HeaderComponent({componentClass,highlightedText,Text}) {
  return (
    <div className={`HeaderComponent ${componentClass}`}>    
      <Fade cascade damping={0.9}>
      <div className='banner'  >
        <div className='headerText'>   
          <h1><span style={{color:'#ff3939'}}>{highlightedText}</span>{Text}</h1>     
          </div>      
      </div>
      </Fade>  
      </div>    
  )
}
export default HeaderComponent