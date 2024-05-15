import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Nav">
      <header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
        >
          <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z" />
        </svg>
        <h2>Recipe Finder</h2>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
