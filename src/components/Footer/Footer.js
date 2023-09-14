import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-element">
        <p className="footer-element-txt">Copyright MAMYTO</p>
      </div>
      <div className="footer-element">
        <p className="footer-element-txt"><Link path="/">Regulamin</Link></p>
      </div>
      <div className="footer-element">
        <p className="footer-element-txt"><Link path="/">Polityka prywatności</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
