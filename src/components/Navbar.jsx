import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Header">
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>MyApp</h1>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/product">All Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account">Account</Link>
          <Link to="/Cart"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
          <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
          </svg>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
