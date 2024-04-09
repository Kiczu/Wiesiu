import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Slider from "../../../components/Slider/Slider";
import Button from "../../../components/Button/Button";
import SkeletonSlider from "../../../components/SkeletonComponents/SekeletonSlider/SkeletonSlider";
import "./SectionSlider.scss";

const SectionSlider = ({
  buttonText,
  colorTitle,
  products,
  sectionTitle,
  variant,
  backgroundColor = "transparent",
  id,
  isLoading = false,
  link,
}) => {
  return (
    <section
      id={id}
      style={{ backgroundColor: `${backgroundColor}` }}
      className="section-home section-slider"
    >
      <SectionTitle color={colorTitle}>{sectionTitle}</SectionTitle>
      {isLoading ? (
        <SkeletonSlider cards={3} />
      ) : (
        <Slider products={products} autoPlay={false} showProductsPerPage={3} />
      )}
      <Link className="section-link-button" to={link}>
        <Button variant={variant}>{buttonText}</Button>
      </Link>
    </section>
  );
};

export default SectionSlider;
