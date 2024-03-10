import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) return;
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const isItemInCart = cartItems.find((item) => item.id === product.id);
    if (isItemInCart) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const minusQuantity = (product) => {
    const isItemInCart = cartItems.find((item) => item.id === product.id);
    if (isItemInCart.quantity === 1) {
      removeFromCart(product);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (product) => {
    const filteredCard = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filteredCard);
    localStorage.setItem("cart", JSON.stringify(filteredCard));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        removeFromCart,
        getCartTotal,
        minusQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
