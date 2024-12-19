// Menu.js
import React, { useRef, useEffect } from "react";

function Menu({ isMenuOpen }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.transform = isMenuOpen
        ? "translateX(0%)"
        : "translateX(-100%)";
    }
  }, [isMenuOpen]);

  return (
    <ul
      ref={menuRef}
      id="menu"
      className="menu"
      style={{
        transform: "translateX(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="align-li">
        <li>
          <a href="">esto es un elemento</a>
        </li>
      </div>
    </ul>
  );
}

export default Menu;
