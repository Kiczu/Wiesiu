import React from "react";
import Slider from "../components/Slider/Slider";

const products = [
  { id: 1, name: "Produkt 1", price: "$10" },
  { id: 2, name: "Produkt 2", price: "$20" },
  { id: 3, name: "Produkt 3", price: "$30" },
  { id: 4, name: "Produkt 4", price: "$40" },
  { id: 5, name: "Produkt 5", price: "$50" },
  { id: 6, name: "Produkt 6", price: "$500" },
  { id: 7, name: "Produkt 7", price: "$250" },
  { id: 8, name: "Produkt 8", price: "$250" },
  { id: 9, name: "Produkt 9", price: "$250" },
  { id: 10, name: "Produkt 10", price: "$250" },
  { id: 11, name: "Produkt 11", price: "$250" },
];

const Home = () => {
  return (
    <>
      <Slider
        products={products}
        autoPlay={false}
        showProductsPerPage={3}
      />
      <div style={{ fontSize: 2 + "rem" }}>Nex sction after slider</div>
    </>
  );
};

export default Home;
