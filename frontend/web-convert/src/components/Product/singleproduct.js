import React from "react";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  const productData = {
    img: props.img,
    name: props.name,
    price: props.price,
    type: props.type,
  };
  return (
    <>
      <div class="pro">
        <Link
          to={"/singleProduct/" + props.name}
          style={{ textDecoration: "none" }}
          state={productData}
        >
          <img src={props.img} alt="" />
          <div class="des">
            <span>Jackson Frames</span>
            <h5>{props.name}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>{props.price}</h4>
          </div>
        </Link>
        <i class="fal fa-shopping-cart cart"></i>
      </div>
    </>
  );
}

export default SingleProduct;
