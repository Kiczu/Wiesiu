import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import logo from "../../assets/logo_wieslaw.webp";
import { HiMenu } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const scrollMenu = 0;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollMenu) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`menu ${location.pathname === '/' && !isSticky ? 'menu-home' : ''}`}>
      <ul className="menu-list">
        <FaShoppingCart className="cart-button" />
        <li className="menu-element">
          <Link to="/">Komiksy</Link>
        </li>
        <li className="menu-element">
          <Link to="/">Spotkania</Link>
        </li>
        <li className="menu-element">
          <Link to="/">Kolekcje</Link>
        </li>
        <li className="menu-element">
          <Link to="/">
            <img
              className={`logo-image ${isSticky ? "logo-animation" : ""}`}
              src={logo}
              alt="logo"
            />
          </Link>
        </li>
        <li className="menu-element">
          <Link to="/">Gadżety</Link>
        </li>
        <li className="menu-element">
          <Link to="/">Kontakt</Link>
        </li>
        <li className="menu-element menu-shop">
          <Link to="/shop">Sklep</Link>
        </li>
      </ul>
      <div className="mobile-menu">
        <div className="bar-container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <HiMenu onClick={toggleMenu} className="hamburger-icon" />
        </div>
        <ul
          className={`mobile-menu-list ${isMenuOpen ? "active" : "inactive"} `}
        >
          <li className="mobile-menu-element">
            <Link to="/">Komiksy</Link>
          </li>
          <li className="mobile-menu-element">
            <Link to="/">Spotkania</Link>
          </li>
          <li className="mobile-menu-element">
            <Link to="/">Kolekcje</Link>
          </li>
          <li className="mobile-menu-element">
            <Link to="/">Gadżety</Link>
          </li>
          <li className="mobile-menu-element">
            <Link to="/">Kontakt</Link>
          </li>
          <li className="mobile-menu-element">
            <Link to="/shop">Sklep</Link>
          </li>
          <li className="mobile-menu-element">
            <Link to="/">
              <FaShoppingCart className="cart-button" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
