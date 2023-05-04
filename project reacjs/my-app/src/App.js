import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import Compare from "./pages/Compare";
import Favourite from "./pages/Favourite";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import BlogDetails from "./pages/BlogDetails";
import TermAndCondition from "./pages/TermAndCondition";
import Refund from "./pages/Refund";
import Shipping from "./pages/Shipping";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare" element={<Compare />} />
            <Route path="favourite" element={<Favourite/>}></Route>
            <Route path="Login" element={<Login/>}></Route>
            <Route path="forgot-password" element={<Forgotpassword/>}></Route>
            <Route path="signup" element={<Signup/>}></Route>
            <Route path="resetpassword" element={<Resetpassword/>}></Route>
            <Route path="blog/: id" element={<BlogDetails/>}></Route>
            <Route path="TermAndCondition" element={<TermAndCondition/>}></Route>
            <Route path="refund" element={<Refund/>}></Route>
            <Route path="shipping" element={<Shipping/>}></Route>
            <Route path="Privacy" element={<PrivacyPolicy/>}></Route>
            <Route path="store/product/:id" element={<ProductDetails/>}></Route>
            <Route path="cart" element={<Cart/>}></Route>
            <Route path="checkout" element={<Checkout/>}></Route>
            <Route path="payment" element={<Payment/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
