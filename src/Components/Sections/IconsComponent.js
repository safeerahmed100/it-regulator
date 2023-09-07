import React from 'react'
import './CSS/IconsComponent.css'

function IconsComponent({
    heading,
    classComponent,
    iconClass,iconText,
    iconClass1,iconText1,
    iconClass2,iconText2,
    iconClass3,iconText3,
    iconClass4,iconText4,
    iconClass5,iconText5,
    iconClass6,iconText6,
    iconClass7,iconText7,
    iconClass8,iconText8,
    iconClass9,iconText9,
    iconClass10,iconText10,
}
) {
  return (
    <div className='IconsComponent'>
       {heading && <h4>{heading}</h4>}
<div className={`Icons ${classComponent || ''}`}>
    <div className='IconsItem'>
    {iconClass && <i className={`fa-solid ${iconClass}`}></i>}
    {iconText && <span>{iconText}</span> } 
        </div>
      
        <div className='IconsItem'>
    {iconClass1 && <i className={`fa-solid ${iconClass1}`}></i>}
    {iconText1 && <span>{iconText1}</span> } 
        </div>
    
        <div className='IconsItem'>
    {iconClass2 && <i className={`fa-solid ${iconClass2}`}></i>}
    {iconText2 && <span>{iconText2}</span> } 
        </div>
     
        <div className='IconsItem'>
    {iconClass3 && <i className={`fa-solid ${iconClass3}`}></i>}
    {iconText3 && <span>{iconText3}</span> } 
        </div>
      
        <div className='IconsItem'>
    {iconClass4 && <i className={`fa-solid ${iconClass4}`}></i>}
    {iconText4 && <span>{iconText4}</span> } 
        </div>

        <div className='IconsItem'>
    {iconClass5 && <i className={`fa-solid ${iconClass5}`}></i>}
    {iconText5 && <span>{iconText5}</span> } 
        </div>
       
        <div className='IconsItem'>
    {iconClass6 && <i className={`fa-solid ${iconClass6}`}></i>}
    {iconText6 && <span>{iconText6}</span> } 
        </div>
  
        <div className='IconsItem'>
    {iconClass7 && <i className={`fa-solid ${iconClass7}`}></i>}
    {iconText7 && <span>{iconText7}</span> } 
        </div>
      
        <div className='IconsItem'>
    {iconClass8 && <i className={`fa-solid ${iconClass8}`}></i>}
    {iconText8 && <span>{iconText8}</span> } 
        </div>
        <div className='IconsItem'>
    {iconClass9 && <i className={`fa-solid ${iconClass9}`}></i>}
    {iconText9 && <span>{iconText9}</span> } 
        </div>
      
        <div className='IconsItem'>
    {iconClass10 && <i className={`fa-solid ${iconClass10}`}></i>}
    {iconText10 && <span>{iconText10}</span> } 
        </div>
    </div>
</div>

   
  )
}

export default IconsComponent