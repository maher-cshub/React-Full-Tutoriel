import React from "react";
import "./Header.css";
import pokemon_logo from "../../static/pokemon_logo.webp";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#home" class="active">
              Home
            </a>
          </li>
          <li>
            <img src={pokemon_logo} alt="" />
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

//src of image in react ?
