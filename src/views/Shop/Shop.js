import React, { useEffect, useState } from "react";
import useWooCommerce from "../../hooks/useWooCommerceProducts";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import imagePlaceholder from "../../assets/Placeholder_view.png";
import "../Shop/Shop.scss";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const allProducts = useWooCommerce.useAllProducts();

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  return (
    <>
      <SectionTitle>Sklep</SectionTitle>
      <div className="listing-products-container">
        <ul className="listing-products-grid">
          {allProducts.map((product, i) => (
            <li className="listing-products-grid-item" key={i}>
              <img
                className="product-image"
                src={
                  product.images.length
                    ? product.images[0].src
                    : imagePlaceholder
                }
                alt=""
              />
              <h2 className="product-title">{product.name}</h2>
              <p className="product-price">{product.price} zł</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Shop;
