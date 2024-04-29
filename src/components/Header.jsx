import { React, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="header">
      <div className="outline">
        <div className="logo">
          <Link to="/">DANG LE</Link>
        </div>
        <nav className="navbar">
          <Link to="#" onClick={() => scrollToSection("featured-projects")}>
            Projects
          </Link>
          <Link to="/about">About Me</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
