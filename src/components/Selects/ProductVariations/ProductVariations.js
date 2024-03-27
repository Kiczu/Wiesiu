import React, { useState, useEffect, useContext, useMemo } from "react";
import Select from "react-select";
import Button from "../../Button/Button";
import CartContext from "../../../context/CartContext/CartContext";

const ProductVariations = ({ options, productData }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [variations, setVariations] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const variants = options.map((opt) =>
      opt.attributes.map(({ name, option, slug }) => ({ name, option, slug }))
    );

    const groupedVariants = {};

    variants.forEach((variation) => {
      variation.forEach((attr) => {
        const { slug, name, option } = attr;
        const prev = groupedVariants[slug] || { slug, name, options: [] };
        const options = prev.options.some((o) => o.value === option)
          ? prev.options
          : [...prev.options, { label: option, value: option }];
        groupedVariants[slug] = { ...prev, options };
      });
    });

    setVariations(Object.values(groupedVariants));
  }, [options]);

  const handleSelectChange = (selectedOption, name) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));

    const allOptionsSelected = Object.keys(selectedOptions).every(
      (name) => selectedOptions[name]
    );
    setButtonDisabled(!allOptionsSelected);
  };

  const visibleVariations = useMemo(() => {
    const variants = options.map((opt) =>
      opt.attributes.reduce(
        (acc, cur) => ({ ...acc, [cur.slug]: cur.option }),
        {}
      )
    );

    return variations.map(({ options, slug, ...rest }) => {
      const filteredOptions = options.filter((opt) =>
        Object.entries(selectedOptions)
          .filter(([key]) => key !== slug)
          .every(
            ([key, selectedOption]) =>
              !selectedOption ||
              variants.some(
                (v) => v[key] === selectedOption.value && v[slug] === opt.value
              )
          )
      );

      return { ...rest, slug, options: filteredOptions };
    });
  }, [options, selectedOptions, variations]);

  const handleAddToCart = (e) => {
    e.preventDefault();

    if (options.length > 0) {
      const productVariant = options.find((option) => {
        const isMatch = option.attributes.every((attr) => {
          return selectedOptions[attr.slug].value === attr.option;
        });
        return isMatch;
      });
      if (!productVariant) {
        return;
      }
      addToCart(productVariant);
    } else {
      const newProduct = {
        id: productData.id,
        name: productData.name,
        price: productData.price,
        attributes: selectedOptions,
        image: productData.images[0].src,
      };
      addToCart(newProduct);
    }
  };

  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#506cab" : "transparent",
    }),
  };

  return (
    <form onSubmit={handleAddToCart}>
      {visibleVariations.map(({ name, slug, options }, index) => (
        <div key={slug + index}>
          <label>{name}</label>
          <Select
            isClearable={true}
            name={slug}
            options={options}
            value={selectedOptions[slug]}
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, slug)
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
      <Button disabled={buttonDisabled} variant={"blue"}>
        Dodaj do koszyka
      </Button>
    </form>
  );
};

export default ProductVariations;
