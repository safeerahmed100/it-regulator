import React from 'react'
import DeploymentHeader from '../Sections/DeploymentHeader'
import DeploymentInfo from '../Sections/DeploymentInfo'
import '../Sections/CSS/Deployment.css'


function Deployment() {
  return (
    <div>
      <DeploymentHeader/>
      <DeploymentInfo/>
    </div>
  )
}

export default Deployment