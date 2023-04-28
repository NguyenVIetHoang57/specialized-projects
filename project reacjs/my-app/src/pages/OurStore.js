import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";


const OurStore = (props) => {
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Shop By Categories</h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filter By</h3>
                        
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Availablity</h3>
                            <div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        In Stock (1)
                                    </label>
                                </div>
                                <div className="form-check">
                                </div>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className="form-check-label" htmlFor="">
                                    Out of Stock(0)
                                </label>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Price</h3>
                        <div className="d-flex align-items-center gap-10">
                            <div className="form-floating mb-3">
                                <input type="email" 
                                className="form-control py-1" 
                                id="floatingInput" 
                                placeholder="From"/>
                                <label htmlfor="floatingInput">From</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control py-1" id="floatingInput" placeholder="To"/>
                                <label htmlfor="floatingInput">To</label>
                            </div>
                            </div>
                                <h3 className="sub-title">Colors</h3>
                            <div>
                                <ul className="colors ps-0">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>   
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>        
                                </ul>
                             </div>
                                <h3 className="sub-title">Size</h3>
                                <div>
                                <div className="form-check"/>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="color-2"
                                    />
                                     <label className="form-check-label" htmlFor="color-2">
                                         S (2)
                                    </label>
                                </div>
                                <div>
                                <div className="form-check"/>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="color-2"
                                    />
                                     <label className="form-check-label" htmlFor="color-2">
                                         M (0)
                                    </label>
                                </div>
                                
                             </div>
                        </div>    
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Product Tags</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center  gap-10">
                                    <span className="badge bg-light text-secondary rounded-3" py-2 px-3>Head phone</span>
                                    <span className="badge bg-light text-secondary rounded-3" py-2 px-3>Laptop</span>
                                    <span className="badge bg-light text-secondary rounded-3" py-2 px-3>Monitor</span>
                                    <span className="badge bg-light text-secondary rounded-3" py-2 px-3>Cable</span>
                                    <span className="badge bg-light text-secondary rounded-3" py-2 px-3>Phone</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Random Product</h3>
                            <div>
                                <div className="randon-products d-flex">
                                    <div className="w-25">
                                        <img src="images/watch.jpg"
                                             className="img-fluid"
                                             alt="watch"
                                        ></img>
                                    </div>
                                    <div className="w-50"> 
                                        <h5>
                                            Kids headphones
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>300$</b>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                    <div className="col-9">
                        <div className="filter-sort-frid">
                            <div  className="d-flex align-items-center gap-10">
                                <p className="mb-0">Sort By: </p>
                                <select name="sort by" 
                                        className="form-control form-select"
                                        id=""
                                >
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>

                            </div>

                        </div>
                    </div>

                </div>
            </div >
        </>

    );
};

export default OurStore;