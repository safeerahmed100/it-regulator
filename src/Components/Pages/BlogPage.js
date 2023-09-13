import React from 'react'
import BlogsCard from '../Sections/BlogsCard'
import '../Sections/CSS/blogs.css'

function BlogPage() {
  return (
    <div className='BlogPage'>
        <hr></hr>
        <h1>Blogs</h1>
        <BlogsCard/>
    </div>
  )
}

export default BlogPage