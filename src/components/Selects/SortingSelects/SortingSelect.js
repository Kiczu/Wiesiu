import React from "react";
import Select from "react-select";

const priceDown = "priceDown";
const priceUp = "priceUp";
const popularity = "popularity";
const theOldest = "dateCreatedOldest";
const theNewest = "dateCreatedNewest";

const options = [
  { value: priceDown, label: "Cena - od najniższej" },
  { value: priceUp, label: "Cena - od najwyższej" },
  { value: popularity, label: "Popularność - najlepiej sprzedawane" },
  { value: theOldest, label: "Data - od najstarszej" },
  { value: theNewest, label: "Data - od najnowszej" },
];

const SortingSelect = ({ onChange }) => {
  const handleSelectChange = (selectedOption) => {
    if (onChange) {
      const value = selectedOption?.value || theNewest;
      onChange(value);
    }
  };
  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#506cab" : "transparent",
    }),
  };

  return (
    <>
      <label>Sortowanie</label>
      <Select
        defaultValue={theNewest}
        isClearable={true}
        name="product"
        options={options}
        onChange={handleSelectChange}
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
  );
};
export default SortingSelect;
