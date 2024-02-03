import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Cart from "../../views/Cart/Cart";
import Home from "../../views/Home/Home";
import Shop from "../../views/Shop/Shop";
import ProductPage from "../../views/ProductPage/ProductPage";
import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = () => {
  return (
    <Router>
      <header className="menu-container menu">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />

          <Route path="/shop" exact element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Layout;
