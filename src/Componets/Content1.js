import React from "react";

function Content1() {
  return (
    <section className="content-1">
      <h3>Panadería Familiar</h3>
      <h1>
        Panes <br />
        <span className="letter-2">Orgánicos</span>
      </h1>
      <h4>
    <i> DeliPan </i>
      </h4>
      <div className="tracker">
        <div>
          <span className="text-h-1">ENCUÉNTRANOS</span>
          <br />
          <p className="text-find">121 Rock Street, 21</p>
          <p className="text-find">Avenue, New York, NY</p>
          <p className="text-find">92103-9000</p>
        </div>
        <div>
          <span className="text-h-2">HORAS</span>
          <br />
          <span className="fech">Lunes - Viernes</span>
          <p>9am – 7pm</p>
          <span className="fech">Sábado</span>
          <p>10am – 6pm</p>
        </div>
        <div>
          <span className="text-h-3">LLÁMANOS</span>
          <span className="number">1 (234) 567-891</span>
          <br />
          <span className="number">1 (234) 567-891</span>
        </div>
      </div>
    </section>
  );
}

export default Content1;
