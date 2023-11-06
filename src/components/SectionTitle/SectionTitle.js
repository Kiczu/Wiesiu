import React from "react";
import classNames from "classnames";
import { AVAILABLE_VARIANTS, DEFAULT_VARIANT } from "./sectionTitle.const";
import "./SectionTitle.scss";

const SectionTitle = ({ children, color }) => {
  const variant = AVAILABLE_VARIANTS.includes(color)
    ? `section-title-${color}`
    : DEFAULT_VARIANT;
  const titleClasses = classNames("section-title", variant);

  return <h2 className={titleClasses}>{children}</h2>;
};

export default SectionTitle;
