import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import newsletter from '../images/newsletter.png'
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src= {newsletter} alt='newsletter'/>
                <h2 className='mb-0 text-white'>SIGN UP</h2>
              </div>
            </div>
            <div className='col-7'>
            <div className='input-group'>
              <input
                type='text'
                class='form-control py-1'
                placeholder="Dia Chi Email"
                aria-label="Dia Chi Email"
                aria-aria-describedby='basic-addon2'
              />
              <span className='input-group-text py-2' id='basic-addon2'>
              Dang Ky
              </span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white'>Contact Us</h4>
              <div className='text-white py-5'>
                <address>HCM : 259 Dien Bien Phu <br/>
                PinCode : 111111
                </address>
                <a href='tel:+84 0123456789' className='mt-0 text-white'>+84 0123456798</a><br/>
                <a href='mailtel:duongcaothien100801hiie@gmail.com' className='mt-2 text-white'>duongcaothien100801hiie@gmail.com</a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href="https://www.facebook.com/100801T/">
                    <BsFacebook className='fs-2'/>
                  </a>
                  <a className='text-white' href="https://github.com/duongcaothien">
                    <BsGithub className='fs-2'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="/privacy" className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to="/refund" className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to="/shipping" className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to="/TermAndCondition" className='text-white py-2 mb-1'>Term & Conditions</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white'>Quick Link</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>HeadPhones</Link>
                <Link className='text-white py-2 mb-1'>Tables</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy;{new  Date().getFullYear()}; Powered by Thien
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'></footer>
    </>
  )
}

export default Footer