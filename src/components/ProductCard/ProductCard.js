import React from "react";

const ProductCard = ({ product, imagePlaceholder }) => {
  return (
    <>
      <img
        className="product-image"
        src={product.images.length ? product.images[0].src : imagePlaceholder}
        alt=""
      />
      <h2>{product.name}</h2>
      <p>{product.price} zł</p>
    </>
  );
};

export default ProductCard;
