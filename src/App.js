import "./styles.sass";
import "./styles.css";
import "./nav";

import React, { useState, useRef } from "react";
import Header from "./Componets/Header";
import Menu from "./Componets/Menu";
import Content1 from "./Componets/Content1";
import Content2 from "./Componets/Content2";
import Content3 from "./Componets/Content3";
import Content4 from "./Componets/Content4";
import Content5 from "./Componets/Content5";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const htmlRef = useRef(document.documentElement);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    htmlRef.current.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <div>
      {/* Encabezado y Menú */}
      <Header toggleMenu={toggleMenu} />
      <Menu isMenuOpen={isMenuOpen} />

      {/* Contenido Principal */}
      <main>
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Content5 />
      </main>
    </div>
  );
}

export default App;
