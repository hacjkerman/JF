import React from "react";
import SingleProduct from "./singleproduct";
import { products } from "./products";

function PlaquePage() {
  const arrayDataItems = products.plaques.map((index) => (
    <SingleProduct
      img={index.img}
      name={index.name}
      price={index.price}
      link={index.link}
    />
  ));
  return <>{arrayDataItems}</>;
}

export default PlaquePage;
