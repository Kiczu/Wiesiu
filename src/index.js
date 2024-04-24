import React from "react";
import ReactDOM from "react-dom/client";
import CartProvider from "./context/CartContext/CartProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CART, HOME, PRODUCT, SHOP } from "./paths";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import ProductPage from "./views/ProductPage/ProductPage";
import Shop from "./views/Shop/Shop";
import Cart from "./views/Cart/Cart";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router basename="/Wiesiu">
        <Routes>
          <Route path={HOME} element={<Layout />}>
            <Route path={HOME} exact element={<Home />} />
            <Route path={PRODUCT} element={<ProductPage />} />

            <Route path={SHOP} exact element={<Shop />} />
            <Route path={CART} exact element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>
);
