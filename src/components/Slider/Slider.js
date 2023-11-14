import React, { useRef } from "react";
import PaginationDots from "./PaginationDots/PaginationDots";
import useSliderData from "./useSliderData";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import imagePlaceholder from "../../assets/Placeholder_view.png";
import "./Slider.scss";

const Slider = ({
  autoPlay = false,
  autoPlayDuration,
  gap = 20,
  products,
  showDots = true,
  showProductsPerPage = 3,
}) => {
  const sliderContainerRef = useRef(null);

  const { slide, totalPages, widthProduct, nextPage, pagination, prevPage } =
    useSliderData({
      autoPlay,
      autoPlayDuration,
      gap,
      products,
      showProductsPerPage,
      sliderContainerRef,
    });

  return (
    <div ref={sliderContainerRef} className="slider-container">
      <div className="slider">
        <ul style={slide} className="slide">
          {products.map((product, i) => (
            <li style={widthProduct} className="product-card" key={i}>
              <img
                className="product-image"
                src={
                  product.images.length
                    ? product.images[0].src
                    : imagePlaceholder
                }
                alt=""
              />
              <h2 className="product-title">{product.name}</h2>
              <p className="product-price">{product.price} zł</p>
            </li>
          ))}
        </ul>
        <button className="arrow-button prev-button" onClick={prevPage}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button className="arrow-button next-button" onClick={nextPage}>
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
