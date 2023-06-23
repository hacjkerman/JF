import React from "react";
import Address from "./address";
import About from "./about";
import Account from "./account";
// import Install from "./install";

function Footer() {
  return (
    <>
      <footer className="section-p1">
        <div className="col">
          <Address />
        </div>
        <div className="col">
          <About />
        </div>

        <div className="col">
          <Account />
        </div>

        <div className="col install">{/* <Install /> */}</div>

        <div className="copyright">
          <p>
            © 2023, Jackson Frames. | All Rights Reserved. | Framing Your
            Achievements.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
