import React, { useState, useEffect, useMemo } from 'react';
import Select from 'react-select';
import Button from '../../Button/Button';

const ProductVariations = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [variations, setVariations] = useState([]);

  useEffect(() => {
    //Refactor tylko po łebkach zrobiłem.TODO: nazwy i wyniesienie kodu do zewnętrznych funkcji
    const variants = options.map((opt) => {
      return opt.attributes.map(({ name, option, slug }) => ({
        name,
        option,
        slug,
      }));
    });

    const groupedVariants = {};

    variants.forEach((variation) => {
      variation.forEach((attr) => {
        const prev = groupedVariants[attr.slug] || {
          slug: attr.slug,
          name: attr.name,
          options: [],
        };
        const opt = prev.options.some((o) => o.value === attr.option)
          ? prev.options
          : [...prev.options, { label: attr.option, value: attr.option }];
        groupedVariants[attr.slug] = { ...prev, options: opt };
      });
    });

    setVariations(Object.values(groupedVariants));
  }, [options]);

  const handleSelectChange = (selectedOption, name) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const visibleVariations = useMemo(() => {
    const variants = options.map((opt) => opt.attributes.reduce((acc, cur) => ({ ...acc, [cur.slug]: cur.option }), {}));

    return variations.map(({ options, slug, ...rest }) => {
      const filteredOptions = options.filter((opt) => {
        return Object.entries(selectedOptions)
          .filter(([key]) => key !== slug)
          .every(([key, selectedOption]) => {
            return (
              !selectedOption ||
              variants.some((v) => {
                return v[key] === selectedOption.value && v[slug] === opt.value;
              })
            );
          });
      });

      return { ...rest, slug, options: filteredOptions };
    });
  }, [options, selectedOptions, variations]);

  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? '#506cab' : 'transparent',
    }),
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOptions);

    const prod = options.find((opt) => opt.attributes.every(({ slug }) => selectedOptions[slug] && selectedOptions[slug].value));

    console.log(prod);
  };

  return (
    <form onSubmit={onSubmit} >
      {visibleVariations.map(({ name, slug, options }, index) => (
        <div key={slug + index}>
          <label>{name}</label>
          <Select
            isClearable={true}
            name={slug}
            options={options}
            value={selectedOptions[slug]}
            onChange={(selectedOption) => handleSelectChange(selectedOption, slug)}
            styles={selectStyles}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#506bab31',
                primary: '#506cab',
              },
            })}
          />
        </div>
      ))}
      <Button type={SubmitEvent} variant={'blue'}>
        Dodaj do koszyka
      </Button>
    </form>
  );
};

export default ProductVariations;
