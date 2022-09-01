import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { actions } from '../store'
import '../styles/addBlog.css'
import { useNavigate } from 'react-router-dom'
const AddBlog = () => {
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [decription, setDecription] = useState('')
    const dispatch = useDispatch()
    var today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const navigate = useNavigate()
const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}
    const addBlog = () =>{
        dispatch(actions.addBlog({
            image: image,
            title : title,
            author : author,
            date:  date,
            desciption: decription
        }))
        navigate("/blogs");
    }
    
  return (
    <div className='blog-container'>
        <label for="file-upload" class="custom-file-upload">
              Choose Photo
        </label>
        <input id="file-upload" type="file" onChange={onImageChange} className="image-input" />
      <div className='add-blog-image-container'>
      <img className='selected-image' src={image} alt="  preview image" />
      </div>
      <div>
      
      </div>
      <div>
        <input placeholder='Title' onChange={(e)=>setTitle(e.target.value)} className='title-input' type="text"></input>
      </div>
      <div>
        <input placeholder='Author' onChange={(e)=>setAuthor(e.target.value)} className='author-input' type="text"></input>
      </div>
      <div>
        <textarea className='description-text' onChange={(e)=>setDecription(e.target.value)} placeholder='Description'></textarea>
      </div>
      <button className='addBlog-button' onClick={addBlog}> Blog it</button>
    </div>
  )
}

export default AddBlog
