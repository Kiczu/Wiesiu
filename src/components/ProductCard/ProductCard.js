import React from "react";
import imagePlaceholder from "../../assets/Placeholder_view.png";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <img
        className="product-image"
        src={product.images.length ? product.images[0].src : imagePlaceholder}
        alt={product.name}
      />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{product.price} zł</p>
    </div>
  );
};

export default ProductCard;
