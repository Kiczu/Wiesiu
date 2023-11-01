import React, {useState} from "react";
import Select from "react-select";

const options = [
  { value: "price_down", label: "Cena - od najniższej" },
  { value: "price_up", label: "Cena - od najwyższej" },
  { value: "popularity", label: "Popularność - najlepiej sprzedawane" },
  { value: "date_created_oldest", label: "Data - od najstarszej" },
  { value: "date_created_newest", label: "Data - od najnowszej" },
];

const SortingSelect = ({ onChange, products, setProducts }) => {
  const [orginalProducts, setOrginalProducts] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setOrginalProducts(products);

    if (selectedOption) {
      const selectedValue = selectedOption.value;
      onChange(selectedValue);
    } else {
      setProducts(orginalProducts);
      onChange(null);
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
        defaultValue="Wybierz"
        isClearable={true}
        name="product"
        options={options}
        onChange={handleSelectChange}
        placeholder="Wybierz"
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
