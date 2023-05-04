import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
<>
       
   
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center'>Login</h3>
                        <form className='d-flex flex-column gap-15'>
                            <div>
                                <input type='email' name='email' className='form-control' placeholder='Enter your mail'></input>
                            </div>
                            <div className='mt-1'>
                                <input type='password' name='password' className='form-control' placeholder='Enter your password'></input>
                            </div>
                            <div >
                                <Link to='/forgot-password'>Forgot password ?</Link>
                                <div className='mt-3 d-flex justify-content-center gap-20 align-items-center'>
                                    <button className='button border-0'>Login</button>
                                    <Link className='button border-0 text-white' to='/signup'>Signup</Link>
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

export default Login
