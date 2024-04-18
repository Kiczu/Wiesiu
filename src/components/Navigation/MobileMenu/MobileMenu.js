import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { HOME, SHOP, CART } from "../../../paths";
import { HiMenu } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import "../MobileMenu/MobileMenu.scss";
import logo from "../../../assets/logo_wieslaw.webp";
import ItemsCounter from "../ItemsCounter/ItemsCounter";

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
        <div className="mobile-icons-container">
          <Link to={CART}>
            <i className="cart-icon">
              <IoCartOutline />
              <ItemsCounter />
            </i>
          </Link>
          <button onClick={toggleMenu} className="hamburger-button">
            <HiMenu className="hamburger-icon" />
          </button>
        </div>
      </div>
      <ul className={`mobile-menu-list ${isMenuOpen ? "active" : "inactive"} `}>
        <li className="mobile-menu-element">
          <Link to="/#bookstore">Księgarnia</Link>
        </li>
        <li className="mobile-menu-element">
          <Link to="/#meetings">Spotkania</Link>
        </li>
        <li className="mobile-menu-element">
          <Link to="/#colections">Kolekcje</Link>
        </li>
        <li className="mobile-menu-element">
          <Link to="/#gadgets">Gadżety</Link>
        </li>
        <li className="mobile-menu-element">
          <Link to="/#contact">Kontakt</Link>
        </li>
        <li className="mobile-menu-element">
          <Link to={SHOP}>Sklep</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
