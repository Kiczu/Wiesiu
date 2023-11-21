import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Slider from "../../../components/Slider/Slider";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import "./SectionSlider.scss";

const SectionSlider = ({
  buttonText,
  colorTitle,
  products,
  sectionTitle,
  variant,
  backgroundColor = "transparent",
  id,
  link,
}) => {
  return (
    <section
      id={id}
      style={{ backgroundColor: `${backgroundColor}` }}
      className="section-home section-slider"
    >
      <SectionTitle color={colorTitle}>{sectionTitle}</SectionTitle>
      <Slider products={products} autoPlay={false} showProductsPerPage={3} />
      <Link className="section-link-button" to={link}>
        <Button variant={variant}>{buttonText}</Button>
      </Link>
    </section>
  );
};

export default SectionSlider;
