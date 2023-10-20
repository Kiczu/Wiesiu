import React from "react";
import classNames from "classnames";
import { AVAILABLE_VARIANTS, DEFAULT_VARIANT } from "./buttons.const";
import "./Button.scss";

const Button = ({children, variantButton}) => {
    
    const buttonVariant = AVAILABLE_VARIANTS.includes(variantButton) ? `button-${variantButton}` : DEFAULT_VARIANT;
    const buttonClasses = classNames('button', buttonVariant);

    return(
        <button className={buttonClasses}>
            {children}
        </button>
    )
}
export default Button;
