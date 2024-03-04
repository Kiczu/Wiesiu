import React, { useState, useEffect } from "react";
import Select from "react-select";
import Button from "../../Button/Button";
import woocommerceServices from "../../../services/woocommerceService";

const ProductVariations = ({ options, productId, productData, addToCart }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectOptions, setSelectOptions] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const attributeOptions = {};
    options.forEach((variation) => {
      variation.attributes.forEach((attr) => {
        if (!attributeOptions[attr.name]) {
          attributeOptions[attr.name] = [];
        }
        if (!attributeOptions[attr.name].includes(attr.option)) {
          attributeOptions[attr.name].push(attr.option);
        }
      });
    });
    setSelectOptions(attributeOptions);
  }, [options]);

  const handleSelectChange = (selectedOption, name) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));

    const allOptionsSelected = Object.keys(selectOptions).every(
      (name) => selectedOptions[name]
    );
    setButtonDisabled(!allOptionsSelected);
  };

  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#506cab" : "transparent",
    }),
  };

  // const addToCart = (productData) => {
  //   console.log(productData);
  //   const data = {
  //     id: productData.id,
  //     quantity: productData.quantity,
  //     name: productData.name,
  //     variation: productData.variation,
  //     // product_img: productImg,
  //     price: productData.price,
  //   };
  //   woocommerceServices.addToCart(data);
  // };

  return (
    <div>
      {Object.keys(selectOptions).map((name, i) => (
        <div key={i}>
          <label>{name}</label>
          <Select
            isClearable={true}
            name={name}
            options={selectOptions[name].map((option) => ({
              label: option,
              value: option,
            }))}
            value={selectedOptions[name]}
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, name)
            }
            styles={selectStyles}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#506bab31",
                primary: "#506cab",
              },
            })}
          />
        </div>
      ))}
      <Button
        onClick={() => addToCart(productId)}
        // disabled={buttonDisabled}
        variant={"blue"}
      >
        Dodaj do koszyka
      </Button>
    </div>
  );
};

export default ProductVariations;
