import React, { useState } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">تجهیز صنعت پارس وی</div>
      <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
        <ul className="nav__list">
          <li > <Link className="nav__link" to="/"> خانه</Link> </li>
          <li > <Link className="nav__link" to="/AboutUs">درباره ما</Link> </li>
          <li > <Link className="nav__link" to="/ContactUs"> تماس باما</Link> </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>
    </header>
  );
};

export default Header;