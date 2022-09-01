import React, { useEffect } from 'react'
import Blog from './Blog'
import '../styles/blog.css'
import { useSelector,useDispatch } from 'react-redux';
import { actions } from '../store';

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state)=> state.blogs);
  const addBlog = () =>{
    dispatch(actions.addBlog({
        image : require('../images/img01.jpg'),
        title : "Home Office",
        author : "AMANDA GARRITY",
        date: 'Jun, 8 2021',
        desciption: 
          `
          For most people, a cluttered workspace makes for a cluttered mind.
          Not only will having an organized desk look more inviting,
          but it'll motivate you to get to work,
          especially since you won't have to clear paper piles
          and junk out of your way to get the job done.
          Browse through these clever desk organization ideas to
          find simple yet highly effective ways to tidy up your workspace,
          whether it's in your home office, 
          a small corner turned into your makeshift work space or a cubicle at your 9 to 5.
          With pegboard walls,
          DIY organizers and color-coordinated dividers, you can give all of your office supplies, 
          documents and planning materials a designated spot,
          so you have exactly what you need at all times.
          With a few smart moves, you'll have an organized office that helps you.
          `
    }))
  }
  useEffect(()=>{
   // addBlog()
  },[dispatch])
  return (
    <div className='container'>
    {
      blogs.map((blog,index)=>(
        <Blog 
        key={index}
        image={blog.image}
        title={blog.title}
        author={blog.author}
        date={blog.date}
        desciption={blog.desciption}
        url={blog.more}
        />
      ))
    }
    </div>
  );
}

export default Blogs
