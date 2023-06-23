import React from "react";
import FramePage from "../components/Product/framePage";
import Footer from "../components/Footer/footer";

function Frames() {
  return (
    <>
      <section id="page-header">
        <h2>Frames</h2>
        <p>Find all the frames we offer here!</p>
      </section>

      <section class="section-p1" id="product1">
        <div class="pro-container">
          <FramePage />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Frames;
