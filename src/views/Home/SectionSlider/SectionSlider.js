import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Slider from "../../../components/Slider/Slider";
import Button from "../../../components/Button/Button";

const SectionSlider = ({
  buttonText,
  colorTitle,
  products,
  sectionTitle,
  variant,
  backgroundColor = "transparent",
}) => {
  return (
    <section
      style={{ backgroundColor: `${backgroundColor}` }}
      className="section-home section-slider"
    >
      <SectionTitle color={colorTitle}>{sectionTitle}</SectionTitle>
      <Slider products={products} autoPlay={false} showProductsPerPage={3} />
      <Button variant={variant}>{buttonText}</Button>
    </section>
  );
};

export default SectionSlider;
