import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";

const InputSelect = ({ title, placeholder, required, options }) => {
  return (
    <DatalistInput className="w-96"
      placeholder={placeholder}
      label={title}
      // onSelect={(item) => console.log(item.value)}
      items={options}
    />
  );
};

export default InputSelect;
