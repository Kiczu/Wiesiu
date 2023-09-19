import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import classNames from "classnames";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const scrollMenu = 0;

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const navigationClass = classNames("menu", {
    "menu-home": location.pathname === "/" && !isSticky,
  });

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
    <nav className={navigationClass}>
      <DesktopMenu />
      <MobileMenu isSticky={isSticky} />
    </nav>
  );
};

export default Navigation;
