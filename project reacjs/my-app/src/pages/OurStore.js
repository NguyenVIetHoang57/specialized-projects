import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

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
                        </div>
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
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Product Tags</h3>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Random Product</h3>
                        </div>
                    </div>
                    <div className="col-9"></div>
                </div>
            </div >
        </>

    );
};

export default OurStore;