import React from 'react'
import './CSS/HeaderComponent.css'
import { Fade} from 'react-awesome-reveal';
function HeaderComponent({componentClass,highlightedText,Text,headerCategory,headerDate}) {
  return (
    <div className={`HeaderComponent ${componentClass}`}>    
      <Fade cascade damping={0.9}>
      
        <div className='headerText'>   
        {headerCategory && <span>{headerCategory}</span>}
          <h1><span style={{color:'#ff3939'}}>{highlightedText}</span>{Text}</h1>   
          {headerDate && <span>{headerDate}</span>}  
          </div>      
     
      </Fade>  
      </div>    
  )
}
export default HeaderComponent