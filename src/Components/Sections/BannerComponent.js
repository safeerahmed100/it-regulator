import React from 'react'
import './CSS/BannerComponent.css'

function BannerComponent({BannerBtn,BannerHeading,BannerPara,componentClass}) {
  return (
    <div className={`BannerContainer ${componentClass || ''}`}>
       {BannerHeading && <h5>{BannerHeading}</h5>} 
       {BannerPara && <p>{BannerPara}</p>} 
        {BannerBtn &&<button>{BannerBtn}</button>}
    </div>
  )
}

export default BannerComponent