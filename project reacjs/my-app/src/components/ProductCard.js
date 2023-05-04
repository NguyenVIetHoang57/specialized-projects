import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
const { grid } = props;
let location = useLocation();


    return (
        <>
        <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
            <Link to="product/:id" className="product-card position-relative">
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link >
                        <img src= {wish} alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img
                        src= {watch}
                        className="img-fluid"
                        alt="product image"
                    />
                    <img
                        src= {watch2}
                        className="img-fluid"
                        alt="product image"
                    />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>Đây là nơi ghi mô tả sản phẩm</p>
                    <p className="price">$100.00</p>

                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link >
                            <img src={prodcompare} alt="compare" />
                        </Link>
                        <Link >
                            <img src=  {view} alt="view" />
                        </Link>
                        <Link >
                            <img src= {addcart} alt="addcart" />
                        </Link>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
           <Link to="store/product/:id" className="product-card position-relative">
           <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link >
                        <img src= {wish} alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img
                        src= {watch}
                        className="img-fluid"
                        alt="product image"
                    />
                    <img
                        src= {watch2}
                        className="img-fluid"
                        alt="product image"
                    />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>Đây là nơi ghi mô tả sản phẩm</p>
                    <p className="price">$100.00</p>

                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link >
                            <img src= {prodcompare} alt="compare" />
                        </Link>
                        <Link >
                            <img src= {view} alt="view" />
                        </Link>
                        <Link >
                            <img src= {addcart} alt="addcart" />
                        </Link>
                    </div>
                </div>
            </div>
           </Link>
        </div>
        </>
    );
};
export default ProductCard;