import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Slider from "../../../components/Slider/Slider";
import Button from "../../../components/Button/Button";

const SectionSlider = ({sectionTitle, products, buttonText}) => {

  return (
    <>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <Slider
        products={products}
        autoPlay={false}
        showProductsPerPage={3}
      />
      <Button>{buttonText}</Button>
    </>
  );
};

export default SectionSlider;