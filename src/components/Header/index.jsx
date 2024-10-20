import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Home </Link>
      <Link to="/login">Login </Link>
      <Link to="/register">Register </Link>
      <br />
    </header>
  );
}

export default Header;
