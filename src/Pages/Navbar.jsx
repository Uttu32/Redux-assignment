import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <a>Home</a>
      </Link>
      <Link to="/list">
        <a>List</a>
      </Link>
    </div>
  );
};

export default Navbar;
