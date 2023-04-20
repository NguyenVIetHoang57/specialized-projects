import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className='header-top-strip'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping 100.000 VND& Free Refund</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Contact: <a className='text-white' href='tel:+84 0123456789'>+84 0123456789</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2><Link className='text-white' to='/' >Thien Duong</Link></h2>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input
                  type='text'
                  class='form-control py-2'
                  placeholder="San Pham Can Tim"
                  aria-label="San Pham Can Tim"
                  aria-aria-describedby='basic-addon2'
                />
                <span className='input-group-text py-3' id='basic-addon2'>
                  <BsSearch className='fs-5' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <header className='header-upper-link d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/compare.svg" alt='compare' />
                    <p className='mb-0'>Compare <br /> Product</p>
                  </Link>
                </div>

                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/wishlist.svg" alt='wishlist' />
                    <p className='mb-0'>Favourite <br /> wishlist</p>
                  </Link>
                </div>

                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/user.svg" alt='user' />
                    <p className='mb-0'>Log in <br /> My User</p>
                  </Link>
                </div>

                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/cart.svg" alt='cart' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>VND</p>
                    </div>
                  </Link>
                </div>
              </header>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div class="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='images/menu.svg' alt='' /><span className='me-5 d-inline-blocKL'>The Loai</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to='#'>Action</Link></li>
                      <li><Link className="dropdown-item text-white" to='#'>Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to='#'>Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15 '>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/store'>Our Store</NavLink>
                    <NavLink to='/'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header