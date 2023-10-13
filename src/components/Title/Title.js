import React from "react";
import classNames from "classnames";
import { AVAILABLE_VARIANTS, DEFAULT_VARIANT } from "./title.const.js";
import "./Title.scss";

const Title = ({children, variant}) => {
    
    const titleVariant = AVAILABLE_VARIANTS.includes(variant) ? `section-title-${variant}` : DEFAULT_VARIANT;
    const titleClasses = classNames('section-title', titleVariant);

    return(
        <h1 className={titleClasses}>
            {children}
        </h1>
    )
}
export default Title;
