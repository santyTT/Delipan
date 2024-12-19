// Header.js
import React from "react";
import logo from "./favicon.png";


function Header({ toggleMenu }) {
  return (
    <header>
      <nav>
        <h2>  <img src={logo} alt="Pan Blanco" className="logo-nav" /> DeliPan</h2>
        <span
          id="menu-hamburger"
          className="menu-hamburger"
          onClick={toggleMenu}
        >
          &#9776;
        </span>
      </nav>
    </header>
  );
}

export default Header;
