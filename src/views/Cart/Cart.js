import React, { useEffect, useState } from "react";
import SinglePosition from "./SinglePosition/SinglePosition";
import "./Cart.scss";
import woocommerceServices from "../../services/woocommerceService";

const Cart = () => {
  const [productsCart, setProductsCart] = useState([]);

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const getCart = async () => {
      try {
        const data = await woocommerceServices.getProductsByIds(storedCart);
        setProductsCart(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCart();
  }, []);

  if (!productsCart) return "Koszyk jest pusty";

  return (
    <section className="schopping-cart">
      <div className="cart-product-list">
        <div className="cart-product-list-titles">
          <p></p>
          <p></p>
          <p>Produkt</p>
          <p>Cena</p>
          <p>Ilość</p>
          <p>Kwota</p>
        </div>
        {productsCart.forEach(productData => {
          <SinglePosition productData={productData}/>

        })}
      </div>
    </section>
  );
};

export default Cart;
