import React from "react";
import Button from "../../../components/Button/Button";
import imagePlaceholder from "../../../assets/Placeholder_view.png";
import "./ProductDescription.scss";

const ProductDescription = ({ productData }) => {
  return (
    <div className="desc-container">
      <div className="product-page-image-container">
        <img
          className="product-page-image"
          src={productData.images[0]?.src || imagePlaceholder}
          alt={productData.alt}
        />
      </div>
      <div className="product-page-desc-container">
        <h1 className="product-page-name">{productData.name}</h1>
        <p className="product-page-price">{productData.price} zł</p>
        <Button variant={"blue"}>Dodaj do koszyka</Button>
        <p>{productData.description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
