import React, { useState } from "react";
import logo from "./imgs/logo.png";
import Navbaritems from "./navbaritems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  // TODO Fix Menubar resetting to home page on click of close icon
  const [menuBar, setMenuBar] = useState(false);

  const handleToggle = () => {
    setMenuBar((current) => !current);
    const nav = document.getElementById("navbar");
    if (menuBar === true) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  };

  return (
    <>
      <div id="header">
        <a href="/">
          <img src={logo} className="logo" alt="" />
        </a>
        <div id="mobile">
          <FontAwesomeIcon icon={faBars} onClick={handleToggle} />
        </div>
        <ul id="navbar">
          <Navbaritems page="/" name="Home" />
          <Navbaritems page="/frames" name="Frames" />
          <Navbaritems page="/plaques" name="Plaques" />
          <Navbaritems page="/about" name="About" />
          <Navbaritems page="/contact" name="Contact" />

          <a href="/" id="close" onClick={handleToggle}>
            <i className="far fa-times"></i>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
