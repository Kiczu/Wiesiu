import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import logo from "../../assets/logo_wieslaw.webp";
import { HiMenu } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollMenu = 1;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollMenu) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`menu ${isSticky ? "scrolled-menu" : ""}`}>
      <ul className="menu-list">
        <FaShoppingCart className="cart-button" />
        <li className="menu-element">
          <Link path="/">Komiksy</Link>
        </li>
        <li className="menu-element">
          <Link path="/">Spotkania</Link>
        </li>
        <li className="menu-element">
          <Link path="/">Kolekcje</Link>
        </li>
        <li className={`menu-element ${isSticky ? "logo-animation" : ""}`}>
          <Link className={`${isSticky ? "logo-animation" : ""}`} path="/">
            <img
              className={`${isSticky ? "logo-animation" : ""}`}
              src={logo}
              alt="logo"
            />
          </Link>
        </li>
        <li className="menu-element">
          <Link path="/">Gadżety</Link>
        </li>
        <li className="menu-element">
          <Link path="/">Kontakt</Link>
        </li>
        <li className="menu-element menu-shop">
          <Link path="/">Sklep</Link>
        </li>
      </ul>
      <div className="mobile-menu">
        <div className="bar-container">
          <Link path="/">
            <img src={logo} alt="logo" />
          </Link>
          <HiMenu onClick={toggleMenu} className="hamburger-icon" />
        </div>
        <ul
          className={`mobile-menu-list ${isMenuOpen ? "active" : "inactive"} `}
        >
          <li className="mobile-menu-element">
            <Link path="/">Komiksy</Link>
          </li>
          <li className="mobile-menu-element">
            <Link path="/">Spotkania</Link>
          </li>
          <li className="mobile-menu-element">
            <Link path="/">Kolekcje</Link>
          </li>
          <li className="mobile-menu-element">
            <Link path="/">Gadżety</Link>
          </li>
          <li className="mobile-menu-element">
            <Link path="/">Kontakt</Link>
          </li>
          <li className="mobile-menu-element">
            <Link path="/">Sklep</Link>
          </li>
          <li className="mobile-menu-element">
            <Link path="/">
              <FaShoppingCart className="cart-button" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
