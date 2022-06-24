import React, { useState } from "react";

const InputSelectInput = ({ title, placeholder, required, options, multi, placeholder2 }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="w-96">
      <label
        className="text-gray-800 dark:text-gray-100 text-ms leading-tight tracking-normal mb-2"
      >
        {title} <span className="text-red-700">{required}</span>
      </label>

      
    </div>
  );
};
export default InputSelectInput;
