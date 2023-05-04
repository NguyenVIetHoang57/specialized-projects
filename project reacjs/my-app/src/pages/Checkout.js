import React from 'react'

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
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Cart</a></li>
                            <li class="breadcrumb-item"><a href="#">Payment</a></li>
                            
                        </ol>
                        </nav>
                        <h4 className='title'>
                            Contact info
                        </h4>
                        <p className='user-details'>
                            hoang nguyen (hoang57001@gmail.com)
                        </p>
                        <form className='d-flex gap-15 flex-wrap justify-content-between'>
                            <div className='w-100'>
                                <select className='form-control form-select'></select>
                            </div>
                            <div>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='w-100'>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='w-100'>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='w-370'>
                            <select className='form-control form-select'></select>
                            </div>
                            <div>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div></div>
                            <div></div>
                        </form>
                    </div>
                </div>
                <div className='col-5'></div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Checkout
