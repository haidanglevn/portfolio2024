import { React, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="outline">
        <div className="logo">
          <Link to="/">DANG LE</Link>
        </div>
        <nav className="navbar">
          <Link to="/about">Projects</Link>
          <Link to="/about">About Me</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
