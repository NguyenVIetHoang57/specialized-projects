import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const Signup = () => {
  return (
    <>
        <Meta title = {"Login"}></Meta>
        <BreadCrumb title={"Login"}></BreadCrumb>

        <div className='login-wrapper py-5 home-wrapper-2'>
           <div className='container-xxl'>
           <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center'>Login</h3>
                        <form className='d-flex flex-column gap-15'>
                            <div>
                                <input type='text' name='name' className='form-control' placeholder='Name'></input>
                            </div>
                            <div>
                                <input type='text' name='name' className='form-control' placeholder='Name'></input>
                            </div>
                            <div>
                                <input type='email' name='email' className='form-control' placeholder='Enter your mail'></input>
                            </div>
                            <div className='mt-1'>
                                <input type='password' name='password' className='form-control' placeholder='Enter your password'></input>
                            </div>
                            <div >
                                
                                <div className='mt-3 d-flex justify-content-center gap-20 align-items-center'>
                                    <button className='button border-0'>Signup</button>
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

export default Signup
