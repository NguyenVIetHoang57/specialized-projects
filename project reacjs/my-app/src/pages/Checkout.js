import React from 'react'
import {Link} from "react-router-dom"
import {AiOutlineRollback} from 'react-icons/ai'
import  watch  from '../images/watch.jpg'

const Checkout = () => {
  return (
   <>
    <div className='checkout-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-ledt-data'>
                        <h3 className='website-name'>Thieen Duowng</h3>
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb ">
                            <li class="breadcrumb-item total-price "><a href="/cart">Cart</a></li>
                            <li class="breadcrumb-item active total-price "><a href="/checkout">Checkout</a></li>
                            <li class="breadcrumb-item active total-price "><a href="/payment">payment</a></li>
                            
                        </ol>
                        </nav>
                        <h4 className='title total'>
                            Contact info
                        </h4>
                        <p className='user-details total'>
                            hoang nguyen (hoang57001@gmail.com)
                        </p>
                        <h4 className='mb-3'>Shipping Address</h4>
                        <form className='d-flex gap-15 flex-wrap justify-content-between'>
                            <div className='w-100'>
                                <select className='form-control form-select'>
                                    <option value="" selected disabled>Select</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input className='form-control'  placeholder='First Name' type='text'></input>
                            </div>
                            <div className='flex-grow-1'>
                                <input className='form-control' placeholder='Last name' type='text'></input>
                            </div>
                            <div className='w-100'>
                                <input className='form-control' placeholder='Address' type='text'></input>
                            </div>
                            <div className='flex-grow-1'>
                                <input className='form-control' placeholder='City' type='text'></input>
                            </div>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between aling-items-center'>
                                    <Link to="/cart" className='text-dark'> <AiOutlineRollback/>Return to cart</Link>
                                    <Link to="/payment" className='button'> Continue to pay </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                 <div className='col-5'>
                
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-10 mb-2 align-items-center '>
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span style={{top : "-10px", right: "2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
                                    1
                                </span>
                                <img src = {watch} className='img-fluid'></img>
                            </div>
                            <div>
                                <h5 className='title total-price'>Ten mat hang</h5>
                                <p className='total-price'>Size/Tag</p>
                            </div>
                        </div>
                        <div className='flex-grow-1'>
                            <h5 className='total'>500$</h5>
                        </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                        
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>SubTotal:</p>
                        </div>
 
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Shipping:</p>
                            <p className='mb-0 total-price'>$30</p>
                        </div> 
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                        <h4 className='total'>Total: </h4>
                        <h5 className='total-price'>$ 1000</h5>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Checkout
