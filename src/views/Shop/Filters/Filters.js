import React from "react";
import { FaFilter } from "react-icons/fa";
import useShopData from "../useShopData";
import SortingSelect from "../../../components/Selects/SortingSelects/SortingSelect";
import "./Filters.scss";

const Filters = () => {
  const {
    activeCategory,
    categories,
    isMenuOpen,
    products,
    handleCategoryClick,
    handleSelectChange,
    setProducts,
    toggleMenu,
  } = useShopData();
  return (
    <div className="product-filters">
      <button className="filter-button" onClick={toggleMenu}>
        Filtry <FaFilter />
      </button>
      <div
        className={`categories-filter ${isMenuOpen ? "active" : "inactive"}`}
      >
        <p className="categories-filter-title">Kategorie</p>
        {categories.map((category) => (
          <button
            className={`categories-filter-button ${
              activeCategory === category.id ? "active-category-filter" : ""
            }`}
            key={category.id}
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
  );
};

export default Filters;
