import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import SkeletonProductCard from "../../../components/SkeletonComponents/SkeletonProductCard/SkeletonProductCard";
import "./ProductsGrid.scss";

const ProductsGrid = ({ products, isLoading }) => {

  return (
    <ul className="listing-products-grid">
      {isLoading && <SkeletonProductCard itemsCount={9} />}
      
      {products.map((product, i) => (
        <li key={i} className="listing-products-grid-item">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsGrid;
