import React from "react";
import useShopData from "./useShopData";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import imagePlaceholder from "../../assets/Placeholder_view.png";
import "../Shop/Shop.scss";

const Shop = () => {
  const { products, categories, activeCategory, handleCategoryClick } =
    useShopData();

  return (
    <>
      <SectionTitle>Sklep</SectionTitle>
      <div className="categories-filter">
        {categories.map((category, i) => (
          <button
            className={`categories-filter-button ${
              Number(activeCategory) === category.id ? "active" : ""
            }`}
            key={i}
            data-category-id={category.id}
            onClick={(e) => handleCategoryClick(e)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="listing-products-container">
        <ul className="listing-products-grid">
          {products.map((product, i) => (
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
