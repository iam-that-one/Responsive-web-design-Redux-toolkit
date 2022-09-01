import React from 'react'
import '../styles/blog.css'
const Blog = ({image,title,author, date,desciption, url}) => {
  return (
    
      <div className='blog'>
       <div>
        <h2 className='title'>{title}</h2>
       </div>
       <div >
        <h4 className='author'>Author: {author}</h4>
       </div>
       <div >
        <h5 className='date'>Date: {date}</h5>
       </div>
       <div className='desciption'>{desciption}
       </div>
       <a className='web-link' href={url}>Read More</a>
       <div className='image-container'>
        <img className='image' src={image}/>
       </div>
      </div>
  );
}

export default Blog
