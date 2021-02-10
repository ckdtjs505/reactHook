const useInput = (inputValue, validation) => {
  const [value, setValue] = useState(inputValue);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;

    if (typeof validation === "function" && validation(value)) {
      setValue(value);
    }
  };
  return { value, onChange };
};
