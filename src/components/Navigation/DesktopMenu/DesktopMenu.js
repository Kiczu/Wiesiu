import React from "react";
import { Link } from "react-router-dom";
import {HOME, SHOP} from "../../../paths";
import classNames from "classnames";
import "./DesktopMenu.scss";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../../assets/logo_wieslaw.webp";

const DesktopMenu = ({isSticky}) => {

  const logoAnimation = classNames("logo-image", {
    "logo-animation": isSticky
  })

  return (

      <ul className="menu-list">
        <Link to="/">
          <FaShoppingCart className="cart-button" />
        </Link>
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
          <Link to={HOME}>
            <img
              className={logoAnimation}
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
          <Link to={SHOP}>Sklep</Link>
        </li>
      </ul>
  );
};

export default DesktopMenu;
