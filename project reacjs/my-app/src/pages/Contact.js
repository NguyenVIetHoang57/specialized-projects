import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {HiHome} from 'react-icons/hi';
import {AiFillPhone} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';
const Contact = () => {
  return (
  <>
    <Meta title = {"Contact"}></Meta>
    <BreadCrumb title={"Contact Us"}></BreadCrumb>

    <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h4 className="contact-title mb-4">Contact</h4>
                <form className="d-flex flex-column gap-15">
                  <div > 
                    <input type="text" className="form-control" placeholder='Name'></input>
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder='Email'></input>
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder='Phone'></input>
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
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h4 className="contact-title">Get in touch with us</h4>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 algin-items-center'><HiHome className='fs-5'/>
                      <address className='mb-0'>HCM : 259 Dien Bien Phu</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiFillPhone className='fs-5'/>
                      <a href='tel: +84 0123456798'>+84 0123456798</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiFillMail className='fs-5'/>
                      <a href='mailto: hoang57001@gmail.com'>hoang57001@gmail.com</a>
                    </li>
                    
                  </ul>
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

export default Contact