import React from 'react'
import watch from '../images/watch.jpg' 
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Cart = () => {
   return (
    <>
    <section className='cart-wrapper home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                            <div className='w-25'>
                                <img 
                                    src= {watch} 
                                    className='img-fluid'>
                                        
                                </img>
                            </div>
                            <div className='w-75'>
                                <h5 >Input title here</h5>
                                <p >Color</p>
                                <p > Size</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$100</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input type='number' className='forrm-control' min={1} max={10}></input>
                            </div>
                            <div>
                                <BsFillTrashFill />
                            </div>
                        </div>
                        <div className='cart-col-4'>
                            <h5 className='price'>$ 100</h5>
                        </div>

                    </div>   
                </div>
                <div className='col-12 py-2 mt-4'>
                    <div className='d-flex justify-content-between align-itema-baseline'>
                    <Link to="/store" className='button'>Continue to shopping</Link>
                    </div>
                    <div className='d-flex flex-column align-items-end '>
                        <h4>SubTotal: $100</h4>
                        <Link to="/checkout" className='button'>Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
   )
 }
 
 export default Cart
 