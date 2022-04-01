import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategoria }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategoria((cast) => [inputValue, ...cast]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propType = {
  setCategoria: PropTypes.func.isRequired,
};
