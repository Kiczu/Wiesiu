import React from "react";
import classNames from "classnames";
import { AVAILABLE_VARIANTS, DEFAULT_VARIANT } from "./sectionTitle.const";
import "./SectionTitle.scss";

const SectionTitle = ({ children, colorTitle }) => {
  const sectionTitleVariant = AVAILABLE_VARIANTS.includes(colorTitle)
    ? `section-title-${colorTitle}`
    : DEFAULT_VARIANT;
  const titleClasses = classNames("section-title", sectionTitleVariant);

  return <h2 className={titleClasses}>{children}</h2>;
};

export default SectionTitle;
