import React from "react";
import { Link } from "react-router-dom";
import imagePlaceholder from "../../assets/Placeholder_view.png";
import { IoCartOutline } from "react-icons/io5";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <Link className="product-link" to={`/products/${product.id}`}>
      <div className="product">
        <div className="product-image-container">
          <img
            className="product-image"
            src={
              product.images[0]?.src || imagePlaceholder
            }
            alt={product.name}
          />
          <span className="product-overlay">
            <IoCartOutline className="product-overlay-icon" />
          </span>
        </div>
        <strong className="product-name">{product.name}</strong>
        <p className="product-price">{product.price} zł</p>
      </div>
    </Link>
  );
};

export default ProductCard;
