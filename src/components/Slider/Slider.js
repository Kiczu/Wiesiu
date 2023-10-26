import React from "react";
import useSliderData from "./useSliderData";
import ProductCard from "../ProductCard/ProductCard";
import PaginationDots from "./PaginationDots/PaginationDots";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./Slider.scss";

const Slider = ({
  autoPlay = false,
  autoPlayDuration,
  gap = 20,
  products,
  showDots = true,
  showProductsPerPage = 3,
}) => {
  const { nextPage, pagination, prevPage, slide, totalPages, widthProduct } =
    useSliderData({
      autoPlay,
      autoPlayDuration,
      gap,
      products,
      showProductsPerPage,
    });

  return (
    <div className="slider-container">
      <div className="slider">
        <ul style={slide} className="slide">
          {products.map((product, i) => (
            <li style={widthProduct} className="product-card" key={i}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <button className="prev-button" onClick={prevPage}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button className="next-button" onClick={nextPage}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      {showDots ? (
        <PaginationDots totalPages={totalPages} goToPage={pagination} />
      ) : null}
    </div>
  );
};

export default Slider;
