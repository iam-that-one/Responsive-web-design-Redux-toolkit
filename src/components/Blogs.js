import Blog from './Blog'
import '../styles/blog.css'
import { useSelector } from 'react-redux';

const Blogs = () => {
  const blogs = useSelector((state)=> state.blogs);
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
