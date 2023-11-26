import React from "react";
import imagePlaceholder from "../../../assets/Placeholder_view.png";
import "./ProductsGrid.scss";

const ProductsGrid = ({products}) => {

    return(
        <ul className="listing-products-grid">
          {products.map((product, i) => (
            <li className="listing-products-grid-item" key={i}>
              <img
                className="product-image"
                src={
                  product.images.length
                    ? product.images[0].src
                    : imagePlaceholder
                }
                alt={product.name}
              />
              <p className="product-title">{product.name}</p>
              <p className="product-price">{product.price} zł</p>
            </li>
          ))}
        </ul>
    )
}

export default ProductsGrid;
