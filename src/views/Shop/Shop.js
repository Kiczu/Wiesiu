import React from "react";
import useShopData from "./useShopData";
import Filters from "./Filters/Filters";
import ProductsGrid from "./ProductsGrid/ProductsGrid";
import SortingSelect from "../../components/Selects/SortingSelects/SortingSelect";
import "../Shop/Shop.scss";

const Shop = () => {
  const {
    activeCategory,
    categories,
    isFilterMenuOpen,
    handleCategoryClick,
    handleSelectChange,
    visibleProducts,
    toggleMenu,
    isLoadingCategories,
    isLoadingProducts,
  } = useShopData();

  return (
    <div className="product-list">
      <Filters
        activeCategory={activeCategory}
        categories={categories}
        isFilterMenuOpen={isFilterMenuOpen}
        handleCategoryClick={handleCategoryClick}
        handleSelectChange={handleSelectChange}
        toggleMenu={toggleMenu}
        isLoading={isLoadingCategories}
      />
      <div className="listing-column">
        <div className="sorting-filter">
          <SortingSelect
            onChange={handleSelectChange}
          />
        </div>
        <ProductsGrid products={visibleProducts} isLoading={isLoadingProducts} />
      </div>
    </div>
  );
};

export default Shop;
