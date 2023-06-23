import React from "react";

function SingleProduct(props) {
  return (
    <>
      <div class="pro">
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
        <a href={props.link}>
          <i class="fal fa-shopping-cart cart"></i>
        </a>
      </div>
    </>
  );
}

export default SingleProduct;
