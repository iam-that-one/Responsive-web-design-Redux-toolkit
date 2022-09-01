import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/layout.css'
const Layout = () => {
  const showFullTab = () =>{
    var i;
      const links = document.getElementsByClassName('link');
      if(links[0].className.includes("responsive") == false){
      for(i=0; i< links.length; i++){
        links[i].className += " responsive"
      }
      }else{
        for(i=0; i< links.length; i++){
          links[i].className = links[i].className.replace(" responsive","")
        }
      }
  }
    return (
        <>
          <div className='nave'>
                <Link id='l1' className="link" to="/">Home</Link>
                <Link id='l2' className="link" to="/blogs">Blogs</Link>
                <button className="icon" onClick={showFullTab}>
                <i className="fa fa-bars"></i>
                </button>
          </div>
          <Outlet />
        </>
      )
}

export default Layout
