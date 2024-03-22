import React, { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CartContext from "../../../context/CartContext/CartContext";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import imagePlaceholder from "../../../assets/Placeholder_view.png";
import "./SinglePosition.scss";

const SinglePosition = ({ productData }) => {
  const { removeFromCart } = useContext(CartContext);

  const total = productData.quantity * parseInt(productData.price);
  const productName = productData.parent_name || productData.name;
  const imageSource =
    typeof productData.image === "string"
      ? productData.image || imagePlaceholder
      : productData.image.src || imagePlaceholder;

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
        <img src={imageSource} alt={productData.name} width={100} />
      </Link>
      <Link className="product-cart-name" to={`/products/${productData.id}`}>
        <div>{productName}</div>
        {productData.attributes.length > 0 && (
          <div className="product-cart-attributes">
            {productData.attributes.map((attribute, i) => (
              <p key={i}>{`${attribute.name} : ${attribute.option}`}</p>
            ))}
          </div>
        )}
      </Link>
      <div className="product-cart-price">{`${productData.price} zł`}</div>
      <div>
        <ProductQuantity product={productData} />
      </div>
      <div className="product-cart-subtotal">{`${total} zł`}</div>
    </div>
  );
};

export default SinglePosition;
