import React from "react";
import navbarImg from "../logo.svg"

const Navbar = () => {
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={navbarImg} className="navbar-img" />
      </div>
    </nav>
  );
};

export default Navbar;
