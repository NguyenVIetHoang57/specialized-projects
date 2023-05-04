import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
    <>
         {/* <Meta title = {"Forgot password"}></Meta>
        <BreadCrumb title={"Forgot password"}></BreadCrumb> */}
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset your password</h3>
                        <form className='d-flex flex-column gap-15'>
                            <div>
                                <input type='email' name='email' className='form-control' placeholder='Input your email'></input>
                            </div>
                            <div >
                                
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Send</button>
                                    <Link to="/login" className='button border-0 text-white'>Cancel</Link>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Forgotpassword
