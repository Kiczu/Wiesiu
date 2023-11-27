import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./ProductsGrid.scss";

const ProductsGrid = ({ products }) => {
  return (
    <ul className="listing-products-grid">
      {products.map((product, i) => (
        <li key={i} className="listing-products-grid-item">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsGrid;
