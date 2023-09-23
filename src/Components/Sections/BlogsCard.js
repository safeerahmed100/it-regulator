import axios from 'axios'
import React, { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'



function BlogsCard() {
  const [blogs,setBlogs]=useState([])

 useEffect(()=>{
  let url='https://celebraldesign.com/itregulators/wp-json/wp/v2/blogpage'
 axios.get(url).then((res)=>{
 console.log(res.data)
 setBlogs(res.data)
  });
},[]);
console.log(blogs)

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
        {blogs.map((blogscard) => (
          <div className='BlogsContainer' key={blogscard.id}>
            <h2>{blogscard.id}</h2>
            <h3>{blogscard.title.rendered}</h3>
            <h4>POSTED ON {blogscard.date}</h4>
            <hr />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaMkboTl4Eor60tydvXumsACUg_KdqZerzixG1Iv5&s'
              alt='related to news'
            />
        
            {truncate(blogscard.content.rendered, 150)}
            <Link to='/blogs/office/unleash-the-power'>Read More</Link>
          </div>
        ))}
      </div>
    );

}

export default BlogsCard;