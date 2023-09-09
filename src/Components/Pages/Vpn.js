import React from 'react'
import Img1 from '../Sections/CSS/Assets/VpnImg.png'
import Img2 from '../Sections/CSS/Assets/VpnImg1.png'
import Img3 from '../Sections/CSS/Assets/VpnImg2.png'
import HeaderComponent from '../Sections/HeaderComponent'
import InfoComponent from '../Sections/InfoComponent'
import BannerComponent from '../Sections/BannerComponent'

function Vpn() {
  return (
    <div>
<HeaderComponent componentClass='VpnHeader' highlightedText='VPN' Text=' (Virtual Private Network)'/>
<InfoComponent heading='In our increasingly mobile world,'
paraText='employees need a fast, secure, reliable way to connect to their company’s networks and applications – from anywhere in the world and from any type of device. In “the old days” remote access technology required expensive user licenses. The technology also needed to be configured for every laptop and every user, which was complex'
paraTwo='Today’s SSL virtual private network (VPN) technology provides an easier way to deliver remote mobile access securely from a private network over a public network – the Internet. With a URL, a username, and a password, employees around the world use SSL VPNs to stay connected to your office and the information that they need.'
componentImage={Img1}
/>
<BannerComponent componentClass='VpnBanner' BannerPara='As a leading IT company ITRegulators leverage our deep expertise across multiple disciplines to design and implement a range of best-of-breed VPN solutions – and provide secure remote access solutions for distributed organizations of all sizes.'
/>
<InfoComponent componentClass='Reverse' heading='Locking it down' paraText='As a remote path into your network, VPNs can pose a risk if not designed and implemented properly. The ITRegulators IT professionals are experts in the disciplines of security, mobility, compliance, and remote access. That expertise, combined with our 18 years of IT experience positions us well for implementing a VPN solution that delivers secure connections and protects your users, your networks, and your information. With a wide variety of VPN products and types available – including SSL, site-to-site, remote, high availability, and bonded – ITRegulators can design and implement the VPN solution that meets your remote access needs.' componentImage={Img2} />
<InfoComponent heading='Making connections' paraText='The ease-of-use and ease-of-management of today’s VPNs are tremendous benefits for users and IT alike. For businesses VPN access translates directly to maintaining worker productivity. ITRegulators’ VPN solutions integrate seamlessly into your existing IT support to connect:'
listHeadingBold='Offices over Cloud services'
listHeadingBold1='Remote workers securely into your network systems'
listHeadingBold2='Cross-platform devices – including Mac, PC, and mobile devices such as smartphones and iPads'
componentImage={Img3}
/></div>
  )
}

export default Vpn