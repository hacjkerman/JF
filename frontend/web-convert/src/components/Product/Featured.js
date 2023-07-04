import React from "react";
import one from "./imgs/1.jpg";
import two from "./imgs/2.JPG";
import three from "./imgs/3.JPG";
import four from "./imgs/4.JPG";
import five from "./imgs/5.JPG";
import six from "./imgs/6.JPG";
import seven from "./imgs/7.JPG";
import eight from "./imgs/8.JPG";
import SingleProduct from "./singleproduct";

function Featured() {
  return (
    <>
      <section class="section-p1" id="product1">
        <h2>Popular Range</h2>
        <p>University's Best Sellers</p>
        <div class="pro-container">
          <SingleProduct img={one} name="Embassy" price="$189" type="Frames" />
          <SingleProduct
            img={two}
            name="Majestic Satin"
            price="$189"
            type="Frames"
          />
          <SingleProduct
            img={three}
            name="Majestic Gold"
            price="$189"
            type="Frames"
          />
          <SingleProduct
            img={four}
            name="Signature Gold"
            price="$189"
            type="Frames"
          />
          <SingleProduct
            img={five}
            name="Modern Black"
            price="$189"
            type="Frames"
          />
          <SingleProduct
            img={six}
            name="Signature Gun Metal"
            price="$189"
            type="Frames"
          />
          <SingleProduct
            img={seven}
            name="Graduate"
            price="$189"
            type="Frames"
          />
          <SingleProduct
            img={eight}
            name="Prestige Gold"
            price="$189"
            type="Frames"
          />
        </div>
        <div>
          <a href="/frames">
            <button className="normal">Show More</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Featured;
