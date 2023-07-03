import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Featured from "../components/Product/Featured";

function SingleProductPage() {
  const location = useLocation();
  const productData = location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productData]);
  return (
    <div>
      <section id="prodetails" class="section-p1">
        <div class="single-pro-image">
          <img src={productData.img} width="100%" id="MainImg" alt="" />
          <div class="small-img-group">
            <div class="small-img-col">
              <img
                src={productData.img}
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src={productData.img}
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src={productData.img}
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src={productData.img}
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="single-pro-details">
          <h6>Home / {productData.type}</h6>
          <h4>{productData.name}</h4>
          <h2>{productData.price}</h2>
          <select>
            <option>Select Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          <input type="number" value="1" />
          <button class="normal">Add To Cart</button>
          <h4>Product Details</h4>
          <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </span>
        </div>
      </section>

      <Featured />
      <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
          <h4>Sign Up For Newsletter</h4>
          <p>
            Get E-mail updates about our latest shop and
            <span>special offers.</span>
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="Your Email Address" />
          <button class="normal">Sign Up</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SingleProductPage;
