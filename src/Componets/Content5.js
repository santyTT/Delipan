// Content5.js
import React from "react";
import Img1 from "./Background-img/pan-god.jpg"; // Asegúrate de cambiar la ruta
import Img2 from "./Background-img/chico-Pan.jpg"; // Asegúrate de cambiar la ruta

function Content5() {
  return (
    <section className="content-5">
      <div className="ilusion">
        <h2>Delicioso horneado. Excepcional Calidad.</h2>
        <img src={Img1} alt="" className="image1" />
        <img src={Img2} alt="chicopan" className="image2" />
      </div>
      <h3>Producimos deliciosos panes, bollos y otros productos</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <button>APRENDER MÁS</button>
    </section>
  );
}

export default Content5;
