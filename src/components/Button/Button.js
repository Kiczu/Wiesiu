import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({children, variant}) => {

    const buttonType = variant;

    let buttonVariant;
    switch (buttonType) {
        case 'white':
            buttonVariant = 'button-white';
          break;
        case 'blue':
            buttonVariant = 'button-blue';
          break;
        default:
            buttonVariant = 'button-white';
      }

    const buttonClasses = classNames('button', buttonVariant);

    return(
        <button className={buttonClasses}>
            {children}
        </button>
    )
}
export default Button;
