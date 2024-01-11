import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import Button from "../../Button/Button";

const ProductVariations = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [allVariations, setAllVariations] = useState({});
  const [variations, setVariations] = useState({});

  useEffect(() => {
    const allOptions = {};
    options.forEach((variation) => {
      variation.attributes.forEach((attr) => {
        if (!allOptions[attr.name]) {
          allOptions[attr.name] = [];
        }
        if (!allOptions[attr.name].includes(attr.option)) {
          allOptions[attr.name].push(attr.option);
        }
      });
    });
    setAllVariations(allOptions);
  }, [options]);
  console.log(allVariations);
  
  const handleSelectChange = (selectedOption, name) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
    console.log(selectedOption);

    // const possibleAttr = {};
    // options.forEach((productOption) => {
    //   productOption.attributes.forEach((attr) => {
    //     if (attr.option === selectedOption.value) {
    //       console.log(attr.option);
    //       possibleAttr[attr.name] = [];
    //     }
    //     debugger;
    //   });
    // });
  };

  const visibleVariations = useMemo(() => {
    if (selectedOptions) {
      // return [...variations].sort(sortFunctions[activeSort]);
    }

    return variations;
  }, [selectedOptions, variations]);

  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#506cab" : "transparent",
    }),
  };

  return (
    <form>
      {Object.keys(variations).map((name, index) => (
        <div key={index}>
          <label>{name}</label>
          <Select
            isClearable={true}
            name={name}
            options={variations[name].map((option) => ({
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
      <Button type={SubmitEvent} variant={"blue"}>
        Dodaj do koszyka
      </Button>
    </form>
  );
};

export default ProductVariations;
