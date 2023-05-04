import React, { useState } from 'react'
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {AiOutlineHeart} from 'react-icons/ai'


const ProductDetails = () => {

    const [order, setorder] = useState(true);
    const props = {width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};
    return (
    <>
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl '>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                            <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15 '>
                            <div>
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid'></img>
                            </div>
                            <div>
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid'></img>
                            </div>
                            <div>
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid'></img>
                            </div>
                            <div>
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    Watch
                                </h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$ 100</p>
                                <div className='d-flex align-items-center gap-10'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className='mb-0 t-review'> (2 reviews)</p>
                                </div>
                                <a href='#review' className='review-btn'>Write a review</a>
                            </div>
                            <div className='border-bottom py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Type: </h4><p className='product-data'>Clock</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Branch: </h4><p className='product-data'>Unknown</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Category: </h4><p className='product-data'>our store, royal, clock</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Tags: </h4><p className='product-data'>Clock</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Available: </h4><p className='product-data'>In Stock (12)</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h4 className='product-heading'>Size: </h4>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark'>S</span>
                                        <span className='badge border border-1 bg-white text-dark'>M</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10  flex-column myt-2 mb-3'>
                                    <h4 className='product-heading'>Color: </h4>
                                    <Color/>
                                </div>
                                <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
                                    <h4 className='product-heading'>Quantity: </h4>
                                    <div className=''>
                                        <input type='number' 
                                            name='' 
                                            min={1} 
                                            max={10} 
                                            style={{width: "70px"}} 
                                            className='form-control'
                                            id=''>

                                        </input>
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-3'>
                                            <button className='button border-0'>Add to cart</button>
                                            <button className='button border-0 text-white' to='/signup'>Buy it now</button>
                                        </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                <div>
                                    <a href='favourite'> <AiOutlineHeart className='fs-5 me-2'/> Add to wishlist</a>
                                </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h4 className='product-heading'>Material: </h4><p className='product-data'>
                                        Nhap material o day
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                    <h4 className='description-wrapper'>Description</h4>
                       <div className='bg-white p-3'>
                            
                            <p className='bg-white'>sdsvv</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <section  className='reviews-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                        <div className='review-head d-flex justify-content-between align-items-end'> 
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='d-flex align-items-center gap-10'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className='mb-0'>Based on 2 reviews</p>
                                </div>
                            </div>
                           {order && 
                           (
                            <div>
                                <a className='tex-dark text-decoration-underline'> Write review</a>
                            </div>
                           )
                           }
                        </div>
                        <div className='review-form py-4'>
                            <h4 >Write a review</h4>
                        <form className="d-flex flex-column gap-15">
                          <div>
                          <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                          </div>
                            <div>
                                <textarea
                                name=""
                                id=""
                                className="w-100 form-control"
                                cols="30"
                                rows="4"
                                placeholder='Comment'
                                ></textarea>
                            </div>
                            <div >
                                <button className='button border-0'>Submit</button>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                               <div className='d-flex gap-10 align-items-center'>
                                <h6 className='mb-0'>Cus</h6>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                               </div>
                                <p className='mt-3'>lorem</p>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div >
            <div className="row">
              <ProductCard />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default ProductDetails
