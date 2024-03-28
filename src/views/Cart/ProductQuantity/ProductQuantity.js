import React, { useContext } from "react";
import CartContext from "../../../context/CartContext/CartContext";
import "./ProductQuantity.scss";

const ProductQuantity = ({ product, updateQuantity }) => {
  const { addToCart, minusQuantity } = useContext(CartContext);
  return (
    <div className="product-cart-quantity">
      <button
        type="button"
        onClick={() => minusQuantity(product)}
        className="product-cart-quantity--button"
      >
        -
      </button>
      <input
        className="product-cart-quantity--number"
        type="number"
        value={product.quantity}
        onChange={(e) => updateQuantity(parseInt(e.target.value, 10) || 1)}
      />
      <button
        type="button"
        onClick={() => addToCart(product)}
        className="product-cart-quantity--button"
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
