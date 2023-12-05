import React from "react";
import useShopData from "./useShopData";
import SortingSelect from "../../components/Selects/SortingSelects/SortingSelect";
import Filters from "./Filters/Filters";
import "../Shop/Shop.scss";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

const Shop = () => {
  const {
    activeCategory,
    categories,
    isFilterMenuOpen,
    products,
    handleCategoryClick,
    handleSelectChange,
    setProducts,
    visibleProducts,
    toggleMenu,
  } = useShopData();

  return (
    <div className="product-list">
      <Filters
        activeCategory={activeCategory}
        categories={categories}
        isFilterMenuOpen={isFilterMenuOpen}
        products={products}
        handleCategoryClick={handleCategoryClick}
        handleSelectChange={handleSelectChange}
        setProducts={setProducts}
        toggleMenu={toggleMenu}
      />
      <div className="listing-column">
        <div className="sorting-filter">
          <SortingSelect
            onChange={handleSelectChange}
            products={products}
            setProducts={setProducts}
          />
        </div>
        <ProductsGrid products={visibleProducts} />
      </div>
    </div>
  );
};

export default Shop;
