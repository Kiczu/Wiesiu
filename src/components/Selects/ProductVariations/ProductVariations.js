import React, { useState, useEffect } from "react";
import Select from "react-select";
import Button from "../../Button/Button";

const ProductVariations = ({ options }) => {
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

  return (
    <form>
      {Object.keys(selectOptions).map((name, index) => (
        <>
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
        </>
      ))}
      <Button type={SubmitEvent} disabled={buttonDisabled} variant={"blue"}>
        Dodaj do koszyka
      </Button>
    </form>
  );
};

export default ProductVariations;
