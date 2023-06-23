import React from "react";
import SingleProduct from "./singleproduct";
import { products } from "./products";

function FramePage() {
  const arrayDataItems = products.singleFrames.map((index) => (
    <SingleProduct
      img={index.img}
      name={index.name}
      price={index.price}
      link={index.link}
    />
  ));
  return <>{arrayDataItems}</>;
}

export default FramePage;
