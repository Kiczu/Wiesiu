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
      <div className="listing-products-container">
        <div className="left-column categories-filter">
          {categories.map((category, i) => (
            <button
              className={`categories-filter-button ${
                Number(activeCategory) === category.id
                  ? "active-category-filter"
                  : ""
              }`}
              key={i}
              data-category-id={category.id}
              onClick={(e) => handleCategoryClick(e)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="right-column">
          <div className="sorting-filter">
            <div className="custom-select">
              <select>
                <option value="date">Data dodania</option>
                <option value="price">Cena</option>
                <option value="popularity">Popularność</option>
              </select>
            </div>
          </div>
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
                  alt={product.name}
                />
                <h2 className="product-title">{product.name}</h2>
                <p className="product-price">{product.price} zł</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Shop;