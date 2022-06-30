import React from "react";

const Input = ({ title, placeholder, required, formId }) => {

  return (
      <label className="text-gray-800 dark:text-gray-100 text-ms leading-tight tracking-normal mb-2">
        {title} <span className="text-red-700">{required}</span>
      </label>
  );
};
export default Input;
