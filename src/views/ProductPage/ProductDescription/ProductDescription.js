import React from "react";
import DOMPurify from "dompurify";
import imagePlaceholder from "../../../assets/Placeholder_view.png";
import ProductVariations from "../../../components/Selects/ProductVariations/ProductVariations";
import "./ProductDescription.scss";

const ProductDescription = ({ productData, productVariations }) => {
  const productId = productData.id;
  const dirtyDescription = productData.description;
  const description = DOMPurify.sanitize(dirtyDescription);

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
        <ProductVariations options={productVariations} productId={productId} />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default ProductDescription;
