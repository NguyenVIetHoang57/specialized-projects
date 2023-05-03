import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";


const OurStore = (props) => {
    const [grid, setGrid] = useState(4);
   
    return (
        <>
            <Meta title = {"Our store"}></Meta>
            <BreadCrumb title={"Our store "}></BreadCrumb>
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shop by categories
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                        <li>Phone</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Filter by
                                </h3>
                                <div >
                                    <h5 className="sub-title">Availablity</h5>
                                  <div>
                                  <div className="form-check" >
                                        <input className="form-check-input" type="checkbox" value="" id=""/>
                                        <label className="form-check-label" htmlfor="">In Stock (1)</label>
                                    </div>
                                    <div className="form-check" >
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label" htmlfor="">Out of Stock</label>
                                    </div>
                                  </div>
                                  <h5 className="sub-title">Price</h5>
                                  <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating ">
                                        <input
                                            type="email"
                                            className="form-control py-1"
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating ">
                                        <input
                                            type="email"
                                            className="form-control py-1"
                                            id="floatingInput"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                  </div>
                                  <h5 className="sub-title">Colors</h5>
                                    
                                    <div className="d-flex flex-wrap">
                                        <Color></Color>
                                    </div>
                                    
                                  <h5 className="sub-title">Size</h5>
                                  <div>
                                  <div className="form-check" >
                                        <input className="form-check-input" type="checkbox" value="" id="color-1"/>
                                        <label className="form-check-label" htmlfor="color-1">S (2)</label>
                                    </div>
                                    <div className="form-check" >
                                        <input className="form-check-input" type="checkbox" value="" id="color-2"/>
                                        <label className="form-check-label" htmlfor="color-2">M </label>
                                    </div>
                                  </div>
                                </div>
                            
                            </div>

                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Product tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap aling-items gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-3 px-3">Head Phone</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-3 px-3">Laptop</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-3 px-3">Mobile</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-3 px-3">Monitor</span>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                    Random products
                                </h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className="img-fluid"/>
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphone built</h5>
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
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className="img-fluid"/>
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphone built</h5>
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
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{width: "100px"}}>Sort By: </p>
                                    <select name="" className="form-control form-select" id="">
                                    <option value="manual">Featured</option>
                                        <option value="best-selling" selected="selected">
                                            Best selling
                                        </option>
                                        <option value= "title-ascending">
                                            Alphetically, A-Z
                                        </option>
                                        <option value= "title-decending">
                                            Alphetically, Z-A
                                        </option>
                                        <option value="price-ascending">
                                            Price, low to high
                                        </option>
                                        <option value="price-decending">
                                            Price, high to low 
                                        </option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                     <p className="totalproducts mb-0" >21 products</p>
                                     <div className="d-flex gap-10 align-items-center grid ">
                                        <img onClick={() => 
                                        {
                                            setGrid(12);
                                        }} 
                                        src="images/gr.svg" className="d-block img-fluid" alt="grid"></img>
                                        <img
                                        onClick={() => 
                                            {
                                                setGrid(6);
                                            }}
                                         src="images/gr2.svg" className="d-block img-fluid" alt="grid"></img>
                                        <img 
                                        onClick={() => 
                                            {
                                                setGrid(4);
                                            }}
                                        src="images/gr3.svg" className="d-blockmb-fluid" alt="grid"></img>
                                     </div>
                                </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                               <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid}/>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default OurStore;