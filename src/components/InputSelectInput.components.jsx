import React, { useState } from "react";
import Select from "react-select";

const InputSelectInput = ({ title, placeholder, required, options, multi, placeholder2 }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="w-96">
      <label
        className="text-gray-800 dark:text-gray-100 text-ms leading-tight tracking-normal mb-2"
      >
        {title} <span className="text-red-700">{required}</span>
      </label>

      <div className="flex flex-row">
        <div className="basis-2/4 pr-4" >
          <Select
            className="h-10 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
            multi={multi}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={placeholder2}
          />
        </div>
        <div className="basis-2/4">
          <input
            id="email"
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};
export default InputSelectInput;
