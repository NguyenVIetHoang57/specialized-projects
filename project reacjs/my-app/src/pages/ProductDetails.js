import React, { useState } from 'react'
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';

const ProductDetails = () => {

    const [order, setorder] = useState(true);
    const props = {width: 400, height: 500, zoomWidth: 500, img: "https://images.app.goo.gl/UfgfigRgX77Mr27y9"};
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
                                <img src='images/watch.jpg'></img>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main'></div>
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
        <section className='reviews-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Reviews</h3>
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
