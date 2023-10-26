import React from "react";
import classNames from "classnames";
import { AVAILABLE_VARIANTS, DEFAULT_VARIANT } from "./buttons.const";
import "./Button.scss";

const Button = ({children, variant}) => {
    
    const buttonVariant = AVAILABLE_VARIANTS.includes(variant) ? `button-${variant}` : DEFAULT_VARIANT;
    const buttonClasses = classNames('button', buttonVariant);

    return(
        <button className={buttonClasses}>
            {children}
        </button>
    )
}
export default Button;
