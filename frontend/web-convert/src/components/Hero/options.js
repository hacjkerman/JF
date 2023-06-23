import React from "react";
import frame from "./imgs/Frame.png";
import plaque from "./imgs/Plaque.png";
import custom from "./imgs/Custom.png";
import tutorial from "./imgs/Tutorial.png";
import support from "./imgs/Phone.png";

function options() {
  return (
    <>
      <section className="section-p1" id="feature">
        <div className="fe-box">
          <img src={frame} alt="" />
          <h6>Frames</h6>
        </div>
        <div className="fe-box">
          <img src={plaque} alt="" />
          <h6>Plaques</h6>
        </div>
        <div className="fe-box">
          <img src={custom} alt="" />
          <h6>Custom</h6>
        </div>
        <div className="fe-box">
          <img src={tutorial} alt="" />
          <h6>Tutorial</h6>
        </div>
        <div className="fe-box">
          <img src={support} alt="" />
          <h6>Support</h6>
        </div>
      </section>
    </>
  );
}

export default options;
