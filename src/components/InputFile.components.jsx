import React from "react";

const InputFile = ({ title }) => {
  return (
    <div>
      <label className="form-label inline-block text-gray-700">
        {title}
      </label>
      <input
        className="block w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
      />
    </div>
  );
};

export default InputFile;
