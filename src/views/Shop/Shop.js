import React from "react";
import useShopData from "./useShopData";
import SortingSelect from "../../components/Selects/SortingSelects/SortingSelect";
import Filters from "./Filters/Filters";
import "../Shop/Shop.scss";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

const Shop = () => {
  const { products, visibleProducts, handleSelectChange, setProducts } =
    useShopData();

  return (
    <div className="product-list">
      <Filters />
      <div className="listing-column">
        <div className="sorting-filter">
          <SortingSelect
            onChange={handleSelectChange}
            products={products}
            setProducts={setProducts}
          />
        </div>
        <ProductsGrid products={visibleProducts}/>
      </div>
    </div>
  );
};

export default Shop;
