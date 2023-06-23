import React from "react";
import PlaquePage from "../components/Product/plaquePage";
import Footer from "../components/Footer/footer";

function Plaques() {
  return (
    <>
      <section id="page-header">
        <h2>Plaques</h2>
        <p>Find all the plaques we offer here!</p>
      </section>

      <section class="section-p1" id="product1">
        <div class="pro-container">
          <PlaquePage />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Plaques;
