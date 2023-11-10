import React from "react";
import Select from "react-select";

const options = [
  { value: "price_down", label: "Cena - od najniższej" },
  { value: "price_up", label: "Cena - od najwyższej" },
  { value: "popularity", label: "Popularność - najlepiej sprzedawane" },
  { value: "date_created_oldest", label: "Data - od najstarszej" },
  { value: "date_created_newest", label: "Data - od najnowszej" },
];

const SortingSelect = ({ onChange }) => {
  const handleSelectChange = (selectedOption) => {
    const value = selectedOption?.value || "date_created_newest";
    onChange(value);
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
        defaultValue="the_newest"
        isClearable={true}
        name="product"
        options={options}
        onChange={handleSelectChange}
        placeholder={options[options.length - 1].label}
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
