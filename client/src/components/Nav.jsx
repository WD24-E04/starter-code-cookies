import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  return (
    <nav className="nav-container">
      <Link to="/login" className="nav-link login">
        Login
      </Link>
      <Link to="/register" className="nav-link register">
        Register
      </Link>
    </nav>
  );
};

export default Nav;
