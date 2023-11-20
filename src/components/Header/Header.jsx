import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import pokemon_logo from "../../static/pokemon_logo.webp";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link activeClassName="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={pokemon_logo} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

//react links in header?react links error useLocation() may be used only in the context of a <Router> component?
