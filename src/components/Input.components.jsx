import React from "react";

const Input = ({ title, placeholder, required }) => {
  return (
    <div>
      <label
        className="text-gray-800 dark:text-gray-100 text-ms leading-tight tracking-normal mb-2"
      >
        {title} <span className="text-red-700">{required}</span>
      </label>
      <input
        id="email"
        className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
