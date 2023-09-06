import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import Img1 from '../Sections/CSS/Assets/HelpDeskGuy.png'



function HelpDesk() {
  return (
    <div>
        < HeaderComponent componentClass='HelpDeskHeader' highlightedText='IT' Text=' Help Desk'/>
      <InfoComponent 
        heading='An outsourced IT Help Desk solution for any organization'
        paraText='ITRegulators offer comprehensive outsourced IT help desk services to customers who require a full service technical resource center, full or part-time help desk, application support center, or customer service desk. No matter what type of help desk functions you need to outsource, we can provide you with a complete and custom turnkey solution.'
        paraTwo='Our outsourced IT help desk solutions allow your organization to benefit from the most highly qualified and certified technical staff anywhere – without having to worry about recruiting, training, fulfillment and other costly and time consuming tasks.'
        componentImage={Img1}
        />
        </div>
  )
}

export default HelpDesk