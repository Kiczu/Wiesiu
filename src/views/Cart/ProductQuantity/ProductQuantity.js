import React, { useState } from "react";
import "./ProductQuantity.scss";

const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(0);

    const plusQuantity = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    };
  
    const minusQuantity = () => {
      if (quantity === 0) return;
  
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    };

    return(
        <div className="product-cart-quantity">
        <button
          type="button"
          onClick={minusQuantity}
          className="product-cart-quantity--button"
        >
          -
        </button>
        <input
          className="product-cart-quantity--number"
          type="number"
          value={quantity}
          onChange={(e) =>
            setQuantity(parseInt(e.target.value, 10) || 0)
          }
        />
        <button
          type="button"
          onClick={plusQuantity}
          className="product-cart-quantity--button"
        >
          +
        </button>
      </div>
    )
}

export default ProductQuantity;