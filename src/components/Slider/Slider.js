import React from "react";
import PaginationDots from "./PaginationDots/PaginationDots";
import useSliderData from "./useSliderData";
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
  const { nextPage, pagination, prevPage, slide, totalPages,widthProduct } =
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
              <img
                className="product-image"
                src="https://wiesiu.pl/wp-content/uploads/2021/11/Tom_01-500x500.png"
                alt=""
              />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
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
