import React from "react";
import classNames from "classnames";
import { HashLink as Link } from "react-router-hash-link";
import { HOME, SHOP } from "../../../paths";
import { IoCartOutline } from "react-icons/io5";
import "./DesktopMenu.scss";
import logo from "../../../assets/logo_wieslaw.webp";

const DesktopMenu = ({ isSticky }) => {
  const logoAnimation = classNames("logo-image", {
    "logo-animation": isSticky,
  });

  return (
    <ul className="menu-list">
      <Link to="/">
        <i className="cart-icon">
          <IoCartOutline />
        </i>
      </Link>
      <li className="menu-element">
        <Link to="/#bookstore">Księgarnia</Link>
      </li>
      <li className="menu-element">
        <Link to="/#meetings">Spotkania</Link>
      </li>
      <li className="menu-element">
        <Link to="/#colections">Kolekcje</Link>
      </li>
      <li className="menu-element">
        <Link to={HOME}>
          <img className={logoAnimation} src={logo} alt="logo" />
        </Link>
      </li>
      <li className="menu-element">
        <Link to="/#gadgets">Gadżety</Link>
      </li>
      <li className="menu-element">
        <Link to="/#contact">Kontakt</Link>
      </li>
      <li className="menu-element menu-shop">
        <Link to={SHOP}>Sklep</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
