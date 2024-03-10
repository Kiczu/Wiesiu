import React, { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import SinglePosition from "./SinglePosition/SinglePosition";
import Button from "../../components/Button/Button";
import "./Cart.scss";

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <section className="shopping-cart">
      <h1>Koszyk</h1>
      <div className="cart-product-list">
        <div className="cart-product-list-titles">
          <p></p>
          <p className="product-cart-thumbnail"></p>
          <p>Produkt</p>
          <p>Cena</p>
          <p>Ilość</p>
          <p className="product-cart-subtotal">Kwota</p>
        </div>
        {cartItems.map((product, index) => (
          <SinglePosition key={index} productData={product} />
        ))}
        <div className="cart-product-list-total-row">
          <div>
            <Button variant={"blue"} onClick={clearCart}>
              Wyczyść
            </Button>
          </div>
          <div>{`Razem: ${total} zł`}</div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
