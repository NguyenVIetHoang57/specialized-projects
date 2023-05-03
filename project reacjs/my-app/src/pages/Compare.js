import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from '../components/Color';

const Compare = () => {
  return (
    <>
        <Meta title = {"Compare"}></Meta>
        <BreadCrumb title={"Compare"}></BreadCrumb>
        <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='cotainer-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'></img>
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' alt='watch'/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    Đồng hồ vávsvasvasvasvva
                                </h5>
                                <h6 className='price mb-3 mt-3'>$ 100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Branch:</h5>
                                        <p>Havels </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p>Watch </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availability:</h5>
                                        <p>In Stock </p>
                                    </div> 
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color/>
                                    </div> 
                                    <div className='product-detail'>
                                        <h5>Size :</h5>
                                        <div className='d-flex gap-10'> 
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'></img>
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' alt='watch'/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    Đồng hồ vávsvasvasvasvva
                                </h5>
                                <h6 className='price mb-3 mt-3'>$ 100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Branch:</h5>
                                        <p>Havels </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p>Watch </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availability:</h5>
                                        <p>In Stock </p>
                                    </div> 
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color/>
                                    </div> 
                                    <div className='product-detail'>
                                        <h5>Size :</h5>
                                        <div className='d-flex gap-10'> 
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Compare
