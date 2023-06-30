import React from "react";
import SingleProduct from "./singleproduct";
import { products } from "./products";

function PlaquePage() {
  const type = "Plaques";
  const arrayDataItems = products.plaques.map((index) => (
    <SingleProduct
      img={index.img}
      name={index.name}
      price={index.price}
      type={type}
    />
  ));
  return <>{arrayDataItems}</>;
}

export default PlaquePage;
