import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="menu-container menu">
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
