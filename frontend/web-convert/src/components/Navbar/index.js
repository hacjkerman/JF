import React from "react";
import logo from "./imgs/logo.png";
import Navbaritems from "./navbaritems";
const Navbar = () => {
  // Script for navigation bar
  const close = document.getElementById("close");
  const bar = document.getElementById("bar");
  const nav = document.getElementById("navbar");

  if (bar) {
    bar.addEventListener("click", () => {
      nav.classList.add("active");
    });
  }
  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }

  return (
    <>
      <div id="header">
        <a href="/">
          <img src={logo} className="logo" alt="" />
        </a>
        <ul id="navbar">
          <Navbaritems page="/" name="Home" />
          <Navbaritems page="/frames" name="Frames" />
          <Navbaritems page="/plaques" name="Plaques" />
          <Navbaritems page="/about" name="About" />
          <Navbaritems page="/contact" name="Contact" />

          <a href="/" id="close">
            <i className="far fa-times"></i>
          </a>
        </ul>
      </div>
      <div id="mobile">
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </>
  );
};

export default Navbar;
