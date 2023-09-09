import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import BannerComponent from '../Sections/BannerComponent'
import Img1 from '../Sections/CSS/Assets/VirtualizationImg.png'
import Img2 from '../Sections/CSS/Assets/VirtualizationImg1.png'
function VritualizationPage() {
  return (
    <div>

        <HeaderComponent componentClass='VirtualizationHeader' highlightedText='Virtualization'/>
        <InfoComponent heading='Virtualization is the creation of a virtual'
        paraText='(rather than physical) version of something, such as a hardware platform, operating system, a storage device, or network resources, which can improve efficiency and increase value.'
        componentImage={Img1}        />
        <BannerComponent BannerPara='ITRegulators’ virtualization solutions let business leaders and IT managers do more with less by centralizing administrative tasks, cutting costs, and improving scalability and workloads.'
        componentClass='VirtualizationBanner' />
        <InfoComponent heading='The right virtual strategy'
        componentClass='Virtualizationpara Reverse'
        paraText='Whether you need to make your environment more efficient, improve availability, reduce your server footprint, or migrate a critical legacy application from outdated hardware, virtualization is something you should consider. The key is determining which virtualization technology or strategy is right for your organization and how you will deploy it. And that’s where ITRegulators comes in. Our IT support staff can show you how to get more out of your existing resources, reduce IT cost, and increase availability and recovery with an end-to-end virtual solution.  
        ITRegulators’ IT professionals have certified virtualization expertise on all three market-leading platforms – Microsoft, VMware, and Citrix. This expertise enables us to deliver an end-to-end virtualized solution, and ensure that your virtualized environment is designed for stability, scalability, security, interoperability, and disaster recovery.'
        />
        <InfoComponent heading='ITRegulators provides the following virtualization services:'
        listHeading='Design – '
        listText='The key to a successful virtual environment is a strong design that meets not only your technical needs but takes into consideration your business objectives as well. Using a holistic approach, we ensure your design not only includes the best hypervisor for your business, but assures the correct storage solution as well. From local storage, to network attached storage (NAS) to storage area networks (SAN), we offer a complete design solution.'
        listHeading1='Deployment – '
        listText1='Installation and configuration of the virtual environment requires a deep understanding of virtualization and internetworking, as well as SAN technologies. A properly deployed environment will ensure a stable networking environment.'
        listHeading2='Management – '
        listText2='ITRegulators offers a complete solution that includes 24×7 network monitoring, management, reporting, and remediation of the virtual environment.'
        componentImage={Img2}
        componentClass='Reverse'
        />
        
     
    </div>
  )
}

export default VritualizationPage