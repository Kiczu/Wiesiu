import React from "react";
import Select from "react-select";

export const SORTING_OPTION = {
  PRICE_DOWN: "priceDown",
  PRICE_UP: "priceUp",
  POPULARITY: "popularity",
  THE_OLDEST: "dateCreatedOldest",
  THE_NEWEST: "dateCreatedNewest",
};

const options = [
  { value: SORTING_OPTION.PRICE_DOWN, label: "Cena - od najniższej" },
  { value: SORTING_OPTION.PRICE_UP, label: "Cena - od najwyższej" },
  { value: SORTING_OPTION.POPULARITY, label: "Popularność - najlepiej sprzedawane" },
  { value: SORTING_OPTION.THE_OLDEST, label: "Data - od najstarszej" },
  { value: SORTING_OPTION.THE_NEWEST, label: "Data - od najnowszej" },
];

const defaultOption = {
  value: SORTING_OPTION.THE_NEWEST,
  label: "Data - od najnowszej",
};

const SortingSelect = ({ onChange }) => {
  const handleSelectChange = (selectedOption) => {
    if (onChange) {
      const value = selectedOption?.value || defaultOption.value;
      onChange(value);
    }
  };
  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#fdb72b" : "#000",
      borderRadius: 0,
    }),
  };

  return (
    <>
      <Select
        defaultValue={defaultOption}
        placeholder={defaultOption.label}
        name="product"
        options={options}
        isSearchable={false}
        onChange={handleSelectChange}
        styles={selectStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#fdb72b40",
            primary: "#fdb72b",
          },
        })}
      />
    </>
  );
};
export default SortingSelect;
