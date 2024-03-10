import React, { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import CartContext from "../../../context/CartContext/CartContext";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import imagePlaceholder from "../../../assets/Placeholder_view.png";
import { Link } from "react-router-dom";
import "./SinglePosition.scss";

const SinglePosition = ({ productData }) => {
  const { removeFromCart } = useContext(CartContext);

  const total = productData.quantity * parseInt(productData.price);

  return (
    <div className="product-cart-row">
      <button
        onClick={() => removeFromCart(productData)}
        className="product-cart-remove"
      >
        <FaRegTrashCan />
      </button>
      <Link
        className="product-cart-thumbnail"
        to={`/products/${productData.id}`}
      >
        <div className="product-cart-thumbnail">
          <img
            src={productData.image || imagePlaceholder}
            alt={productData.name}
            width={100 + "px"}
          />
        </div>
      </Link>
      <Link className="product-cart-name" to={`/products/${productData.id}`}>
        <div>{productData.name}</div>
      </Link>
      <div className="product-cart-price">{productData.price} zł</div>
      <div>
        <ProductQuantity product={productData} />
      </div>
      <div className="product-cart-subtotal">{total} zł</div>
    </div>
  );
};

export default SinglePosition;
