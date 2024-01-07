import React from "react";
import classNames from "classnames";
import { FaFilter } from "react-icons/fa";
import { useClickAway } from "@uidotdev/usehooks";
import SortingSelect from "../../../components/Selects/SortingSelects/SortingSelect";
import "./Filters.scss";

const Filters = ({
  activeCategory,
  categories,
  isFilterMenuOpen,
  handleCategoryClick,
  handleSelectChange,
  toggleMenu,
}) => {
  const filtersMenuToggle = classNames("categories-filter", {
    active: isFilterMenuOpen,
  });

  const ref = useClickAway(() => {
    if (isFilterMenuOpen === false) return;

     toggleMenu();
  });

  return (
    <div ref={ref} className="product-filters">
      <button className="filter-button" onClick={toggleMenu}>
        Filtry
        <i>
          <FaFilter />
        </i>
      </button>
      <div className={filtersMenuToggle}>
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
          <SortingSelect onChange={handleSelectChange} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
