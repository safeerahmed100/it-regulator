import React from 'react'
import { Link } from 'react-router-dom'


function BlogsCard() {
 
  function truncate(string,i){
    if(string && string.length > i){
      return string.substr(0,i-1) + '....'
    }
    else{
    return string
    }
  }

  return (
    <div className='BlogsCard'>
      <div className='BlogsContainer'>
      <h2>OFFICE</h2>
      <h3>Unleash the power of Microsoft 365’s Bookings feature</h3>
      <h4>POSTED ON SEPTEMBER 8, 2023 BY TECH ADVISORY</h4>
      <hr></hr>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaMkboTl4Eor60tydvXumsACUg_KdqZerzixG1Iv5&s' alt='related to news'/>
      <p>{truncate("Microsoft Bookings is a scheduling app that allows you to create a website where customers can book in-person or virtual appointments with your business. Bookings integrates with,Microsoft Bookings is a scheduling app that allows you to create a website where customers can book in-person or virtual appointments with your business. Bookings integrates with,Microsoft Bookings is a scheduling app that allows you to create a website where customers can book in-person or virtual appointments with your business. Bookings integrates with",150)}</p>
      <Link to='/blogs/office/unleash-the-power'>Read More</Link>
      </div>

    </div>
  )
  }

export default BlogsCard