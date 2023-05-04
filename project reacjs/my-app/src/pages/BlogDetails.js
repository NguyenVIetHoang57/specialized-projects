import React from 'react'
import {Link} from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Meta from '../components/Meta';
import blog from "../images/blog-1.jpg";
const BlogDetails = () => {
  return (
    <>
         <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                  <div className="col-12s">
                    <div className='single-blog-card'>
                        <Link to="/blogs" className='d-flex align-items-center gap-10'>
                           <HiOutlineArrowLeft className='fs-4'/> Go back to Blog
                        </Link>
                        <h3 className='title'>
                            Title of blogs
                        </h3>
                        <img  src= {blog} className='img-fluid w-100 my-4' alt='blog'>
                        
                        </img>
                        <p>
                            Detail of blog
                        </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogDetails
