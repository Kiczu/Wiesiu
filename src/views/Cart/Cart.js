import React, { useEffect, useState } from "react";
import SinglePosition from "./SinglePosition/SinglePosition";
import "./Cart.scss";
import woocommerceServices from "../../services/woocommerceService";

const Cart = ({ products }) => {
  const [cart, setCart] = useState([]);

  const productsTest = [
    {
      id: 123,
      name: "Nowy produkt",
      quantity: 1,
      price: "10.00",
    },
    {
      id: 124,
      name: "Nowy produkt2",
      quantity: 1,
      price: "12.00",
    },
  ];

  const saveToLocalStorage = () => {
    localStorage.setItem('cartData', JSON.stringify(productsTest));
  };
  saveToLocalStorage();

//   const readFromLocalStorage = () => {
//     const storedData = localStorage.getItem('mojeKluczoweDane');
//     if (storedData) {
//       // Jeżeli dane istnieją w localStorage, możesz je odczytać
//       const parsedData = JSON.parse(storedData);
//       console.log('Odczytane dane:', parsedData);
//     } else {
//       console.log('Brak danych w localStorage');
//     }
//   };

  useEffect(() => {
    // const getCart = async () => {
    //   try {
    //     const data = await woocommerceServices.getCart();
    //     setCart(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // getCart();
  }, []);
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
        <SinglePosition />
      </div>
    </section>
  );
};

export default Cart;
