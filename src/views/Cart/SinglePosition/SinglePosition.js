import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import imagePlaceholder from "../../../assets/Placeholder_view.png";
import "./SinglePosition.scss";

const SinglePosition = ({ productData }) => {
  debugger
  console.log(productData);
  return (
    <div className="product-cart-row">
      <button className="product-cart-remove">
        <FaRegTrashCan />
      </button>
      <div className="product-cart-thumbnail">
        <img
          src={productData.images[0]?.src || imagePlaceholder}
          alt={productData.name}
          width={100 + "px"}
        />
      </div>
      <div className="product-cart-name">{productData.name}</div>
      <div className="product-cart-price">{productData.price}</div>
      <div>
        <ProductQuantity />
      </div>
      <div className="product-cart-subtotal">sadasd</div>
    </div>
  );
};

export default SinglePosition;
