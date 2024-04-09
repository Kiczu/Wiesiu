import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext/CartContext";
import woocommerceServices from "../../services/woocommerceService";
import SinglePosition from "./SinglePosition/SinglePosition";
import Button from "../../components/Button/Button";
import Slider from "../../components/Slider/Slider";
import "./Cart.scss";
import SkeletonSlider from "../../components/SkeletonComponents/SekeletonSlider/SkeletonSlider";

const Cart = () => {
  const [theBestSellers, setTheBestSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cartItems, clearCart } = useContext(CartContext);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await woocommerceServices.getProducts();
        const sortedProducts = data.sort(
          (a, b) => b.total_sales - a.total_sales
        );
        setTheBestSellers(sortedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getAllProducts();
  }, []);

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
            <SkeletonSlider cards={3} />
          ) : (
            <Slider products={theBestSellers} />
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
