import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Home from "../../views/Home/Home";
import ProductPage from "../../views/ProductPage/ProductPage";
import Shop from "../../views/Shop/Shop";
import Cart from "../../views/Cart/Cart";
import { CART, HOME, PRODUCT, SHOP } from "../../paths";
import "./Layout.scss";

const Layout = () => {
  return (
    <Router basename="/Wiesiu">
      <header className="menu-container menu">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path={HOME} exact element={<Home />} />
          <Route path={PRODUCT} element={<ProductPage />} />

          <Route path={SHOP} exact element={<Shop />} />
          <Route path={CART} exact element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Layout;
