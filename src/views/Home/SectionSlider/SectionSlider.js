import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Slider from "../../../components/Slider/Slider";
import Button from "../../../components/Button/Button";

const SectionSlider = ({
  sectionTitle,
  products,
  buttonText,
  colorTitle,
  variantButton,
}) => {
  return (
    <section className="section-home section-slider">
      <SectionTitle colorTitle={colorTitle}>{sectionTitle}</SectionTitle>
      <Slider products={products} autoPlay={false} showProductsPerPage={3} />
      <Button variantButton={variantButton}>{buttonText}</Button>
    </section>
  );
};

export default SectionSlider;
