import React, { useState } from "react";
import "./Slider.scss";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import classNames from "classnames";

const products = [
  { id: 1, name: "Produkt 1", price: "$10" },
  { id: 2, name: "Produkt 2", price: "$20" },
  { id: 3, name: "Produkt 3", price: "$30" },
  { id: 4, name: "Produkt 4", price: "$40" },
  { id: 5, name: "Produkt 5", price: "$50" },
  { id: 6, name: "Produkt 6", price: "$500" },
  { id: 7, name: "Produkt 7", price: "$250" },
  { id: 8, name: "Produkt 8", price: "$250" },
  { id: 9, name: "Produkt 9", price: "$250" },
  { id: 10, name: "Produkt 10", price: "$250" },
];

const productsPerPage = 3;

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const sortProductsForSlider = (products) => {
    const result = [];

    for (let i = 0; i < products.length; i += productsPerPage) {
      const slide = products.slice(i, i + productsPerPage);
      result.push(slide);
    }
    return result;
  };

  const sortedProducts = sortProductsForSlider(products);

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const pagination = (e) => {
    const clickedElement = e.target;
    const buttonElement = clickedElement.closest("button");

    if (buttonElement) {
      const match = buttonElement.className.match(/page-(\d+)/);

      if (match) {
        const pageNumber = Number(match[1]);
        setCurrentPage(pageNumber);
      }
    }
  };

  let procentAnimation = currentPage * 100;

  const animation = {
    transform: `translateX(-${procentAnimation}%)`,
  };

  return (
    <div className="slider-container">
      <ul className="slider" style={animation}>
        {sortedProducts.map((slide, i) => (
          <li className="slide" key={i}>
            {slide.map((product, i) => (
              <div className="product-card" key={i}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <button className="prev-button" onClick={prevPage}>
        <BsFillArrowLeftCircleFill />
      </button>
      <button className="next-button" onClick={nextPage}>
        <BsFillArrowRightCircleFill />
      </button>
      <ul className="pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <li onClick={pagination} key={i}>
            <button className={`pagination-button page-${i}`}>
              <BsDot />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
