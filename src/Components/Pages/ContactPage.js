import React from 'react'
import HeaderComponent from '../Sections/HeaderComponent'
import Contact from '../Contact'

function ContactPage() {
  return (
    <div>
<HeaderComponent highlightedText='Contact' componentClass='Contact'/>
<Contact componentClass='Contact-class-no-bg'/>

    </div>
  )
}

export default ContactPage