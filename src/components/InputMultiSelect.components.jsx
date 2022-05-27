import React, { useState } from "react";
import Select from "react-select";

const InputMultiSelect = ({ options, multi , title, required, placeholder, selectedOption, setSelectedOption}) => {
  return (
    <div>
      <label
        className="text-gray-800 dark:text-gray-100 text-ms leading-tight tracking-normal mb-2"
      >
        {title} <span className="text-red-700">{required}</span>
      </label>
      <Select
        className="h-10 w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
        multi={multi}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputMultiSelect;
