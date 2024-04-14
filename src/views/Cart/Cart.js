import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext/CartContext";
import useAllProducts from "../../hooks/useGetAllProducts";
import SinglePosition from "./SinglePosition/SinglePosition";
import Button from "../../components/Button/Button";
import Slider from "../../components/Slider/Slider";
import SkeletonSlider from "../../components/SkeletonComponents/SekeletonSlider/SkeletonSlider";
import "./Cart.scss";

const Cart = () => {
  const [theBestSellers, setTheBestSellers] = useState([]);
  const { cartItems, clearCart } = useContext(CartContext);
  const { products, isLoading } = useAllProducts();

  useEffect(() => {
    const sortedProducts = products.sort(
      (a, b) => b.total_sales - a.total_sales
    );
    setTheBestSellers(sortedProducts);
  }, [products]);

  const total = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <>
      <section className="cart-section">
        <h1 className="cart-section-title">Koszyk</h1>
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
        <Button variant={"blue"}>Przejdź do zamówienia</Button>
      </section>
      <section className="cart-section">
        <h2 className="cart-section-title">Najlepiej sprzedawane</h2>
        <div className="slider-conatiner">
          {isLoading ? (
            <SkeletonSlider itemsCount={3} />
          ) : (
            <Slider products={theBestSellers} />
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
