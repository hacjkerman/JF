import React from "react";
import logo from "./imgs/logo.png";

function Address() {
  return (
    <>
      <img class="logo" src={logo} alt="" />
      <h4>Contact</h4>
      <p>
        <strong>Address:</strong> 36/6 Jubilee Ave, Warriewood NSW 2102
      </p>
      <p>
        <strong>Phone:</strong> (02) 9999 1805
      </p>
      <p>
        <strong>Hours:</strong> 9:00 AM - 5:00 PM
      </p>
      <div class="follow">
        <h4>Follow Us</h4>
        <div class="icon">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-pinterest-p"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>
    </>
  );
}

export default Address;
