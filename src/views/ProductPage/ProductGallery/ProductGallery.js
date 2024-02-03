import React from "react";
import "./ProductGallery.scss";

const ProductGallery = ({ productGallery }) => {
  return (
    <div className="gallery-product-container">
      <ul className="gallery-product">
        {productGallery.map((image, i) => (
          <li className="gallery-product-element" key={i}>
            <img src={image.src} alt={image.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductGallery;
