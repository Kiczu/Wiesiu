import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import Placeholder from "../../../assets/Placeholder_view.png";
import "./SinglePosition.scss";

const SinglePosition = ({ productData }) => {
  return (
    <div className="product-cart-row">
      <button className="product-cart-remove">
        <FaRegTrashCan />
      </button>
      <div className="product-cart-thumbnail">
        <img src={Placeholder} alt="" width={100 + "px"} />
      </div>
      <div className="product-cart-name">
        Tom 1 - O Wiesławie i słonecznym koniu
      </div>
      <div className="product-cart-price">dasdasd</div>
      <div>
        <ProductQuantity />
      </div>
      <div className="product-cart-subtotal">sadasd</div>
    </div>
  );
};

export default SinglePosition;
