import React, { useState } from "react";
import { Link } from "react-router-dom";
import {HOME, SHOP} from "../../../paths";
import { HiMenu } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import "../MobileMenu/MobileMenu.scss";
import logo from "../../../assets/logo_wieslaw.webp";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="mobile-menu">
      <div className="bar-container">
        <Link to={HOME}>
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <Link to="/">
            <FaShoppingCart className="cart-button" />
          </Link>
          <HiMenu onClick={toggleMenu} className="hamburger-icon" />
        </div>
      </div>
      <ul className={`mobile-menu-list ${isMenuOpen ? "active" : "inactive"} `}>
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
          <Link to={SHOP}>Sklep</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
