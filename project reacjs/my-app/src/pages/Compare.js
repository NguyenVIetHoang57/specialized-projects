import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

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
                                <h6 className='price'>$ 100</h6>
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
