import React from "react";
import useShopData from "./useShopData";
import imagePlaceholder from "../../assets/Placeholder_view.png";
import SortingSelect from "../../components/Selects/SortingSelects/SortingSelect";
import { FaFilter } from "react-icons/fa";
import "../Shop/Shop.scss";

const Shop = () => {
  const {
    activeCategory,
    categories,
    handleCategoryClick,
    handleSelectChange,
    products,
    visibleProducts,
    setProducts,
    toggleMenu,
    isMenuOpen,
  } = useShopData();

  return (
    <>
      <h1 className="shop-title">Sklep</h1>
      <div className="product-list">
        <div className="product-filters">
          <button className="filter-button" onClick={toggleMenu}>
            Filtry <FaFilter />
          </button>
          <div
            className={`categories-filter ${
              isMenuOpen ? "active" : "inactive"
            }`}
          >
            <h2 className="categories-filter-title">Kategorie</h2>
            {categories.map((category, i) => (
              <button
                className={`categories-filter-button ${
                  Number(activeCategory) === category.id
                    ? "active-category-filter"
                    : ""
                }`}
                key={i}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
            <div className="sorting-filter-mobile">
              <SortingSelect
                onChange={handleSelectChange}
                products={products}
                setProducts={setProducts}
              />
            </div>
          </div>
        </div>
        <div className="listing-column">
          <div className="sorting-filter">
            <SortingSelect
              onChange={handleSelectChange}
              products={products}
              setProducts={setProducts}
            />
          </div>
          <ul className="listing-products-grid">
            {visibleProducts.map((product, i) => (
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
