import React from "react";
import ReactDOM from "react-dom/client";
import CartProvider from "./context/CartContext/CartProvider";
import Layout from "./components/Layout/Layout";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Layout />
    </CartProvider>
  </React.StrictMode>
);
