import { useEffect, useState } from "react";
import { groupPerSlide } from "./slider.helpers";

const useSliderData = ({
  autoPlay,
  autoPlayDuration,
  gap,
  products,
  showProductsPerPage,
  sliderContainerRef,
}) => {
  const [productsPerPage, setProductsPerPage] = useState(showProductsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [translateSliderWidth, setTranslateSliderWidth] = useState(0);
  const [newProductWidth, setNewProductWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const productWidth =
    (screenWidth - gap * (productsPerPage - 1)) / productsPerPage;
  const productWithSpacing = productWidth + gap;
  const sliderWidth = productWithSpacing * products.length;
  const fullSlideWidth = currentPage * productWithSpacing * productsPerPage;

  useEffect(() => {
    if (sliderContainerRef.current) {
      const width = sliderContainerRef.current.offsetWidth;
      setScreenWidth(width);
    }
  }, [sliderContainerRef]);

  useEffect(() => {
    const updateProductsPerPage = () => {
      const perPage = screenWidth < 600 ? 1 : showProductsPerPage;
      setProductsPerPage(perPage);
    };
    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);

    return () => {
      window.removeEventListener("resize", updateProductsPerPage);
    };
  }, [screenWidth, showProductsPerPage]);

  useEffect(() => {
    const updateProductWidth = () => {
      const newProductWidth =
        (screenWidth - gap * (productsPerPage - 1)) / productsPerPage;
      setNewProductWidth(newProductWidth);
    };

    window.addEventListener("resize", updateProductWidth);

    return () => {
      window.removeEventListener("resize", updateProductWidth);
    };
  }, [gap, productsPerPage, screenWidth, newProductWidth]);

  useEffect(() => {
    if (autoPlay && autoPlayDuration > 0) {
      const intervalId = setInterval(() => {
        setCurrentPage((prev) => {
          const newValue = prev + 1;
          if (newValue >= totalPages) {
            return 0;
          }
          return newValue;
        });
      }, autoPlayDuration * 1000);
      return () => {
        clearInterval(intervalId);
      };
    }

    return;
  }, [autoPlay, autoPlayDuration, totalPages]);

  useEffect(() => {
    const currentSlideProducts = groupPerSlide(products, productsPerPage);
    let translateWidth;

    currentSlideProducts.forEach((slideProducts, i) => {
      if (currentPage === i && slideProducts.length < productsPerPage) {
        const lastSlideWidth =
          fullSlideWidth -
          productWidth * (productsPerPage - slideProducts.length);

        translateWidth = lastSlideWidth - gap;
      } else {
        translateWidth = fullSlideWidth;
      }
    });

    setTranslateSliderWidth(translateWidth);
  }, [
    currentPage,
    fullSlideWidth,
    productsPerPage,
    gap,
    products,
    productWidth,
    productWithSpacing,
  ]);

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
    const page = e.currentTarget.dataset.page;

    if (page) {
      const pageNumber = Number(page);
      setCurrentPage(pageNumber);
    }
  };

  const widthProduct = {
    width: `${productWidth}px`,
    marginRight: `${gap}px`,
  };
  const slide = {
    width: `${sliderWidth}px`,
    transform: `translateX(-${translateSliderWidth}px)`,
  };
  return {
    nextPage,
    prevPage,
    pagination,
    slide,
    totalPages,
    widthProduct,
  };
};

export default useSliderData;
