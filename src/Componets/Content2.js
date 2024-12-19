// Content2.js
import React from "react";
import contentPan1 from "./Background-img/Content-1.png"; // Asegúrate de cambiar la ruta
import contentPan2 from "./Background-img/Content-2.png"; // Asegúrate de cambiar la ruta
import contentPan3 from "./Background-img/Content-3.png"; // Asegúrate de cambiar la ruta
import contentPan4 from "./Background-img/Content-4.png"; // Asegúrate de cambiar la ruta
import contentPan5 from "./Background-img/Content-5.png"; // Asegúrate de cambiar la ruta
import contentPan6 from "./Background-img/Content-6.png"; // Asegúrate de cambiar la ruta

function Content2() {
  return (
    <section className="content-2">
      <h2>Delicioso horneado</h2>
      <div className="box-align">
        <div className="ex-box">
          <img src={contentPan1} alt="Pan Blanco" className="img-content-2" />
          <div>
            <h3>Horneado Fresco Diario</h3>
            <br />
            <p>
              Nuestro pan se hornea fresco todos los días, no contiene
              conservantes y es de muy alta calidad. Además es especialmente
              agradable y suave.
            </p>
          </div>
        </div>
        <div className="ex-box">
          <img src={contentPan2} alt="Pan Blanco" className="img-content-2" />
          <div>
            <h3>Gran Valor</h3>
            <br />
            <p>
              Con los precios más competitivos del mercado, podemos ofrecer
              un gran valor sin comprometer el sabor.
            </p>
          </div>
        </div>
        <div className="ex-box">
          <img src={contentPan3} alt="Pan Blanco" className="img-content-2" />
          <div>
            <h3>Instituciones</h3>
            <br />
            <p>
              Prestamos servicios a una amplia gama de instituciones,
              incluidas universidades, aerolíneas, hoteles y escuelas.
            </p>
          </div>
        </div>
        <div className="ex-box">
          <img src={contentPan4} alt="Pan Blanco" className="img-content-2" />
          <div>
            <h3>Entrega a su puerta</h3>
            <br />
            <p>
              Texto de muestra. Haga clic para seleccionar el cuadro de
              texto. Haga clic nuevamente o haga doble clic para comenzar a
              editar el texto.
            </p>
          </div>
        </div>
        <div className="ex-box">
          <img src={contentPan5} alt="Pan Blanco" className="img-content-2" />
          <div>
            <h3>Pedidos Buenos y calientes</h3>
            <br />
            <p>
              Texto de muestra. Haga clic para seleccionar el cuadro de
              texto. Haga clic nuevamente o haga doble clic para comenzar a
              editar el texto.
            </p>
          </div>
        </div>
        <div className="ex-box">
          <img src={contentPan6} alt="Pan Blanco" className="img-content-2" />
          <div>
            <h3>Delicioso Horneado</h3>
            <br />
            <p>
              Texto de muestra. Haga clic para seleccionar el cuadro de
              texto. Haga clic nuevamente o haga doble clic para comenzar a
              editar el texto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content2;
