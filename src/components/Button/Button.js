import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({children, variant}) => {

    const availableVariants = ['button-white', 'button-blue'];
    const defaultVariant = 'button-white';
    const buttonVariant = availableVariants.includes(variant) ? variant : defaultVariant;

    const buttonClasses = classNames('button', buttonVariant);

    return(
        <button className={buttonClasses}>
            {children}
        </button>
    )
}
export default Button;
